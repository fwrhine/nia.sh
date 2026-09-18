import { colors } from "@/utils/colors";
import {
  Center,
  Grid,
  HStack,
  Image,
  Link,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TerminalLink } from "../terminal/link";

export function ProjectWindow({ src }) {
  return (
    <Stack p={5} gap={5} fontSize="sm">
      <Stack>
        <Text fontSize="xl">Scent Blocks</Text>
        <Grid templateColumns="80px auto" gap={0}>
          <Text>TYPE:</Text>
          <Text>Research</Text>

          <Text>DOMAIN:</Text>
          <Text>Assistive Technology</Text>

          <Text>TOOLS:</Text>
          <HStack>
            <Text>Arduino</Text>
            <Text>•</Text>
            <Text>React Native</Text>
            <Text>•</Text>
            <Text>Figma</Text>
          </HStack>
        </Grid>
      </Stack>
      <Separator />
      <Stack>
        <Text fontWeight="500" fontSize="md">
          :: CONCEPT
        </Text>
        <Text textAlign={"justify"}>
          Children with{" "}
          <Text as="span" color={"black"} bg="#82906c" px={1}>
            Autism Spectrum Disorder (ASD)
          </Text>{" "}
          often experience difficulty transitioning between activities, which
          can lead to distress for both the child and their caregivers. While
          visual and tactile supports are widely used, olfactory stimuli remain
          largely unexplored despite their potential benefits. Scent Blocks
          explores how smell, combined with light and sound, can become a{" "}
          <Text as="span" color={"black"} bg="#987698" px={1}>
            multisensory transition aid
          </Text>{" "}
          through an interactive, customizable device that helps children build
          consistent routines.
        </Text>
      </Stack>
      <Center>
        <Image src="/images/projects/project-01.png" w="50%" />
      </Center>
      <Stack>
        <Text fontWeight="500" fontSize="md">
          :: SYSTEM LOG
        </Text>
        <Stack gap={1}>
          <Text>
            &#8250; Conducted literature review and background research.
          </Text>
          <Text>
            &#8250; Designed the interaction concept and physical device.
          </Text>
          <Text>
            &#8250; Iterated through low and medium-fidelity prototypes.
          </Text>
          <Text>
            &#8250; Built a functional Arduino-based multisensory prototype.
          </Text>
          <Text>&#8250; Built a React Native companion application.</Text>
          <Text>
            &#8250; Designed the evaluation methodology for future studies.
          </Text>
        </Stack>
      </Stack>
      <Stack>
        <Text fontWeight="500" fontSize="md">
          :: ATTACHMENTS
        </Text>

        <Stack gap={1}>
          <TerminalLink
            href="https://drive.google.com/file/d/1P_ss45qDt-ESM5OIafE9XMbh2f-D5k9h/view?usp=sharing"
            target="_blank"
            label="PDF"
            text="research-paper.pdf"
            width="60px"
          />

          <TerminalLink
            href="https://youtu.be/gFUas5kqWOA"
            label="VID"
            text="demo-video.mp4"
            width="60px"
          />

          <TerminalLink
            href="https://github.com/fwrhine/scent-diffuser"
            label="GIT"
            text="github.com/fwrhsine/scent-diffuser"
            width="60px"
          />

          <TerminalLink
            href="https://canva.link/8rcsyy45ddtmg2w"
            label="PDF"
            text="presentation-slides.pdf"
            width="60px"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}
