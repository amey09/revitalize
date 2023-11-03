import React from "react";
import { Button, Flex, Heading, HStack } from "@chakra-ui/react";

function Hero() {
  return (
    <Flex
      id="hero"
      as="main"
      bgImage={"./main.png"}
      height={"100vh"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      color={"white"}
      backgroundRepeat={"no-repeat"}
      bgSize={"cover"}
      backgroundPosition={{ base: "center", md: "center top 0" }}
    >
      <Flex
        textAlign={"center"}
        flexDir={"column"}
        gap={"1.8rem"}
        transform={"translateY(3.2rem)"}
        maxW={"85vw"}
      >
        <Heading
          as="h1"
          fontFamily="pop"
          fontWeight="700"
          letterSpacing={"clamp(5px, 0.6vw , 30px)"}
          lineHeight={{ base: "1.2", md: "1.5" }}
          textAlign={{ base: "left", md: "center" }}
          fontSize={"clamp(1.8rem, 5vw, 6rem)"}
        >
          Best Hair Salon For <br /> Professional Look.
        </Heading>

        <HStack gap={"clamp(1rem, 5vw, 5rem)"} justifyContent={"center"}>
          <Button
            colorScheme="yellow"
            bgColor="#FBB034"
            color={"black"}
            borderRadius={"15px"}
            fontFamily={"pop"}
            fontWeight={"700"}
            lineHeight={"16px"}
            paddingInline={"clamp(2.35rem, 3vw, 10rem)"}
            paddingBlock={"clamp(0.9rem, 1.7vw, 2rem)"}
            fontSize={"clamp(0.9rem, 1.2vw, 4rem)"}
          >
            Book Now
          </Button>
          <Button
            colorScheme={"none"}
            border={"2px solid white"}
            bgColor="transparent"
            borderRadius={"15px"}
            color={"white"}
            fontFamily={"pop"}
            fontWeight={"700"}
            lineHeight={"16px"}
            paddingInline={"clamp(2.35rem, 3vw, 10rem)"}
            paddingBlock={"clamp(0.9rem, 1.7vw, 2rem)"}
            fontSize={"clamp(0.9rem, 1.2vw, 4rem)"}
          >
            All Services
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Hero;
