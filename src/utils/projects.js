import { Text } from "@chakra-ui/react";
import { colors } from "./colors";

export const PROJECTS = [
  {
    id: "01",
    slug: "project-01.txt",
    title: "nia.sh",
    type: "Personal Site",
    tools: ["Next.js", "React", "Chakra UI"],
    concept: (
      <Text>
        You're looking at it. This site is my personal portfolio, presenting my
        work and background through an interactive retro desktop experience.
      </Text>
    ),
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
    concept: (
      <Text textAlign={"justify"}>
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
    image: "/images/projects/project-02.png",
    systemLog: [
      "Conducted literature review and background research.",
      "Designed the interaction concept and physical device.",
      "Iterated through low and medium-fidelity prototypes.",
      "Built a functional Arduino-based multisensory prototype.",
      "Built a React Native companion application.",
      "Designed the evaluation methodology for future studies.",
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
    id: "04",
    slug: "project-04.txt",
    title: "Dream Archives",
    type: "Personal",
    domain: "Assistive Technology",
    tools: ["Phaser", "Next.js", "Procreate", "Pixaki"],
    status: "In Progress",
    concept: (
      <Text textAlign={"justify"}>
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
    image: "/images/projects/project-02.png",
    systemLog: [
      "Designed the overall concept, structure, and visual direction of the archive.",
      "Created concept art and pixel art assets.",
      "Implemented room exploration and interaction systems.",
      "Currently developing narrative fragments and hidden interactions.",
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
];
