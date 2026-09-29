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

export function ProjectWindow({ project }) {
  return (
    <Stack
      px={{ base: 0, md: 5 }}
      pt={{ base: 2, md: 5 }}
      pb={7}
      gap={5}
      fontSize={{ base: "md", md: "sm" }}
    >
      <Stack>
        <Text fontSize="xl" color={colors.highlight}>
          {project.title}
        </Text>
        <Grid templateColumns="80px auto" gap={0}>
          <Text>TYPE:</Text>
          <Text>{project.type}</Text>

          {project.domain && (
            <>
              <Text>DOMAIN:</Text>
              <Text>{project.domain}</Text>
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
        </Grid>
      </Stack>
      <Separator />
      <Stack>
        <Text fontWeight="500" fontSize="md">
          :: CONCEPT
        </Text>
        {project.concept}
      </Stack>
      {project.image && (
        <Center>
          <Image src={project.image} w="50%" />
        </Center>
      )}
      <Stack>
        <Text fontWeight="500" fontSize="md">
          :: SYSTEM LOG
        </Text>
        <Stack gap={1}>
          {project.systemLog.map((item, i) => {
            return <Text key={i}>&#8250; {item}</Text>;
          })}
        </Stack>
      </Stack>
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
    </Stack>
  );
}
