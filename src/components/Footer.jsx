import React from "react";
import {  VStack, Text, HStack } from "@chakra-ui/react";
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (

    <VStack bgGradient='linear(to-l, #25274D, #5AB9EA)' py={10}>
      <Text fontWeight={"bold"} color={'#25274D'} fontSize={40} lineHeight={1}>TokenTradeX</Text>
      <Text
        fontSize={"md"}
        letterSpacing={"widest"}
        textAlign={["center", "left"]}
        color={'#5AB9EA'}
      >
        We are the best crypto trading app in India, we provide our guidance
        at a very cheap price.
      </Text>
      <HStack py={10}>
        <Text fontSize={23}><FaFacebookF /></Text>
        <Text fontSize={23}><AiFillInstagram /></Text>
        <Text fontSize={23}><FaTwitter /></Text>
      </HStack>
    </VStack>

  );
};

export default Footer;