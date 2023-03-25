import React from "react";
import { Box, HStack, VStack, Stack, Container,  Text, Flex, Spacer, background } from "@chakra-ui/react";
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'

const avatarSrc = "https://avatars.githubusercontent.com/u/25058652";

const Footer = () => {
  return (
    // <Box
    //   bgGradient='linear(to-l, #25274D, #5AB9EA)'
    //   color={"whiteAlpha.700"}
    //   minH={"48"}
    //   px={"16"}
    //   py={["16", "8"]}
    // >
    //   <Flex direction={["column", "row"]} h={"full"} alignItems={"center"}>

    //     <Flex bgColor={"black"} minWidth='max-content' flexDir={"row"} w={"full"} justifyContent={"space-between"} alignItems={["center", "flex-start"]}>

    //       <Flex>
    //         Newslettter
    //       </Flex>
    //       <Spacer />

    //       <Flex w={"full"} flexDirection={"column"} alignItems={["center", "flex-start"]}>
    // <Text fontWeight={"bold"} color={'#25274D'} fontSize={"md"}>TokenTradeX</Text>
    // <Text
    //   fontSize={"md"}
    //   letterSpacing={"widest"}
    //   textAlign={["center", "left"]}
    //   color={'#25274D'}
    // >
    //   We are the best crypto trading app in India, we provide our guidance
    //   at a very cheap price.
    // </Text>
    //       </Flex>

    //     </Flex>

    //   </Flex>
    // </Box>

    // <div style={{
    //   display: "flex",
    //   flexDirection: "row",
    //   justifyContent: "space-between",
    //   alignItems: "center",
    //   background: "#5AB9EA"
    // }}>
    //   <div className="newsletter">
    //     Newsetter
    //   </div>  
    //   <div className="socials">
    //     <p><strong>TokenTradeX</strong></p>
    //     <p><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit</em></p>
    //   </div>
    // </div>

    // <Stack bgGradient='linear(to-l, #25274D, #5AB9EA)'>

    //   <VStack w={"full"}>

    <Box bgGradient='linear(to-l, #25274D, #5AB9EA)'>

        <HStack justifyContent={"space-between"}>
          <Box>
            <Text variant={'h2'}>Newsletter</Text>
          </Box>
          <Box>
            <Text fontWeight={"bold"} color={'#25274D'} fontSize={"md"}>TokenTradeX</Text>
            <Text
              fontSize={"md"}
              letterSpacing={"widest"}
              textAlign={["center", "left"]}
              color={'#5AB9EA'}
            >
              We are the best crypto trading app in India, we provide our guidance
              at a very cheap price.
            </Text>
          </Box>
        </HStack>

        <Box w={"full"} flex justifyContent={"center"} fontWeight={"md"} color={'#25274D'} fontSize={"sm"}>
          &copy; DIXIT All rights reserved.
        </Box>

    </Box>


    //   </VStack>

    // </Stack>


  );
};

export default Footer;