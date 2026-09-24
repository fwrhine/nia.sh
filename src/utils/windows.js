import { Terminal } from "@/components/terminal/terminal";
import { CatWidget } from "@/components/widgets/cat";
import { ImageWidget } from "@/components/widgets/image";
import { ProjectWindow } from "@/components/widgets/project";
import { ReadingListWidget } from "@/components/widgets/reading-list";
import { PROJECTS } from "./projects";

export const WINDOW_DEFINITIONS = {
  terminal: {
    title: "nia.sh",
    offsetX: -150,
    offsetY: -30,
    width: 700,
    height: 570,
    component: Terminal,
    accessory: <CatWidget image="/cat/scratch.png" frames={9} />,
  },

  girl: {
    title: "girl.jpg",
    offsetX: 420,
    offsetY: -260,
    width: 150,
    height: 186,
    component: ImageWidget,
  },

  readingList: {
    title: "reading-list.txt",
    offsetX: 400,
    offsetY: -20,
    width: 320,
    height: 190,
    component: ReadingListWidget,
  },

  project: {
    title: "project-01.txt",
    offsetX: 0,
    offsetY: -30,
    width: 650,
    height: 650,
    component: ProjectWindow,
    props: {
      project: PROJECTS[0],
    },
  },
};
