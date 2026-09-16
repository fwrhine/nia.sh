
import { useEffect, useState } from "react";
import { Terminal } from "../terminal/terminal";
import { ImageWidget } from "../widgets/image";
import { Window } from "./window";

export function Desktop() {
  const [windows, setWindows] = useState([]);

  useEffect(() => {
    const vp = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    setWindows([
      {
        id: "terminal",
        title: "nia.sh",
        x: 160,
        y: 60,
        width: 800,
        height: 700,
        component: <Terminal />,
      },
      {
        id: "imageWidget",
        title: "girl.png",
        x: 1000,
        y: 60,
        width: 150,
        height: 186,
        component: <ImageWidget />,
      },
    ]);
  }, []);

  if (windows.length === 0) return null;

  return (
    <>
      {windows.map((window) => (
        <Window
          key={window.id}
          title={window.title}
          defaultPosition={{
            x: window.x,
            y: window.y,
          }}
          width={`${window.width}px`}
          height={`${window.height}px`}
        >
          {window.component}
        </Window>
      ))}
    </>
  );
}
