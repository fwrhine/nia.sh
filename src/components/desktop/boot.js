import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function BootScreen() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "." : prev + "."));
    }, 350);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      position="fixed"
      inset={0}
      bg="#111"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="lg">
        Booting{" "}
        <Text as="span" color="#dab7b8">
          nia.sh
        </Text>{" "}
        <Text as="span" display="inline-block" w="3ch">
          {dots}
        </Text>
      </Text>
    </Box>
  );
}
