import { colors } from "@/utils/colors";
import { HStack, Link, Text } from "@chakra-ui/react";

export function TerminalLink({ href, onClick, label, text, width }) {
  return (
    <>
      <Link
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            e.stopPropagation();
            onClick();
          }
        }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        _hover={{
          color: colors.link,
          textDecoration: "none",
        }}
      >
        <HStack
          w="100%"
          gap={0}
          _hover={{
            bg: "rgba(179,139,180,.1)",
          }}
        >
          <Text w={width} color={colors.keyword}>
            [{label}]
          </Text>
          <Text>{text}</Text>
        </HStack>
      </Link>
    </>
  );
}
