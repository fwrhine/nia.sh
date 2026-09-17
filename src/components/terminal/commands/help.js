import { colors } from "@/utils/colors";
import { Grid, Stack, Text } from "@chakra-ui/react";

export function Help({}) {
  return (
    <Stack>
      <Text>Available commands: </Text>
      <Grid templateColumns="80px auto" gap={0}>
        <Text color={colors.keyword}>whoami</Text>
        <Text>- about me</Text>

        <Text color={colors.keyword}>work</Text>
        <Text>- work experience</Text>

        <Text color={colors.keyword}>cv</Text>
        <Text>- download my resume</Text>

        <Text color={colors.keyword}>projects</Text>
        <Text>- explore my projects</Text>

        <Text color={colors.keyword}>contact</Text>
        <Text>- say hi</Text>

        <Text color={colors.keyword}>clear</Text>
        <Text>- clear the screen</Text>
      </Grid>
    </Stack>
  );
}
