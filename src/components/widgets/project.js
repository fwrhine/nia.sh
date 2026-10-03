import {
  Center,
  Grid,
  HStack,
  Image,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TerminalLink } from "../terminal/link";
import { colors } from "@/utils/colors";
import { useIsMobile } from "@/utils/mobile-context";
import React from "react";

export function ProjectWindow({ project }) {
  const isMobile = useIsMobile();

  return (
    <Stack
      px={{ base: 0, md: 5 }}
      pt={{ base: 0, md: 5 }}
      pb={7}
      gap={5}
      fontSize={{ base: "md", md: "sm" }}
    >
      <Stack>
        <Text fontSize="xl" color={{ base: colors.highlight, md: "white" }}>
          {project.title}
        </Text>
        <Grid templateColumns="95px auto" gap={0}>
          {project.pTitle && (
            <>
              <Text color={colors.link}>TITLE:</Text>
              <Text color={colors.link}>{project.pTitle}</Text>
            </>
          )}

          <Text>TYPE:</Text>
          <Text>{project.type}</Text>

          {project.domain && (
            <>
              <Text>DOMAIN:</Text>
              <Text>{project.domain}</Text>
            </>
          )}

          {project.programme && (
            <>
              <Text>PROGRAMME:</Text>
              <Text>{project.programme}</Text>
            </>
          )}

          <Text>TOOLS:</Text>
          <HStack wrap="wrap" rowGap={0}>
            {project.tools.map((tool, i) => {
              return (
                <HStack key={i}>
                  <Text>{tool}</Text>
                  {i < project.tools.length - 1 && <Text>•</Text>}
                </HStack>
              );
            })}
          </HStack>
          {project.status && (
            <>
              <Text color={colors.link}>STATUS:</Text>
              <Text color={colors.link}>{project.status}</Text>
            </>
          )}
        </Grid>
      </Stack>
      <Separator />
      <Stack>
        <Text fontWeight="500" fontSize="md">
          :: CONCEPT
        </Text>
        {project.concept({ isMobile })}
      </Stack>

      {!isMobile && project.image?.desktop && (
        <Center py={3}>
          <Image src={project.image.desktop.url} w={project.image.desktop.w} />
        </Center>
      )}
      {isMobile && project.image?.mobile && (
        <Center py={2}>
          <Image src={project.image.mobile.url} w={project.image.mobile.w} />
        </Center>
      )}

      <Stack>
        <Text fontWeight="500" fontSize="md">
          :: SYSTEM LOG
        </Text>
        <Grid templateColumns={"20px auto"} gap={0}>
          {project.systemLog.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <Text>&#8250;</Text>
                <Text>{item}</Text>
              </React.Fragment>
            );
          })}
        </Grid>
      </Stack>
      {project.attachments && (
        <Stack>
          <Text fontWeight="500" fontSize="md">
            :: ATTACHMENTS
          </Text>

          <Stack gap={1}>
            {project.attachments.map((attachment, i) => {
              return (
                <TerminalLink
                  key={i}
                  href={attachment.href}
                  label={attachment.label}
                  text={attachment.text}
                  width="60px"
                />
              );
            })}
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}
