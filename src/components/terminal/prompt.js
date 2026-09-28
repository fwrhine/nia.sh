import { colors } from "@/utils/colors";
import { Text } from "@chakra-ui/react";

export function Prompt() {
  return (
    <>
      <Text whiteSpace="pre">
        <Text as="span" color={colors.prompt}>
          nia@localhost
        </Text>
        <Text as="span" color={colors.path}>
          :~$
        </Text>{" "}
      </Text>
    </>
  );
}
