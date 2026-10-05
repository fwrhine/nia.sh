import { colors } from "@/utils/colors";
import { Link, Stack, Text } from "@chakra-ui/react";

export function Origami({}) {
  return (
    <Stack gap={4}>
      <Text>// ORIGAMI ❤︎ ❤︎ ❤︎</Text>
      <Text>A collection of things I've folded.</Text>
      <Link
        href={
          "https://app.notion.com/p/fwrhine/36b525986ae180318c32f374c6bb4d23?source=copy_link"
        }
        target="_blank"
        rel="noopener noreferrer"
        color={colors.link}
      >
        [
        <Text
          _hover={{
            textDecoration: "underline",
          }}
        >
          OPEN ARCHIVE{" "}
        </Text>
        ]
      </Link>
    </Stack>
  );
}
