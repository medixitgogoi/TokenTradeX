import { VStack, Heading, Text, Image, Box } from '@chakra-ui/react';
import React from 'react';

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <>
      <a href={url} target={'blank'}>
        <VStack
          w={'52'}
          shadow={'lg'}
          p={'8'}
          borderRadius={'lg'}
          transition={'all 0.25s'}
          m={'4'}
          bgColor={'#C1C8E4'}
          css={{
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Image w={'10'} h={'10'} objectFit={'contain'} src={img} alt={name} />
          <Heading size={'md'} noOfLines={1}>
            {rank}
          </Heading>
          <Text noOfLines={1}>{name}</Text>
        </VStack>
      </a>
    </>
  );
};

export default ExchangeCard;
