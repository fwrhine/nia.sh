import { colors } from "@/utils/colors";
import { HStack, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function TerminalLink({
  href,
  onClick,
  label,
  text,
  width,
  active = false,
}) {
  return (
    <>
      <Link
        display="flex"
        w="100%"
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
          bg={active ? "rgba(179,139,180,.1)" : "transparent"}
          color={active ? colors.link : undefined}
          alignItems="start"
        >
          <Text flexShrink={0} w={width} color={colors.keyword}>
            [{label}]
          </Text>
          <Text flex="1" minW={0}>
            {text}
          </Text>
        </HStack>
      </Link>
    </>
  );
}
