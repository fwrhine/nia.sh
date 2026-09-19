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

  const openWindow = (id, fromDock = false) => {
    if (!isWindowOpen(id)) {
      setOpenWindows((prev) => [...prev, id]);
      return;
    }

    if (fromDock) {
      shakeWindow(id);
    }

    focusWindow(id);
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
  const [zIndices, setZIndices] = useState({
    terminal: 1,
    girl: 2,
    readingList: 3,
  });

  const focusWindow = (id) => {
    setActiveWindowId(id);
    setActivationId((prev) => prev + 1);

    setZIndices((prev) => {
      const highest = Math.max(...Object.values(prev));

      return {
        ...prev,
        [id]: highest + 1,
      };
    });
  };

  // Give visual feedback when an opened window is clicked from the dock
  const [shakingWindowId, setShakingWindowId] = useState(null);
  const shakeWindow = (id) => {
    setShakingWindowId(id);

    setTimeout(() => {
      setShakingWindowId(null);
    }, 160);
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
              onClick={() => {
                setActiveWindowId(null);
                setActivationId((prev) => prev + 1);
              }}
            >
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
                    focused={window === activeWindowId}
                    shake={shakingWindowId === window}
                    zIndex={zIndices[window]}
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
