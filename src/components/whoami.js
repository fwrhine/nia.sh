import { Stack, Text } from "@chakra-ui/react";

export function WhoAmI({}) {
  return (
    <Stack>
      <Text>
        Hi, I'm Nia — a Frontend Engineer interested in human-centered and
        thoughtful web experiences.
      </Text>

      <Text>
        Currently based in London, polishing the shards of my dreams...
      </Text>

      <Text>
        Type{" "}
        <Text as="span" color="#a55f6d">
          `help`
        </Text>{" "}
        to see what you can do here.
      </Text>
    </Stack>
  );
}
