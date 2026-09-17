"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function CatWidget() {
  const FRAME_SIZE = 32;
  const TOTAL_FRAMES = 7;

  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const delay = frame === 0 ? 2000 : 250;

    const timeout = setTimeout(() => {
      setFrame((prev) => (prev + 1) % TOTAL_FRAMES);
    }, delay);

    return () => clearTimeout(timeout);
  }, [frame]);

  return (
    <Box
      w={`${FRAME_SIZE}px`}
      h={`${FRAME_SIZE}px`}
      transform="scale(2)"
      backgroundImage="url('/cat/scratch.png')"
      backgroundRepeat="no-repeat"
      backgroundPosition={`-${frame * FRAME_SIZE}px 0px`}
      imageRendering="pixelated"
    />
  );
}
