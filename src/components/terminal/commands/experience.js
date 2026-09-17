import { Grid, Stack, Text } from "@chakra-ui/react";

export function Experience({}) {
  return (
    <Stack>
      <Grid templateColumns="250px auto" gap={0}>
        <Text>Freelance Web Developer</Text>
        <Text>@ Self-employed</Text>

        <Text>Frontend Engineer</Text>
        <Text>@ HubbedIn</Text>

        <Text>Research Assistant</Text>
        <Text>@ UCL GDI Hub</Text>
      </Grid>
      <Text>
        Type{" "}
        <Text as="span" color="#a55f6d">
          `cv`
        </Text>{" "}
        to download my résumé.
      </Text>
    </Stack>
  );
}
