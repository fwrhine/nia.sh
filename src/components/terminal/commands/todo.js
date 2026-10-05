import { Stack, Text } from "@chakra-ui/react";

export function Todo({}) {
  return (
    <Stack gap={4}>
      <Text>// TODO</Text>
      <Stack gap={0}>
        <Text>[ ] Fold laundry</Text>
        <Text>[ ] Text her</Text>
        <Text>[ ] Find out where the train goes</Text>
        <Text>[ ] Don't miss the last train</Text>
        <Text>[ ] Buy flowers</Text>
      </Stack>

      <Text>[ ] Don't fall asleep</Text>
    </Stack>
  );
}
