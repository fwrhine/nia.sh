import { Text } from "@chakra-ui/react";
import { colors } from "./colors";

export const PROJECTS = [
  {
    id: "01",
    slug: "project-01.txt",
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
    image: "/images/projects/project-01.png",
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
];
