import { colors } from "@/utils/colors";
import { Stack, Text } from "@chakra-ui/react";

export function WhoAmI({}) {
  return (
    <Stack gap={5}>
      <Text>Hi, I'm Nia!</Text>

      <Text>
        I'm a Frontend Engineer with an interest in{" "}
        <Text color={colors.keyword} as="span">
          creating digital environments
        </Text>{" "}
        that encourage exploration, reflection, and lingering.
      </Text>
      <Text>
        Currently based in London, polishing the shards of my dreams ...
      </Text>
    </Stack>
  );
}
