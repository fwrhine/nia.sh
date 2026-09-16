"use client";

import { Window } from "@/components/desktop/window";
import { Terminal } from "@/components/terminal/terminal";

/*
 * Built in an upper nest in Soho.
 * September 2026.
 *
 * £60 and a dream.
 */

export default function Home() {
  return (
    <Window
      title="nia.sh"
      defaultPosition={{ x: 80, y: 60 }}
      width="900px"
      height="700px"
    >
      <Terminal />
    </Window>
  );
}
