import { useLayoutEffect, useState } from "react";
import { WINDOW_DEFINITIONS } from "@/utils/windows";
import { desktop } from "@/utils/desktop";
import { Box, Text } from "@chakra-ui/react";
import { BootScreen } from "./boot";
import { Dock } from "./dock";
import { Window } from "./window";

export function Desktop() {
  // Open windows
  const [openWindows, setOpenWindows] = useState([
    "terminal",
    "girl",
    "readingList",
  ]);

  const isWindowOpen = (id) => {
    return openWindows.some((window) => window === id);
  };

  const openWindow = (id) => {
    // If open, focus
    if (isWindowOpen(id)) {
      focusWindow(id);
      return;
    }

    setOpenWindows((prev) => [...prev, id]);
    setActiveWindowId(id);
    setActivationId((prev) => prev + 1);
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((window) => window !== id));

    if (activeWindowId === id) {
      setActiveWindowId(null);
    }
  };

  // Active window focus
  const [activeWindowId, setActiveWindowId] = useState("terminal");
  const [activationId, setActivationId] = useState(0);

  const focusWindow = (id) => {
    setActiveWindowId(id);
    setActivationId((prev) => prev + 1);

    setOpenWindows((prev) => [...prev.filter((window) => window !== id), id]);
  };

  // Handle responsive
  const [scale, setScale] = useState(null);
  const [isMobile, setIsMobile] = useState(null);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const updateLayout = () => {
      const touch = window.matchMedia("(pointer: coarse)").matches;

      setIsMobile(window.innerWidth < desktop.mobileBreakpoint || touch);

      setScale(
        Math.min(
          window.innerWidth / desktop.width,
          window.innerHeight / desktop.height,
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
              w={`${desktop.width}px`}
              h={`${desktop.height}px`}
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
                const definition = WINDOW_DEFINITIONS[window];
                const Component = definition.component;

                return (
                  <Window
                    key={window}
                    defaultPosition={{
                      x: definition.x,
                      y: definition.y,
                    }}
                    title={definition.title}
                    accessory={definition.accessory}
                    width={`${definition.width}px`}
                    height={`${definition.height}px`}
                    onFocus={() => openWindow(window)}
                    onClose={() => closeWindow(window)}
                  >
                    <Component
                      {...definition.props}
                      focused={window === activeWindowId}
                      activationId={activationId}
                      isWindowOpen={isWindowOpen}
                      openWindow={openWindow}
                      focusWindow={focusWindow}
                    />
                  </Window>
                );
              })}

              {/* Dock */}
              <Dock isWindowOpen={isWindowOpen} openWindow={openWindow} />
            </Box>
          </Box>
        ))}
    </>
  );
}
