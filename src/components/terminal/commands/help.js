import { colors } from "@/utils/colors";
import { Grid, Stack, Text } from "@chakra-ui/react";

export function Help({}) {
  return (
    <Stack>
      <Text>Type one of the commands below: </Text>
      <Stack gap={0}>
        <Text color={colors.keyword}>&#8250; whoami</Text>

        <Text color={colors.keyword}>&#8250; work</Text>

        <Text color={colors.keyword}>&#8250; cv</Text>

        <Text color={colors.keyword}>&#8250; projects</Text>

        <Text color={colors.keyword}>&#8250; contact</Text>

        <Text color={colors.keyword}>&#8250; clear</Text>
      </Stack>
    </Stack>
  );
}
