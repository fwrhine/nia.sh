import { Grid, Stack, Text } from "@chakra-ui/react";

export function Projects({}) {
  const color = "#ae83ac";
  const subColor = "#D6B56D";

  return (
    <Stack gap={5}>
      <Grid templateColumns="40px auto" gap={0}>
        <Text color={subColor}>01</Text>
        <Text color={color}>nia.sh</Text>

        <Text color={subColor}>02</Text>
        <Text color={color}>Scent Blocks</Text>

        <Text color={subColor}>03</Text>
        <Text color={color}>Mental Health Apps & Vision Loss</Text>

        <Text color={subColor}>04</Text>
        <Text color={color}>Dream Archives</Text>

        <Text color={subColor}>05</Text>
        <Text color={color}>If on a winter's night a traveler ...</Text>
      </Grid>

      <Text>Type "project &lsaquo;number&rsaquo;" for more details.</Text>
    </Stack>
  );
}
