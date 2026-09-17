import { Box, Image } from "@chakra-ui/react";

export function ImageWidget({ src }) {
  return (
    <Box border="1px solid black">
      <Image src={src} height="150px" width="150px" />
    </Box>
  );
}
