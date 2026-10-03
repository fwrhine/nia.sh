import { colors } from "@/utils/colors";
import { Stack, Text } from "@chakra-ui/react";

export function NotFound({ command }) {
  return (
    <>
      <Stack>
        <Text color={colors.error}>Command not found: {command}</Text>
        <Text color={colors.highlight}>
          Type{" "}
          <Text
            as="span"
            color={colors.command}
            fontSize={"16px"}
            fontWeight={"bold"}
          >
            `help`
          </Text>{" "}
          to see what you can do here.
        </Text>
      </Stack>
    </>
  );
}
