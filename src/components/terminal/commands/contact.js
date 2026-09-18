import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";
import { colors } from "@/utils/colors";
import { TerminalLink } from "../link";

export function Contact({}) {
  return (
    <>
      <Toaster />
      <Stack>
        <Text>Reach me at:</Text>
        <Stack gap={0}>
          {/* Email */}
          <Link
            onClick={() => {
              navigator.clipboard.writeText("aghniaprawira@outlook.com");
              toaster.create({
                description: "Email copied to clipboard!",
                type: "info",
              });
            }}
            cursor="pointer"
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
              <Text w="120px" color={colors.keyword}>
                [Email]
              </Text>

              <Text>aghniaprawira@outlook.com</Text>
            </HStack>
          </Link>

          <TerminalLink
            href="https://www.linkedin.com/in/aghnia-prawira/"
            label="LinkedIn"
            text="linkedin.com/in/aghnia-prawira/"
            width="120px"
          />
          <TerminalLink
            href="https://github.com/fwrhine"
            label="GitHub"
            text="github.com/fwrhine"
            width="120px"
          />
        </Stack>

        <Text color={colors.highlight}>
          I'm open to frontend engineering, creative technology, and
          accessibility work!
        </Text>
      </Stack>
    </>
  );
}
