import { useEffect, useState } from "react";
import { Box, HStack, Image, Separator, Stack, Text } from "@chakra-ui/react";

export function Dock({ openWindow }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setDate(
        new Intl.DateTimeFormat("en-US", {
          weekday: "short",
          day: "numeric",
          month: "short",
        }).format(now),
      );

      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(now),
      );
    };

    updateClock(); // run immediately

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box border="3px solid #b7aeaa" position="absolute" bottom="0px" w="100%">
        <HStack
          bgColor="#968887"
          w="100%"
          px={8}
          py={3}
          border="3px solid #5f5858"
          borderBottomColor={"#b7aeaa"}
          borderRightColor="#968887"
          justifyContent={"space-between"}
        >
          <Stack w="120px" />
          <HStack gap={6}>
            <Image
              src="/images/icons/terminal.png"
              w="50px"
              cursor="pointer"
              onClick={() => {
                openWindow("terminal");
              }}
            />
            <Image
              src="/images/icons/image.png"
              w="50px"
              cursor="pointer"
              onClick={() => {
                openWindow("girl");
              }}
            />
            <Image
              src="/images/icons/text.png"
              w="50px"
              cursor="pointer"
              onClick={() => {
                openWindow("readingList");
              }}
            />
          </HStack>
          <HStack w="120px" gap={6}>
            <Box
              w="2px"
              h="55px"
              bg="#5f5858"
              borderRight="1px solid #b7aeaa"
            />
            <Stack color="black" gap={0} alignItems={"end"}>
              <Text fontSize="sm" fontWeight={"500"}>
                {date}
              </Text>
              <Text fontSize="2xl" fontWeight={"400"}>
                {time}
              </Text>
            </Stack>
          </HStack>
        </HStack>
      </Box>
    </>
  );
}
