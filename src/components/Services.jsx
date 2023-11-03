import React from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

function Services() {
  return (
    <Flex
      id="services"
      bgColor={"rgba(18,18,16,255)"}
      flexDir={"column"}
      alignItems={"left"}
      maxW={"85vw"}
      as={"section"}
      marginInline={"auto"}
      paddingBlock={"5rem"}
    >
      <Flex maxW={"fit-content"} flexDir={"column"} gap={"1rem"}>
        <Heading
          color={"white"}
          fontFamily={"pop"}
          fontWeight={"700"}
          fontSize={"clamp(1.5rem, 2.5vw, 6rem)"}
        >
          Book your Appointment <br />
          Online
        </Heading>
        <Text
          color={"#B8B8B8"}
          fontFamily={"pop"}
          fontWeight={"500"}
          fontSize={"clamp(1.2rem, 2vw, 2.5rem)"}
          lineHeight={{ base: "short", sm: "normal" }}
        >
          Get 10% Discount on your first hair <br /> cut by using our website.
        </Text>
        <Button
          colorScheme="yellow"
          bgColor="#FBB034"
          borderRadius={"15px"}
          maxW={"fit-content"}
          alignSelf={"left"}
          fontFamily={"pop"}
          lineHeight={"16px"}
          paddingInline={"clamp(2.35rem, 3vw, 10rem)"}
          paddingBlock={"clamp(0.5rem, 1.6vw, 2rem)"}
          fontSize={"clamp(0.9rem, 1.2vw, 4rem)"}
          fontWeight={"700"}
        >
          Book Appointment
        </Button>
      </Flex>
    </Flex>
  );
}

export default Services;
