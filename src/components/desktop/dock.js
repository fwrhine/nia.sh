import { useEffect, useState } from "react";
import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";

export function Dock({ isWindowOpen, openWindow }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function Icon({ src, window }) {
    return (
      <Stack alignItems="center" gap={1} h="65px">
        <Image
          src={src}
          w="50px"
          cursor="pointer"
          onClick={(e) => {
            e.stopPropagation();
            openWindow(window, true);
          }}
        />
        {isWindowOpen(window) && (
          <Stack
            h="8px"
            w="13px"
            bg="#968887"
            border="3px solid #5f5858"
            borderRightColor="#b7aeaa"
            borderBottomColor="#b7aeaa"
          />
        )}
      </Stack>
    );
  }

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
      <Box
        border="3px solid #b7aeaa"
        borderBottom="none"
        position="absolute"
        bottom="0px"
        w="100%"
      >
        <HStack
          bgColor="#968887"
          w="100%"
          px={8}
          pt={3}
          pb={1}
          border="3px solid #5f5858"
          borderBottom="none"
          borderRightColor="#968887"
          justifyContent={"space-between"}
        >
          <Stack w="120px" />
          <HStack gap={6}>
            <Icon
              src="/images/icons/terminal.png"
              window="terminal"
              isOpen={true}
            />
            <Icon src="/images/icons/image.png" window="girl" isOpen={true} />
            <Icon
              src="/images/icons/text.png"
              window="readingList"
              isOpen={true}
            />
          </HStack>
          <HStack w="120px" gap={6} pb={2}>
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
