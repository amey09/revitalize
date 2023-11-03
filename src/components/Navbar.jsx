import { Box, Flex, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box
      as={"header"}
      position={"absolute"}
      width={"100%"}
      paddingInline={{ base: "1rem", md: "7vw"}}
      paddingBlock={{ base: "0.5rem", md: "1.5rem"}}
      color={"white"}
      zIndex={999}
    >
      <HStack
        justifyContent={{ base: "center", sm: "space-between" }}
        padding={"0.5rem 0"}
        flexWrap={"wrap"}
        gap={"1rem"}
      >
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          justifySelf={"flex-start"}
        >
          <Image src={"./group16.svg"} height={"clamp(3.5rem, 10vw, 6rem)"} />
        </Flex>
        <Flex
          as="nav"
          justifyContent={{ base: "space-between" }}
          flex={{ base: 1, sm: "0" }}
          gap={"clamp(0.2rem, 4vw, 4rem)"}
        >
          <Link fontFamily={"inter"} fontSize={"clamp(1rem, 1.5vw, 2.5rem)"}>Home</Link>
          <Link fontFamily={"inter"} fontSize={"clamp(1rem, 1.5vw, 2.5rem)"}>About</Link>
          <Link fontFamily={"inter"} fontSize={"clamp(1rem, 1.5vw, 2.5rem)"}>Contact</Link>
          <Link fontFamily={"inter"} fontSize={"clamp(1rem, 1.5vw, 2.5rem)"}>Services</Link>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Navbar;
