import { useLayoutEffect, useState } from "react";
import { WINDOW_DEFINITIONS } from "@/utils/windows";
import { Box, Text } from "@chakra-ui/react";
import { Window } from "./window";
import { BootScreen } from "./boot";
import { Dock } from "./dock";

const DESKTOP_WIDTH = 1400;
const DESKTOP_HEIGHT = 900;
const MOBILE_BREAKPOINT = 1024;

export function Desktop() {
  // Open windows
  const openWindows = [
    {
      id: "terminal",
      definition: "terminal",
      x: 170,
      y: 120,
    },
    {
      id: "girl",
      definition: "girl",
      x: 1050,
      y: 60,
    },
    {
      id: "reading",
      definition: "readingList",
      x: 920,
      y: 280,
    },
  ];

  // Active window focus
  const [activeWindowId, setActiveWindowId] = useState("terminal");
  const [activationId, setActivationId] = useState(0);

  const activateWindow = (id) => {
    setActiveWindowId(id);
    setActivationId((prev) => prev + 1);
  };

  // Handle responsive
  const [scale, setScale] = useState(null);
  const [isMobile, setIsMobile] = useState(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const updateLayout = () => {
      const touch = window.matchMedia("(pointer: coarse)").matches;

      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT || touch);

      setScale(
        Math.min(
          window.innerWidth / DESKTOP_WIDTH,
          window.innerHeight / DESKTOP_HEIGHT,
          1,
        ),
      );
    };

    updateLayout();
    setTimeout(() => {
      setReady(true);
    }, 3150);

    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <>
      {!ready && <BootScreen />}

      {ready &&
        (isMobile ? (
          <Text>Nothing!</Text>
        ) : (
          <Box
            w="100vw"
            h="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
          >
            <Box
              position="relative"
              w={`${DESKTOP_WIDTH}px`}
              h={`${DESKTOP_HEIGHT}px`}
              transform={`scale(${scale})`}
              transformOrigin="center"
              overflow="hidden"
              onMouseDown={() => {
                setActiveWindowId(null);
                setActivationId((prev) => prev + 1);
              }}
            >
              {/* Wallpapers */}
              {/* <Wallpaper /> */}

              {/* Windows */}
              {openWindows.map((window) => {
                const definition = WINDOW_DEFINITIONS[window.definition];
                const Component = definition.component;

                return (
                  <Window
                    key={window.id}
                    defaultPosition={{
                      x: window.x,
                      y: window.y,
                    }}
                    title={definition.title}
                    accessory={definition.accessory}
                    width={`${definition.width}px`}
                    height={`${definition.height}px`}
                    focused={window.id === activeWindowId}
                    onFocus={() => activateWindow(window.id)}
                  >
                    <Component
                      {...definition.props}
                      focused={window.id === activeWindowId}
                      activationId={activationId}
                    />
                  </Window>
                );
              })}

              {/* Dock */}
              <Dock />
            </Box>
          </Box>
        ))}
    </>
  );
}
