import React from 'react'
import {Button, Flex, Text} from "@chakra-ui/react";

function Aside() {
    return (
        <Flex
            as={"aside"}
            gap={"2rem"}
            color={"white"}
            alignItems={"center"}
            maxW={"85vw"}
            marginInline={"auto"}
            paddingTop={"5rem"}
            justifyContent={"flex-end"}
            textAlign={"right"}
        >
            <Text fontFamily={"dmsans"} fontWeight={"400"} fontSize={"clamp(1rem, 1.3vw, 3rem)"}>Ready to get started?</Text>
            <Button
                colorScheme="yellow"
                bgColor="#FBB034"
                borderRadius={"15px"}
                maxW={"fit-content"}
                alignSelf={"center"}
                fontFamily={"dmsans"}
                fontWeight={"700"}
                lineHeight={"16px"}
                paddingInline={"clamp(2.35rem, 3vw, 10rem)"}
                paddingBlock={"clamp(0.5rem, 1.6vw, 2rem)"}
                fontSize={"clamp(0.9rem, 1.2vw, 4rem)"}
            >
                Get started
            </Button>
        </Flex>
    )
}

export default Aside
