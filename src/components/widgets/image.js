import { Box, Image } from "@chakra-ui/react";
import { useMemo } from "react";

export function ImageWidget() {
  const images = [
    "/images/girl/girl-1.jpg",
    "/images/girl/girl-2.jpeg",
    "/images/girl/girl-3.jpeg",
  ];

  const randomImage = useMemo(() => {
    return images[Math.floor(Math.random() * images.length)];
  }, []);

  return (
    <Box border="1px solid black">
      <Image src={randomImage} height="150px" width="150px" />
    </Box>
  );
}
