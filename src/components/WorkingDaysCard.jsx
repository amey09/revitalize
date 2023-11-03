import React from 'react'
import {Box, Button, Flex, Heading, Image, Text} from "@chakra-ui/react";

function WorkingDaysCard() {
    return (
        <Flex
            paddingBlock={"5rem"}
            maxW={"85vw"}
            marginInline={"auto"}
            as={"section"}
        >
            <Flex
                bgColor={"#FBB034"}
                as={"section"}
                borderRadius={"4.3rem"}
                flexDirection={{ base: "column", md: "row" }}
            >
                <Box flex={1} display={"flex"}>
                    <Image
                        src={"./appointment-card.png"}
                        objectFit={{ base: "cover", sm: "fill" }}
                        flexShrink={0}
                    />
                </Box>
                <Flex
                    paddingBlock={"2rem"}
                    position={"relative"}
                    flexDir={"column"}
                    alignItems={"center"}
                    color={"black"}
                    flex={1}
                    paddingInline={{ base: "0.8rem", sm: "2rem" }}
                >
                    <Flex
                        flexDir={"column"}
                        width={{ base: "auto", md: "100%" }}
                        justifyContent={"space-between"}
                        textAlign={"center"}
                        gap={"2rem"}
                    >
                        <Flex flexDir={"column"}>
                            <Heading
                                fontFamily={"pop"}
                                fontSize={"clamp(1.7rem, 2.5vw, 6rem)"}
                                letterSpacing={"clamp(5px, 0.6vw , 30px)"}
                            >
                                WORKING DAYS
                            </Heading>
                            <Text paddingTop={"0.5rem"} fontSize={"clamp(1.2rem, 1.3vw, 2.5rem)"} fontFamily={"jost"} fontWeight={"400"}>
                                We are open on all six days in a week
                            </Text>
                        </Flex>
                        <Flex
                            justifyContent={"space-between"}
                            borderBottom={"1.5px dotted black"}
                            gap={"3rem"}
                        >
                            <Text fontSize={"clamp(1.2rem, 1.3vw, 2.5rem)"} fontFamily={"pop"} fontWeight={"700"}>Tuesday</Text>
                            <Text fontSize={"clamp(1.2rem, 1.3vw, 2.5rem)"} fontFamily={"pop"}>9AM to 10PM</Text>
                        </Flex>
                        <Flex
                            justifyContent={"space-between"}
                            borderBottom={"1.5px dotted black"}
                            gap={"3rem"}
                        >
                            <Text fontSize={"clamp(1.2rem, 1.3vw, 2.5rem)"} fontFamily={"pop"} fontWeight={"700"}>Saturday</Text>
                            <Text fontSize={"clamp(1.2rem, 1.3vw, 2.5rem)"} >9AM to 10PM</Text>
                        </Flex>
                        <Button
                            bgColor="#FBB034"
                            colorScheme="yellow"
                            maxW={"fit-content"}
                            border={"1px solid black"}
                            borderRadius={"1.3rem"}
                            alignSelf={{ base: "center", md: "normal" }}
                            paddingInline={"clamp(2.35rem, 3vw, 10rem)"}
                            paddingBlock={"clamp(0.5rem, 1.6vw, 2rem)"}
                            fontSize={"clamp(0.9rem, 1.2vw, 4rem)"}
                            fontFamily={"jost"}
                            fontWeight={'400'}
                        >
                            Book now
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default WorkingDaysCard
