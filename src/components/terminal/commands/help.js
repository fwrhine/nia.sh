import { Grid, Stack, Text } from "@chakra-ui/react";

export function Help({}) {
  const color = "#B38BB4";
  return (
    <Stack>
      <Text>Available commands: </Text>
      <Grid templateColumns="80px auto" gap={0}>
        <Text color={color}>whoami</Text>
        <Text>- about me</Text>

        <Text color={color}>work</Text>
        <Text>- work experience</Text>

        <Text color={color}>cv</Text>
        <Text>- download my resume</Text>

        <Text color={color}>projects</Text>
        <Text>- explore my projects</Text>

        <Text color={color}>contact</Text>
        <Text>- say hi</Text>

        <Text color={color}>clear</Text>
        <Text>- clear the screen</Text>
      </Grid>
    </Stack>
  );
}
