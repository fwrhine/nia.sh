import { colors } from "@/utils/colors";
import { Stack, Text } from "@chakra-ui/react";
import { TerminalLink } from "../link";
import { useIsMobile } from "@/utils/mobile-context";
import { ProjectWindow } from "@/components/widgets/project";
import { PROJECTS } from "@/utils/projects";
import { useEffect, useRef, useState } from "react";

export function Projects({ executeCommand }) {
  const isMobile = useIsMobile();
  const [expanded, setExpanded] = useState(null);
  const projectRefs = useRef({});

  useEffect(() => {
    if (!isMobile || !expanded) return;

    requestAnimationFrame(() => {
      projectRefs.current[expanded]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [expanded, isMobile]);

  return (
    <Stack gap={5}>
      <Stack gap={0}>
        {PROJECTS.map((project) => (
          <Stack
            key={project.id}
            ref={(el) => {
              projectRefs.current[project.id] = el;
            }}
          >
            <TerminalLink
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

            {isMobile && expanded === project.id && (
              <ProjectWindow project={project} />
            )}
          </Stack>
        ))}
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

      {isMobile && (
        <Text color={colors.highlight}>Tap a project to expand.</Text>
      )}
    </Stack>
  );
}
