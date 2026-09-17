import { useState } from "react";
import { Terminal } from "../terminal/terminal";
import { ImageWidget } from "../widgets/image";
import { CatWidget } from "../widgets/cat";
import { Window } from "./window";
import { ReadingListWidget } from "../widgets/reading-list";
import { Box } from "@chakra-ui/react";

export function Desktop() {
  const [activeWindowId, setActiveWindowId] = useState("terminal");
  const [activationId, setActivationId] = useState(0);

  const activateWindow = (id) => {
    setActiveWindowId(id);
    setActivationId((prev) => prev + 1);
  };

  const windows = [
    {
      id: "terminal",
      title: "nia.sh",
      x: 80,
      y: 100,
      width: 800,
      height: 700,
      component: Terminal,
      props: {},
      accessory: <CatWidget />,
    },
    {
      id: "imageWidget",
      title: "girl.jpg",
      x: 1100,
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
      height: 195,
      component: ReadingListWidget,
      props: {},
    },
  ];

  return (
    <>
      <Box
        w="100vw"
        h="100vh"
        position="relative"
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
    </>
  );
}
