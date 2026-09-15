"use client";

/*
 * Built overnight in an upper nest in Soho.
 * September 14–15, 2026.
 *
 * £60 and a dream.
 */

import { Experience } from "@/components/experience";
import { Help } from "@/components/help";
import { Projects } from "@/components/projects";
import { WhoAmI } from "@/components/whoami";
import { getLoginTime } from "@/utils/date";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const loginTime = getLoginTime();

  // Input
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const executeCommand = (command) => {
    command = command.trim().toLowerCase();

    let output;

    switch (command) {
      case "whoami":
        output = (
          <>
            <WhoAmI />
          </>
        );
        break;

      case "work":
        output = (
          <>
            <Experience />
          </>
        );
        break;

      case "projects":
        output = (
          <>
            <Projects />
          </>
        );
        break;

      case "help":
        output = (
          <>
            <Help />
          </>
        );
        break;

      case "origin":
        output = (
          <>
            <Stack gap={0}>
              <Text>Built overnight in an upper nest in Soho</Text>
              <Text>September 14–15, 2026</Text>
              <br />
              <Text fontStyle="italic" color="#ae83ac">
                £60 and a dream
              </Text>
            </Stack>
          </>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        output = <Text color="red.300">Command not found: {command}</Text>;
    }

    setHistory((prev) => [
      ...prev,
      {
        command,
        output,
      },
    ]);
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

        {history.map((entry, index) => (
          <Box key={index}>
            <HStack gap={0}>
              {prompt}
              <Text>{entry.command}</Text>
            </HStack>

            {entry.output}
          </Box>
        ))}
        <HStack gap={0}>
          {prompt}

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                executeCommand(input);
                setInput("");
              }
            }}
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
