import { colors } from "@/utils/colors";
import { Separator, Stack, Text } from "@chakra-ui/react";
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
      {!isMobile && (
        <Text color={colors.help}>
          Type{" "}
          <Text
            as="span"
            color={colors.command}
            fontSize={"16px"}
            fontWeight={"bold"}
          >
            `project &lsaquo;number&rsaquo;`
          </Text>{" "}
          for more details.
        </Text>
      )}
      <Stack gap={0}>
        {PROJECTS.map((project) => (
          <TerminalLink
            key={project.id}
            onClick={() => {
              isMobile
                ? setExpanded(expanded === project.id ? null : project.id)
                : executeCommand(`project ${project.id}`);
            }}
            active={isMobile && expanded === project.id}
            label={project.id}
            text={project.title}
            width="50px"
            project={true}
          />
        ))}
      </Stack>

      {expanded && (
        <>
          <ProjectWindow project={PROJECTS.find((p) => p.id === expanded)} />
        </>
      )}

      {isMobile && (
        <Text color={colors.highlight}>Tap a project to expand.</Text>
      )}
    </Stack>
  );
}
