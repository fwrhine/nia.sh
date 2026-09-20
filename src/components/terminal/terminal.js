import { useEffect, useRef, useState } from "react";
import { getLoginTime } from "@/utils/date";

import { Experience } from "@/components/terminal/commands/experience";
import { Help } from "@/components/terminal/commands/help";
import { Projects } from "@/components/terminal/commands/projects";
import { WhoAmI } from "@/components/terminal/commands/whoami";
import { Origin } from "./commands/origin";

import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { List } from "./commands/ls";
import { Contact } from "./commands/contact";
import { colors } from "@/utils/colors";
import { toaster, Toaster } from "../ui/toaster";
import { NotFound } from "./commands/notfound";
import { Prompt } from "./prompt";

export function Terminal({ focused, activationId, isWindowOpen, openWindow }) {
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

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

      case "cv":
        return (
          <Text color={colors.link}>
            Downloading `Aghnia_Prawira_CV.pdf` ...
          </Text>
        );

      case "projects":
        return <Projects executeCommand={executeCommand} />;

      case "project 01":
        return <Text color={colors.link}>Opening `Project 01` ...</Text>;

      case "help":
        return <Help />;

      case "contact":
        return <Contact />;

      case "origin":
        return <Origin />;

      case "ls":
        return <List />;

      default:
        return <NotFound command={command} />;
    }
  };

  const executeCommand = (command) => {
    command = command.trim().toLowerCase();

    if (!command) return;

    switch (command) {
      case "clear":
        setHistory([]);
        setCommandHistory([]);
        setHistoryIndex(-1);
        return;

      case "cv":
        setCommandHistory((prev) => [...prev, command]);
        setHistoryIndex(-1);
        setHistory((prev) => [...prev, command]);

        setTimeout(downloadCV, 300);
        return;

      case "project 01":
        setCommandHistory((prev) => [...prev, command]);
        setHistoryIndex(-1);
        setHistory((prev) => [...prev, command]);

        if (isWindowOpen("project")) {
          openWindow("project");
        } else {
          setTimeout(() => {
            openWindow("project");
          }, 600);
        }
        return;

      default:
        setCommandHistory((prev) => [...prev, command]);
        setHistoryIndex(-1);
        setHistory((prev) => [...prev, command]);
    }
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

  // Download CV
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Aghnia_Prawira_CV.pdf";
    link.download = "Aghnia_Prawira_CV.pdf";
    link.click();

    toaster.create({
      description: "Download started!",
      type: "info",
    });
  };

  useEffect(() => {
    if (!focused) return;

    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }, [focused, activationId]);

  useEffect(() => {
    if (!terminalRef.current) return;

    terminalRef.current.scrollTo({
      top: terminalRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  return (
    <>
      <Toaster />
      <Box
        ref={terminalRef}
        h="100%"
        overflowY="auto"
        onClick={() => inputRef.current?.focus()}
      >
        <Stack padding={9}>
          <Text>Last login: {loginTime} </Text>
          <Stack gap={0}>
            <Text>Welcome to nia.sh</Text>
            <Text color={colors.highlight}>
              Type{" "}
              <Text as="span" color={colors.keyword}>
                `help`
              </Text>{" "}
              to see what you can do here.
            </Text>
          </Stack>

          {history.map((command, index) => (
            <Box key={index}>
              <HStack gap={0}>
                <Prompt />
                <Text>{command}</Text>
              </HStack>

              {renderCommand(command)}
            </Box>
          ))}
          <HStack gap={0}>
            <Prompt />

            <input
              ref={inputRef}
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
    </>
  );
}
