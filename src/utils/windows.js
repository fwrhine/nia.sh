import { Terminal } from "@/components/terminal/terminal";
import { CatWidget } from "@/components/widgets/cat";
import { ImageWidget } from "@/components/widgets/image";
import { ProjectWindow } from "@/components/widgets/project";
import { ReadingListWidget } from "@/components/widgets/reading-list";

export const WINDOW_DEFINITIONS = {
  terminal: {
    title: "nia.sh",
    width: 700,
    height: 570,
    component: Terminal,
    accessory: <CatWidget />,
  },

  girl: {
    title: "girl.jpg",
    width: 150,
    height: 186,
    component: ImageWidget,
    props: {
      src: "/images/girl/girl-1.jpg",
    },
  },

  readingList: {
    title: "reading-list.txt",
    width: 350,
    height: 190,
    component: ReadingListWidget,
  },

  project: {
    title: "project-01.txt",
    width: 650,
    height: 650,
    component: ProjectWindow,
  },
};
