"use client";

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export function Window({
  title,
  children,
  accessory,
  focused,
  onFocus,
  onClose,
  defaultPosition = { x: 100, y: 100 },
  width = "800px",
  height = "600px",
}) {
  const windowRef = useRef(null);
  const positionRef = useRef(defaultPosition);
  const [position, setPosition] = useState(defaultPosition);

  const drag = useRef({
    dragging: false,
    offsetX: 0,
    offsetY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!drag.current.dragging) return;

      const width = windowRef.current?.offsetWidth ?? 0;
      //   const height = windowRef.current?.offsetHeight ?? 0;
      const MARGIN = 40;

      const newX = e.clientX - drag.current.offsetX;
      const newY = e.clientY - drag.current.offsetY;

      const next = {
        x: Math.max(
          -width + MARGIN,
          Math.min(newX, window.innerWidth - MARGIN),
        ),

        y: Math.max(0, Math.min(newY, window.innerHeight - MARGIN)),
      };

      positionRef.current = next;
      setPosition(next);
    };

    const handleMouseUp = () => {
      drag.current.dragging = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <Box
      position="absolute"
      left={0}
      top={0}
      transform={`translate(${position.x}px, ${position.y}px)`}
    >
      {/* Window decoration */}
      {accessory && (
        <Box
          position="absolute"
          top="-26px"
          right="36px"
          zIndex={100}
          pointerEvents="none"
        >
          {accessory}
        </Box>
      )}
      <Box
        ref={windowRef}
        width={width}
        height={height}
        bg="#1b1b1b"
        border="3px solid #b7aeaa"
        overflow="hidden"
        onMouseDown={(e) => {
          e.stopPropagation();
          onFocus?.();
        }}
      >
        {/* Title bar */}
        <Flex
          h="36px"
          align="center"
          justify="space-between"
          padding={1}
          bg="#968887"
          border="2px solid #5f5858"
          borderBottomColor={"#b7aeaa"}
          borderRightColor="#968887"
          cursor="grab"
          userSelect="none"
          onMouseDown={(e) => {
            drag.current.dragging = true;
            drag.current.offsetX = e.clientX - positionRef.current.x;

            drag.current.offsetY = e.clientY - positionRef.current.y;
          }}
        >
          <Text fontSize="sm" color="black" fontWeight="500" paddingLeft={2}>
            {title}
          </Text>
          <Box
            w="22px"
            h="22px"
            bg="#968887"
            display="flex"
            alignItems="center"
            cursor="pointer"
            justifyContent="center"
            borderTop="2px solid #d8d0d0"
            borderLeft="2px solid #d8d0d0"
            borderRight="2px solid #5f5858"
            borderBottom="2px solid #5f5858"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <Image src="/images/icons/close.png" />
          </Box>
        </Flex>

        {/* Window content */}
        <Box h="calc(100% - 36px)" overflowY="auto">
          {children}
        </Box>
      </Box>
    </Box>
  );
}
