import { Experience } from "@/components/terminal/commands/experience";
import { Help } from "@/components/terminal/commands/help";
import { Projects } from "@/components/terminal/commands/projects";
import { WhoAmI } from "@/components/terminal/commands/whoami";
import { getLoginTime } from "@/utils/date";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Terminal({}) {
  // Login time
  const [loginTime, setLoginTime] = useState("");

  useEffect(() => {
    setLoginTime(getLoginTime());
  }, []);

  // Input
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [input, setInput] = useState("");

  const renderCommand = (command) => {
    switch (command) {
      case "whoami":
        return <WhoAmI />;

      case "work":
        return <Experience />;

      case "projects":
        return <Projects />;

      case "help":
        return <Help />;

      case "origin":
        return (
          <Stack gap={0}>
            <Text>Built overnight in an upper nest in Soho</Text>
            <Text>September 14–15, 2026</Text>
            <br />
            <Text fontStyle="italic" color="#ae83ac">
              £60 and a dream
            </Text>
          </Stack>
        );

      default:
        return <Text color="red.300">Command not found: {command}</Text>;
    }
  };

  const executeCommand = (command) => {
    command = command.trim().toLowerCase();

    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setCommandHistory([]);
      setHistoryIndex(-1);
      return;
    }

    setCommandHistory((prev) => [...prev, command]);
    setHistoryIndex(-1);

    setHistory((prev) => [...prev, command]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();

      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();

      if (historyIndex === -1) return;

      if (historyIndex === commandHistory.length - 1) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }

    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(input);
      setInput("");
    }
  };

  const prompt = (
    <>
      <Text whiteSpace="pre" paddingY={5}>
        <Text as="span" color="#9db390">
          nia@localhost
        </Text>
        <Text as="span" color="#538072">
          :~$
        </Text>{" "}
      </Text>
    </>
  );

  return (
    <Box h="100vh" w="100vw">
      <Stack padding={5}>
        <Text>Last login: {loginTime} </Text>
        <Stack gap={0}>
          <Text>Welcome to nia.sh</Text>
          <Text>
            Type{" "}
            <Text as="span" color="#a55f6d">
              `help`
            </Text>{" "}
            to see what you can do here.
          </Text>
        </Stack>

        {history.map((command, index) => (
          <Box key={index}>
            <HStack gap={0}>
              {prompt}
              <Text>{command}</Text>
            </HStack>

            {renderCommand(command)}
          </Box>
        ))}
        <HStack gap={0}>
          {prompt}

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#fff",
              font: "inherit",
              flex: 1,
            }}
          />
        </HStack>
      </Stack>
    </Box>
  );
}
