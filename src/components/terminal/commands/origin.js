import { colors } from "@/utils/colors";
import { Stack, Text } from "@chakra-ui/react";

export function Origin({}) {
  return (
    <Stack gap={0}>
      <Text>Built in an upper nest in Soho</Text>
      <Text>September 2026</Text>
      <br />
      <Text fontStyle="italic" color={colors.keyword}>
        £60 and a dream
      </Text>
    </Stack>
  );
}
