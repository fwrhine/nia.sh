import { useLayoutEffect, useState } from "react";
import { WINDOW_DEFINITIONS } from "@/utils/windows";
import { Box, Center } from "@chakra-ui/react";
import { BootScreen } from "./boot";
import { Dock } from "./dock";
import { Window } from "./window";
import { TerminalMobile } from "../terminal/terminal-mobile";
import { CatWidget } from "../widgets/cat";
import MobileContext from "@/utils/mobile-context";

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
    }

    if (fromDock && isWindowOpen(id)) {
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
  const [isMobile, setIsMobile] = useState(null);
  const [ready, setReady] = useState(false);
  const [layout, setLayout] = useState({
    width: 1200,
    height: 750,
  });

  useLayoutEffect(() => {
    const updateLayout = () => {
      const hasTouch = navigator.maxTouchPoints > 0;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

      setIsMobile(hasTouch && !hasFinePointer);
    };

    setLayout({
      width: Math.max(window.innerWidth, 1200),
      height: Math.max(window.innerHeight, 750),
    });

    updateLayout();
    setTimeout(() => {
      setReady(true);
    }, 3150);

    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <>
      <MobileContext.Provider value={isMobile}>
        {!ready && <BootScreen />}

        {ready &&
          (isMobile ? (
            <TerminalMobile />
          ) : (
            <Box w="100vw" h="100vh" overflow="hidden">
              <Box
                position="relative"
                w={`${layout.width}px`}
                h={`${layout.height}px`}
                onClick={() => {
                  setActiveWindowId(null);
                  setActivationId((prev) => prev + 1);
                }}
              >
                {/* Windows */}
                {openWindows.map((window) => {
                  const definition = WINDOW_DEFINITIONS[window];
                  const Component = definition.component;

                  const centerX = layout.width / 2;
                  const centerY = layout.height / 2;

                  const x = centerX + definition.offsetX - definition.width / 2;
                  const y =
                    centerY + definition.offsetY - definition.height / 2;

                  return (
                    <Window
                      key={window}
                      defaultPosition={{
                        x: x,
                        y: y,
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

                {/* Cat */}
                <Center h="100%" minW="1200px">
                  <CatWidget image="/cat/yawn.png" frames={8} />
                </Center>

                {/* Dock */}
                <Dock isWindowOpen={isWindowOpen} openWindow={openWindow} />
              </Box>
            </Box>
          ))}
      </MobileContext.Provider>
    </>
  );
}
