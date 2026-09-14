import { Grid, Text } from "@chakra-ui/react";

export function Help({}) {
  const color = "#ae83ac";
  return (
    <Grid templateColumns="80px auto" gap={0}>
      <Text color={color}>whoami</Text>
      <Text>- about me</Text>

      <Text color={color}>work</Text>
      <Text>- work experience</Text>

      <Text color={color}>cv</Text>
      <Text>- view or download my cv</Text>

      <Text color={color}>contact</Text>
      <Text>- say hi</Text>

      <Text color={color}>clear</Text>
      <Text>- clear the screen</Text>
    </Grid>
  );
}
