import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";

export function Contact({}) {
  const color = "#B38BB4";

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
              color: "#D6B56D",
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
              <Text w="100px" color={color}>
                Email
              </Text>

              <Text>aghniaprawira@outlook.com</Text>
            </HStack>
          </Link>

          {/* Linkedin */}
          <Link
            href="https://www.linkedin.com/in/aghnia-prawira/"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: "#D6B56D",
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
              <Text w="100px" color={color}>
                LinkedIn
              </Text>
              <Text>linkedin.com/in/aghnia-prawira/</Text>
            </HStack>
          </Link>

          {/* Github */}
          <Link
            href="https://github.com/fwrhine"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              color: "#D6B56D",
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
              <Text w="100px" color={color}>
                GitHub
              </Text>

              <Text>github.com/fwrhine</Text>
            </HStack>
          </Link>
        </Stack>

        <Text color="#efd8ea">
          I'm open to frontend engineering, creative technology, and
          accessibility work!
        </Text>
      </Stack>
    </>
  );
}
