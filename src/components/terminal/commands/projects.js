import { colors } from "@/utils/colors";
import { Stack, Text } from "@chakra-ui/react";
import { TerminalLink } from "../link";
import { useIsMobile } from "@/utils/mobile-context";
import { ProjectWindow } from "@/components/widgets/project";
import { PROJECTS } from "@/utils/projects";
import { useState } from "react";

export function Projects({ executeCommand }) {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(null);

  return (
    <Stack gap={5}>
      <Stack gap={0}>
        {PROJECTS.map((project) => (
          <Stack key={project.id}>
            <TerminalLink
              onClick={() => {
                isMobile
                  ? setExpanded(expanded === project.id ? null : project.id)
                  : executeCommand("project 01");
              }}
              label={project.id}
              text={project.title}
              width="50px"
            />

            {isMobile && expanded === project.id && (
              <ProjectWindow project={project} />
            )}
          </Stack>
        ))}

        {/* <TerminalLink
          onClick={() => {
            executeCommand("project 01");
          }}
          label="01"
          text="nia.sh"
          width="50px"
        /> */}

        {/* {isMobile && <ProjectWindow project={PROJECTS[0]} />} */}

        {/* <TerminalLink
          onClick={() => {
            executeCommand("project 01");
          }}
          label="02"
          text="Scent Blocks"
          width="50px"
        /> */}

        {/* <TerminalLink
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
        /> */}
      </Stack>

      {!isMobile && (
        <Text color={colors.highlight}>
          Type{" "}
          <Text as="span" color={colors.keyword}>
            `project &lsaquo;number&rsaquo;`
          </Text>{" "}
          for more details.
        </Text>
      )}
    </Stack>
  );
}
