import { Image } from "@chakra-ui/react";

export function Wallpaper() {
  return (
    <>
      <Image
        src={"/images/sky/cloud-1.png"}
        height="130px"
        position="absolute"
        top="610px"
        left="-20px"
      />
      <Image
        src={"/images/sky/cloud-1.png"}
        height="100px"
        position="absolute"
        top="410px"
        left="400px"
      />
      <Image
        src={"/images/sky/moon.png"}
        height="80px"
        position="absolute"
        top="20px"
        right="0px"
      />
    </>
  );
}
