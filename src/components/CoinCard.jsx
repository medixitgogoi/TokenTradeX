import React from "react";
import { Link } from "react-router-dom";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      w={"52"}
      shadow={"lg"}
      py={'3'}
      bgColor={'#C1C8E4'}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"3"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={'6'} h={'6'}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"xs"} noOfLines={1}>
        {symbol}
      </Heading>

      <Text fontSize={"sm"} noOfLines={1}>{name}</Text>
      <Text fontSize={"sm"} noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
    </VStack>
  </Link>
);

export default CoinCard;