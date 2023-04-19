import React from "react";
import { VStack, Text, HStack } from "@chakra-ui/react";
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (

    <VStack bgColor={"#fff"} py={4}>
      <Text fontWeight={"bold"} color={'#25274D'} fontSize={30} lineHeight={1}>TokenTradeX</Text>
      <Text
        fontSize={"xs"}
        letterSpacing={"widest"}
        textAlign={["center", "left"]}
        color={'#130130'}
      >
        We are the best crypto trading app in India, we provide our guidance
        at a very cheap price.
      </Text>
      <HStack py={6}>
        <Text css={{
          "&:hover": {
            cursor: "pointer",
            color: "#5AB9EA"
          },
        }} fontSize={15}><FaFacebookF /></Text>
        <Text css={{
          "&:hover": {
            cursor: "pointer",
            color: "#5AB9EA"
          },
        }} fontSize={15}><AiFillInstagram /></Text>
        <Text css={{
          "&:hover": {
            cursor: "pointer",
            color: "#5AB9EA"
          },
        }} fontSize={15}><FaTwitter /></Text>
      </HStack>
    </VStack>

  );
};

export default Footer;