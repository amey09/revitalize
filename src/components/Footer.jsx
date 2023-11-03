import React from 'react'
import {Flex, Input, InputGroup, InputRightElement, Text} from "@chakra-ui/react";
import {ChevronRightIcon} from "@chakra-ui/icons";

function Footer() {
    return (
        <Flex
            as={"footer"}
            color={"white"}
            gap={"5rem"}
            maxW={"85vw"}
            marginInline={"auto"}
            paddingBlock={"5rem"}
            flexDir={{ base: "column", md: "row" }}
        >
            {/* Column 1 */}
            <Flex
                flexDir={"column"}
                flex={"30%"}
                maxW={{ base: "100%", sm: "60%" }}
            >
                <Text fontFamily={"dmsans"} fontWeight={"400"} fontSize={"clamp(1rem, 2vw, 3rem)"} flex={1}>
                    Subscribe to our
                    <br />
                    newsletter
                </Text>
                <InputGroup marginTop={{ base: "1rem", sm: "0" }}>
                    <InputRightElement
                        bgColor={"#FBB034"}
                        alignItems={"center"}
                        borderRadius={"8px 8px 0px 0px"}

                    >
                        <ChevronRightIcon fontSize={"clamp(1rem, 1.5vw, 3rem)"} />
                    </InputRightElement>
                    <Input
                        placeholder="Email address"
                        variant={"flushed"}
                        _placeholder={{ color: "#8b8b8a" }}
                        fontSize={"clamp(1rem, 1.3vw, 3rem)"}
                        borderBottomColor={"#292927"}
                    />
                </InputGroup>
            </Flex>

            {/* Column 2 */}
            <Flex
                flex={"70%"}
                justifyContent={"space-between"}
                gap={{ base: "2rem", sm: 0 }}
                flexWrap={{ base: "wrap", md: "none" }}
                whiteSpace={"nowrap"}
                textAlign={"right"}
            >
                <Flex flexDir={"column"} flex={{ base: 1, md: 0 }}>
                    <ul
                        className="footer-list"
                        style={{
                            listStyle: "none",
                            gap: "0.8rem",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Text
                            as={"ul"}
                            color={"#FBB034"}
                            fontFamily={"dmsans"}
                            fontSize={"clamp(1rem, 2vw, 3rem)"}
                            paddingBottom={"0.5rem"}
                        >
                            Services
                        </Text>
                        <li>
                            <a href="/#">Email Marketing</a>
                        </li>
                        <li>
                            <a href="/#">Campaigns</a>
                        </li>
                        <li>
                            <a href="/#">Brandings</a>
                        </li>
                        <li>
                            <a href="/#">Offline</a>
                        </li>
                    </ul>
                </Flex>

                <Flex flexDir={"column"} flex={{ base: 1, md: 0 }}>
                    <ul
                        style={{
                            listStyle: "none",
                            gap: "0.8rem",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Text
                            as={"ul"}
                            color={"#FBB034"}
                            fontFamily={"dmsans"}
                            fontSize={"clamp(1rem, 2vw, 3rem)"}
                            paddingBottom={"0.5rem"}
                        >
                            About
                        </Text>
                        <li>
                            <a href="/#">Our Story</a>
                        </li>
                        <li>
                            <a href="/#">Benefits</a>
                        </li>
                        <li>
                            <a href="/#">Team</a>
                        </li>
                        <li>
                            <a href="/#">Careers</a>
                        </li>
                    </ul>
                </Flex>

                <Flex flexDir={"column"} flex={{ base: 1, md: 0 }}>
                    <ul
                        style={{
                            listStyle: "none",
                            gap: "0.8rem",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Text
                            as={"ul"}
                            color={"#FBB034"}
                            fontFamily={"dmsans"}
                            fontSize={"clamp(1rem, 2vw, 3rem)"}
                            paddingBottom={"0.5rem"}
                        >
                            Help
                        </Text>
                        <li>
                            <a href="/#">FAQs</a>
                        </li>
                        <li>
                            <a href="/#">Contact Us</a>
                        </li>
                    </ul>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Footer
