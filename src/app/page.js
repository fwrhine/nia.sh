"use client";

import { Window } from "@/components/desktop/window";
import { Terminal } from "@/components/terminal/terminal";
import { ImageWidget } from "@/components/widgets/image";
import { useEffect, useState } from "react";

/*
 * Built in an upper nest in Soho.
 * September 2026.
 *
 * £60 and a dream.
 */

export default function Home() {
  const [viewport, setViewport] = useState(null);

  useEffect(() => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  if (!viewport) return null;

  return (
    <>
      <Window
        title="nia.sh"
        defaultPosition={{ x: 160, y: 60 }}
        width="900px"
        height="700px"
      >
        <Terminal />
      </Window>

      <Window
        title="girl.png"
        defaultPosition={{
          x: viewport.width - 300,
          y: 60,
        }}
        width="150px"
        height="186px"
      >
        <ImageWidget />
      </Window>
    </>
  );
}
