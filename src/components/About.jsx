import React from 'react'
import {Box, Button, Flex, Heading, Image, Text} from "@chakra-ui/react";

function About() {
    return (
        <Flex
            flexDir={"column"}
            paddingBlock={"5rem"}
            maxW={"85vw"}
            marginInline={"auto"}
            as={"section"}
            gap={"3.5rem"}
        >
            <Flex flexDir={{ base: "column", md: "row" }}>
                {/* Left */}
                <Flex gap={"clamp(1.2rem, 2vw, 2rem)"} flex={1}>
                    {/* InnerLeft */}
                    <Flex flexDir={"column"} gap={"clamp(1.2rem, 2vw, 2rem)"} flex={1}>
                        <Flex>
                            <Image
                                src="./grid/4.png"
                                width={"100%"}
                                height={"100%"}
                                objectFit={"contain"}
                            />
                        </Flex>
                        <Flex gap={"clamp(10px, 2vw, 2rem)"} flex={1}>
                            <Box flex={1}>
                                <Image
                                    src="./grid/1.png"
                                    marginBottom={"auto"}
                                    height={"85%"}
                                    width={"100%"}
                                    objectFit={"fill"}
                                />
                            </Box>
                            <Box flex={1}>
                                <Image
                                    src="./grid/2.png"
                                    width={"100%"}
                                    height={"100%"}
                                    objectFit={"fill"}
                                />
                            </Box>
                        </Flex>
                    </Flex>

                    {/* InnerRight */}
                    <Box flex={1}>
                        <Image
                            src="./grid/3.png"
                            width={"100%"}
                            height={"100%"}
                            objectFit={"cover"}
                        />
                    </Box>
                </Flex>

                {/* Right */}
                <Flex
                    flexDir={"column"}
                    justifyContent={"flex-start"}
                    flex={1}
                    color={"white"}
                    paddingLeft={{ base: "0", md: "4rem" }}
                    paddingTop={{ base: "1.5rem", md: 0 }}
                >
                    <Heading fontFamily={"jost"} fontWeight={"700"} color={"#FBB034"} alignSelf={"center"} fontSize={"clamp(1.5rem, 3vw, 6rem)"}>
                        About us
                    </Heading>
                    <Heading
                        marginTop={"5rem"}
                        fontFamily={"pop"}
                        fontWeight={"700"}
                        fontSize={"clamp(1.5rem, 2.5vw, 6rem)"}
                    >
                        Best Haircut Salon
                        <br />
                        For Men
                    </Heading>
                    <Text
                        marginTop={"1rem"}
                        fontFamily={"jost"}
                        fontWeight={"400"}
                        fontSize={"clamp(1.2rem, 2vw, 2.5rem)"}
                        lineHeight={{ base: "short", sm: "normal" }}
                    >
                        Let your hairdressers do their amazing job. Trim the hair to get
                        your desired look. Book appointment with us for your favorite hair
                        Styles!
                    </Text>
                </Flex>
            </Flex>
            <Button
                colorScheme="yellow"
                bgColor="#FBB034"
                borderRadius={"15px"}
                maxW={"fit-content"}
                alignSelf={"center"}
                fontFamily={"pop"}
                fontWeight={"700"}
                lineHeight={"16px"}
                paddingInline={"clamp(2.35rem, 3vw, 10rem)"}
                paddingBlock={"clamp(0.5rem, 1.6vw, 2rem)"}
                fontSize={"clamp(0.9rem, 1.2vw, 4rem)"}
            >
                Read More
            </Button>
        </Flex>
    )
}

export default About
