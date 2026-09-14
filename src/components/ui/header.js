import { Box, Flex, Separator, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Header({}) {
  const getCurrentTime = () =>
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(new Date());

  const [time, setTime] = useState(getCurrentTime);

  useEffect(() => {
    const update = () => {
      setTime(getCurrentTime);
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Flex padding={5} justify={"space-between"}>
        <Text color="#9db390">nia@localhost:~</Text>
        <Text>{time}</Text>
      </Flex>
      <Separator size="xs" color="#99b489" />
    </Box>
  );
}
