import { colors } from "@/utils/colors";
import { Stack, Text } from "@chakra-ui/react";
import { TerminalLink } from "../link";

export function Projects({ executeCommand }) {
  return (
    <Stack gap={5}>
      <Stack gap={0}>
        <TerminalLink
          onClick={() => {
            executeCommand("project 01");
          }}
          label="01"
          text="nia.sh"
          width="50px"
        />

        <TerminalLink
          onClick={() => {
            executeCommand("project 01");
          }}
          label="02"
          text="Scent Blocks"
          width="50px"
        />

        <TerminalLink
          onClick={() => {
            executeCommand("project 01");
          }}
          label="03"
          text="Mental Health Apps & Vision Loss"
          width="50px"
        />

        <TerminalLink
          onClick={() => {
            executeCommand("project 01");
          }}
          label="04"
          text="Dream Archives"
          width="50px"
        />

        <TerminalLink
          onClick={() => {
            executeCommand("project 01");
          }}
          label="05"
          text="If on a winter's night a traveler ..."
          width="50px"
        />
      </Stack>

      <Text color={colors.highlight}>
        Type{" "}
        <Text as="span" color={colors.keyword}>
          `project &lsaquo;number&rsaquo;`
        </Text>{" "}
        for more details.
      </Text>
    </Stack>
  );
}
