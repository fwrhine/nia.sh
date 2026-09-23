import { colors } from "@/utils/colors";
import { Box, Button, Center, Stack, Text } from "@chakra-ui/react";

export function SystemNotice({ onEnter }) {
  return (
    <>
      <Box
        position="fixed"
        inset={0}
        bg="blackAlpha.700"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={1000}
      >
        <Box
          p="2px"
          bg="#0d0d0d"
          border="1px solid #7a7a7a"
          boxShadow="6px 6px 0 #202020"
          w="90%"
          maxW="380px"
          fontFamily="var(--font-ibm-plex-mono)"
        >
          {/* Title bar */}
          <Box
            borderBottom="2px solid"
            borderColor="#8a8a8a"
            px={4}
            py={2}
            fontSize="14px"
          >
            SYSTEM NOTICE
          </Box>

          {/* Content */}
          <Stack fontSize="14px" p={6} gap={4}>
            <Text>Interactive desktop unavailable.</Text>
            <Text>For the full experience, please visit on a desktop.</Text>
            <Text>Press ENTER to continue.</Text>
            <Center>
              <Button
                variant="ghost"
                fontFamily="inherit"
                color={colors.boot}
                fontSize="md"
                _hover={{
                  bg: "transparent",
                  color: colors.link,
                  textDecoration: "none",
                }}
                onClick={onEnter}
              >
                [ ENTER ]
              </Button>
            </Center>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
