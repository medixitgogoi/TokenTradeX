import { VStack, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <>
      <a href={url} target={'blank'}>
        <VStack
          w={'52'}
          shadow={'xl'}
          borderRadius={'lg'}
          transition={'all 0.25s'}
          py={'5'}
          m={"3"}
          bgColor={'#C1C8E4'}
          css={{
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Image w={'6'} h={'6'} objectFit={'contain'} src={img} alt={name} />
          <Heading size={'xs'} noOfLines={1}>
            {rank}
          </Heading>
          <Text fontSize={"sm"} noOfLines={1}>{name}</Text>
        </VStack>
      </a>
    </>
  );
};

export default ExchangeCard;
