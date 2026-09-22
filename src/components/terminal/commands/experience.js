import { colors } from "@/utils/colors";
import { useIsMobile } from "@/utils/mobile-context";
import { downloadCV } from "@/utils/utils";
import { Box, Grid, Stack, Text } from "@chakra-ui/react";

export function Experience({}) {
  const isMobile = useIsMobile();

  return (
    <Stack>
      <Grid templateColumns="250px auto" gap={0}>
        <Text>Freelance Web Developer</Text>
        <Text>@ Self-employed</Text>

        <Text>Frontend Engineer</Text>
        <Text>@ HubbedIn</Text>

        <Text>Research Assistant</Text>
        <Text>@ UCL GDI Hub</Text>
      </Grid>
      {!isMobile && (
        <Text color={colors.highlight}>
          Type{" "}
          <Text as="span" color={colors.keyword}>
            `cv`
          </Text>{" "}
          to download my resume.
        </Text>
      )}
      {isMobile && (
        <Box
          _hover={{
            bg: "rgba(179,139,180,.1)",
          }}
        >
          <Text
            color={colors.link}
            cursor="pointer"
            onClick={() => {
              downloadCV();
            }}
          >
            [↓ Download CV]
          </Text>
        </Box>
      )}
    </Stack>
  );
}
