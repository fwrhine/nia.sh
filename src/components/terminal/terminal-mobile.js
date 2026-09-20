import { HStack, Stack, Text } from "@chakra-ui/react";
import { Prompt } from "./prompt";
import { WhoAmI } from "./commands/whoami";
import { Projects } from "./commands/projects";
import { Experience } from "./commands/experience";
import { Contact } from "./commands/contact";

export function TerminalMobile() {
  return (
    <>
      <Stack padding={5}>
        <Text>Last login: </Text>
        <Text>Welcome to nia.sh</Text>
        <HStack gap={0}>
          <Prompt />
          <Text>whoami</Text>
        </HStack>
        <WhoAmI />

        <HStack gap={0}>
          <Prompt />
          <Text>work</Text>
        </HStack>
        <Experience />

        <HStack gap={0}>
          <Prompt />
          <Text>projects</Text>
        </HStack>
        <Projects />

        <HStack gap={0}>
          <Prompt />
          <Text>contact</Text>
        </HStack>
        <Contact />
      </Stack>
    </>
  );
}
