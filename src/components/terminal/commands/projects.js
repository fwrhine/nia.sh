import { colors } from "@/utils/colors";
import { Grid, Stack, Text } from "@chakra-ui/react";

export function Projects({}) {
  return (
    <Stack gap={5}>
      <Grid templateColumns="40px auto" gap={0}>
        <Text color={colors.link}>01</Text>
        <Text>nia.sh</Text>

        <Text color={colors.link}>02</Text>
        <Text>Scent Blocks</Text>

        <Text color={colors.link}>03</Text>
        <Text>Mental Health Apps & Vision Loss</Text>

        <Text color={colors.link}>04</Text>
        <Text>Dream Archives</Text>

        <Text color={colors.link}>05</Text>
        <Text>If on a winter's night a traveler ...</Text>
      </Grid>

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
