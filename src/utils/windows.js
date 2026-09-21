import { Terminal } from "@/components/terminal/terminal";
import { CatWidget } from "@/components/widgets/cat";
import { ImageWidget } from "@/components/widgets/image";
import { ProjectWindow } from "@/components/widgets/project";
import { ReadingListWidget } from "@/components/widgets/reading-list";
import { centerX } from "./desktop";

export const WINDOW_DEFINITIONS = {
  terminal: {
    title: "nia.sh",
    x: 170,
    y: 120,
    width: 700,
    height: 570,
    component: Terminal,
    accessory: <CatWidget image="/cat/scratch.png" frames={9} />,
  },

  girl: {
    title: "girl.jpg",
    x: 1050,
    y: 60,
    width: 150,
    height: 186,
    component: ImageWidget,
    props: {
      src: "/images/girl/girl-2.jpeg",
    },
  },

  readingList: {
    title: "reading-list.txt",
    x: 920,
    y: 280,
    width: 350,
    height: 190,
    component: ReadingListWidget,
  },

  project: {
    title: "project-01.txt",
    x: centerX(650),
    y: 80,
    width: 650,
    height: 650,
    component: ProjectWindow,
  },
};
