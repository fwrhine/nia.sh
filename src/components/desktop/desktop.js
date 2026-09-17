import { useEffect, useLayoutEffect, useState } from "react";
import { Terminal } from "../terminal/terminal";
import { ImageWidget } from "../widgets/image";
import { CatWidget } from "../widgets/cat";
import { Window } from "./window";
import { ReadingListWidget } from "../widgets/reading-list";
import { Box, Text } from "@chakra-ui/react";

const DESKTOP_WIDTH = 1400;
const DESKTOP_HEIGHT = 900;
const MOBILE_BREAKPOINT = 1024;

export function Desktop() {
  // Windows
  const windows = [
    {
      id: "terminal",
      title: "nia.sh",
      x: 170,
      y: 120,
      width: 700,
      height: 570,
      component: Terminal,
      props: {},
      accessory: <CatWidget />,
    },
    {
      id: "imageWidget",
      title: "girl.jpg",
      x: 1050,
      y: 50,
      width: 150,
      height: 186,
      component: ImageWidget,
      props: {
        src: "/images/girl-1.jpg",
      },
    },
    {
      id: "readingListWidget",
      title: "reading-list.txt",
      x: 920,
      y: 280,
      width: 350,
      height: 190,
      component: ReadingListWidget,
      props: {},
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
    setReady(true);

    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  if (!ready) return null;

  if (isMobile) {
    return <Text>Nothing!</Text>;
  }

  return (
    <>
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
          {windows.map((window) => {
            const Component = window.component;

            return (
              <Window
                key={window.id}
                title={window.title}
                accessory={window.accessory}
                defaultPosition={{
                  x: window.x,
                  y: window.y,
                }}
                width={`${window.width}px`}
                height={`${window.height}px`}
                focused={window.id === activeWindowId}
                onFocus={() => activateWindow(window.id)}
              >
                <Component
                  {...window.props}
                  focused={window.id === activeWindowId}
                  activationId={activationId}
                />
              </Window>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
