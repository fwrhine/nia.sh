import Image from "next/image";
import styles from "./page.module.css";
import { Box, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bgColor="black" h="100vh" w="100vw">
      <Text color="white">Hello</Text>
    </Box>
    // <div className={styles.page}>
    //   <main className={styles.main}>

    //   </main>
    // </div>
  );
}
