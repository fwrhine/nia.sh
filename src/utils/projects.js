import { Center, Image, Stack, Text } from "@chakra-ui/react";
import { colors } from "./colors";

export const PROJECTS = [
  {
    id: "01",
    slug: "project-01.txt",
    title: "nia.sh",
    type: "Personal Site",
    tools: ["Next.js", "React", "Chakra UI"],
    concept: ({ isMobile }) => (
      <Text>
        You're looking at it! This site is my personal portfolio, where you can
        explore my work through an{" "}
        <Text as="span" color={"black"} bg={colors.prompt} px={1}>
          interactive terminal
        </Text>{" "}
        interface inspired by retro operating systems.{" "}
        {isMobile && (
          <Text as="span" color={colors.keyword}>
            [You're currently viewing the mobile version &mdash; visit on
            desktop for the full experience.]
          </Text>
        )}
      </Text>
    ),
    image: { mobile: { url: "/images/projects/project-01.png", w: "100%" } },
    systemLog: [
      "Designed a visual language inspired by retro desktop OS.",
      "Built a draggable multi-window interface with dynamic window management.",
      "Implemented an interactive terminal.",
      "Created responsive desktop and mobile experiences.",
    ],
    attachments: [
      {
        label: "GIT",
        text: "github.com/fwrhine/nia.sh",
        href: "https://github.com/fwrhine/nia.sh",
      },
    ],
  },
  {
    id: "02",
    slug: "project-02.txt",
    title: "Scent Blocks",
    type: "Research",
    domain: "Assistive Technology",
    tools: ["Arduino", "React Native", "Figma"],
    concept: ({ isMobile }) => (
      <Text>
        Children with{" "}
        <Text as="span" color={"black"} bg={colors.keyword} px={1}>
          Autism Spectrum Disorder (ASD)
        </Text>{" "}
        often experience difficulty transitioning between activities, which can
        lead to distress for both the child and their caregivers. While visual
        and tactile supports are widely used, olfactory stimuli remain largely
        unexplored despite their potential benefits. Scent Blocks explores how
        smell, combined with light and sound, can become a{" "}
        <Text as="span" color={"black"} bg={colors.prompt} px={1}>
          multisensory transition aid
        </Text>{" "}
        through an interactive, customizable device that helps children build
        consistent routines.
      </Text>
    ),
    image: {
      desktop: { url: "/images/projects/project-02.png", w: "60%" },
      mobile: { url: "/images/projects/project-02.png", w: "100%" },
    },
    systemLog: [
      "Conducted literature review.",
      "Designed the interaction concept and physical device.",
      "Iterated through low and medium-fidelity prototypes.",
      "Built a functional Arduino-based prototype.",
      "Built a React Native companion application.",
      "Designed an evaluation methodology for future studies.",
    ],
    attachments: [
      {
        label: "PDF",
        text: "research-paper.pdf",
        href: "https://drive.google.com/file/d/1P_ss45qDt-ESM5OIafE9XMbh2f-D5k9h/view?usp=sharing",
      },
      {
        label: "VID",
        text: "demo-video.mp4",
        href: "https://youtu.be/gFUas5kqWOA",
      },
      {
        label: "GIT",
        text: "github.com/fwrhsine/scent-diffuser",
        href: "https://github.com/fwrhine/scent-diffuser",
      },
      {
        label: "PDF",
        text: "presentation-slides.pdf",
        href: "https://canva.link/8rcsyy45ddtmg2w",
      },
    ],
  },
  {
    id: "03",
    slug: "project-03.txt",
    title: "Dissertation",
    pTitle:
      "Exploring Mental Health App Use Among Individuals with Vision Loss",
    type: "Research",
    domain: "Accessibility",
    programme: "MSc Disability, Design and Innovation at UCL",
    institution: "University College London",
    tools: ["Qualitative Research", "Thematic Analysis", "TAM"],
    concept: ({ isMobile }) => (
      <Text>
        The study explores how adults with{" "}
        <Text as="span" color="black" bg={colors.keyword} px={1}>
          acquired vision loss
        </Text>{" "}
        perceive and engage with{" "}
        <Text as="span" color="black" bg={colors.prompt} px={1}>
          mental health apps
        </Text>
        . Through semi-structured interviews with UK-based participants, it
        examines attitudes towards digital mental health support, barriers to
        access, and the features and considerations that could make these tools
        more accessible, inclusive, and relevant to people with vision loss.
      </Text>
    ),
    systemLog: [
      "Conducted literature review.",
      "Designed and conducted semi-structured interviews with UK-based participants.",
      "Performed thematic analysis to identify key themes and barriers.",
      "Applied the Technology Acceptance Model (TAM) to analyse attitudes towards mental health apps.",
      "Developed design recommendations around accessibility, inclusivity, privacy, and tailored support.",
    ],
    attachments: [
      {
        label: "PDF",
        text: "research-paper.pdf",
        href: "https://drive.google.com/file/d/1Mt2ROTtOueHYs00yEjALU63aTeP7Ixha/view?usp=sharing",
      },
    ],
  },
  {
    id: "04",
    slug: "project-04.txt",
    title: "Dream Archives",
    type: "Personal",
    domain: "Creative Technology",
    tools: ["Phaser", "Next.js", "Procreate", "Pixaki"],
    status: "IN PROGRESS",
    concept: ({ isMobile }) => (
      <Text>
        Dream Archives is an ongoing personal archive exploring{" "}
        <Text as="span" color="black" bg={colors.keyword} px={1}>
          memory, place, and atmosphere
        </Text>
        . Inspired by PC-98 adventure games and visual novels, the project
        experiments with{" "}
        <Text as="span" color="black" bg={colors.prompt} px={1}>
          interactive storytelling
        </Text>{" "}
        as a way of documenting thoughts, memories, and ideas. Visitors are
        invited to wander through interconnected rooms, uncover fragments, and
        linger at their own pace. It is currently under active development.
      </Text>
    ),
    image: {
      desktop: { url: "/images/projects/project-04.png", w: "90%" },
      mobile: { url: "/images/projects/project-04.png", w: "100%" },
    },
    systemLog: [
      "Designed the overall concept, structure, and visual direction of the archive.",
      "Created concept art and pixel art assets.",
      "Implemented room exploration and interaction systems.",
      "Currently developing narrative fragments and hidden interactions.",
    ],
    attachments: [
      {
        label: "WEB",
        text: "dream-archives.vercel.app",
        href: "https://dream-archives.vercel.app/",
      },
      {
        label: "GIT",
        text: "github.com/fwrhine/dream-archives",
        href: "https://github.com/fwrhine/dream-archives",
      },
    ],
  },
  {
    id: "05",
    slug: "project-05.txt",
    title: "If on a winter's night a traveler ...",
    type: "Personal",
    domain: "Visual Novel",
    tools: ["Unity", "C#", "Procreate", "Pixaki"],
    status: "EARLY DEVELOPMENT",
    concept: ({ isMobile }) => (
      <Stack gap={5}>
        <Center>
          <Image
            src={"/images/projects/project-05.png"}
            w={{ base: "100%", md: "60%" }}
          />
        </Center>
        <Text>
          On a cold winter evening, a young man boards a long-distance train
          bound for the countryside. The carriage is almost empty, save for a
          young woman travelling alone. The steady motion of the train lulls
          them to sleep, but when they wake, they find themselves sitting across
          from each other in a carriage that seems somehow different from
          before. Unsure whether they are awake or dreaming, the two strangers
          must make sense of their strange journey while learning about each
          other's lives along the way...
        </Text>
        <Text>
          <Text as="span" color={colors.keyword}>
            `If on a winter's night a traveler...`
          </Text>{" "}
          is a retro-inspired visual novel in early development, taking its
          title from Italo Calvino's original work. The project is a
          character-driven narrative exploring the unexpected connection between
          two strangers isolated together for a period of time.
          <br />
          <br />
          Coming soon!{" "}
          <Text as="span" color={"#fe54b2"}>
            ❤︎ ❤︎ ❤︎
          </Text>
        </Text>
      </Stack>
    ),
    systemLog: [
      "Developed the concept, narrative premise, and visual direction.",
      "Developed the characters and their visual identities.",
      "Designed the environments, atmosphere, and audiovisual elements.",
      "Developed the storyline, dialogue, and branching narrative structure.",
      "Currently drawing scenes and beginning Unity development.",
    ],
  },
];
