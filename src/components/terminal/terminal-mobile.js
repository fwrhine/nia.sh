import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { Prompt } from "./prompt";
import { WhoAmI } from "./commands/whoami";
import { Projects } from "./commands/projects";
import { Experience } from "./commands/experience";
import { Contact } from "./commands/contact";
import { getLoginTime } from "@/utils/utils";
import { useState } from "react";
import { SystemNotice } from "../desktop/system-notice";

function PromptLine({ command }) {
  return (
    <Box py={5}>
      <HStack gap={0} bg="rgba(222, 191, 222, 0.13)">
        <Prompt />
        <Text>{command}</Text>
      </HStack>
    </Box>
  );
}

export function TerminalMobile() {
  const [loginTime] = useState(() => getLoginTime());
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {showPopup && (
        <SystemNotice
          onEnter={() => {
            setShowPopup(false);
          }}
        />
      )}
      <Stack p={8}>
        <Text>Last login: {loginTime}</Text>
        <Text>Welcome to nia.sh</Text>

        <PromptLine command="whoami" />
        <WhoAmI />

        <PromptLine command="work" />
        <Experience />

        <PromptLine command="projects" />
        <Projects />

        <PromptLine command="contact" />
        <Contact />
      </Stack>
    </>
  );
}
