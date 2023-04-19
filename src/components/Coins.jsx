import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import { Button, Container, HStack, Radio, RadioGroup, Text } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr');

  const currencySymbol =
    currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?per_page=96&vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        // console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchCoins();

  }, [currency, page]);

  if (error) return <ErrorComponent message={'Error While Fetching Coins'} />; //to be reviewed

  return (
    <Container maxW={'container.xxl'} bgColor={"#e5e7eb"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* To be reviewed once again*/}

          <RadioGroup value={currency} onChange={setCurrency} pt={7} pl={'10'}>
            <HStack spacing={'4'} justifyContent={{ base: "center", lg: "flex-start" }}>
              <Radio size='sm' value={'inr'} borderColor={"#130130"}><Text fontSize={"sm"} color={'#130130'}>INR</Text></Radio>
              <Radio size='sm' value={'usd'} borderColor={"#130130"}><Text fontSize={"sm"} color={'#130130'}>USD</Text></Radio>
              <Radio size='sm' value={'eur'} borderColor={"#130130"}><Text fontSize={"sm"} color={'#130130'}>EUR</Text></Radio>
            </HStack>
          </RadioGroup>

          <HStack spacing='0.1rem' wrap={'wrap'} justifyContent={'space-evenly'} py={5} px={10}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          {/* To be reviewed */}
          <HStack w={'full'} overflowX={'auto'} p={'8'}>
            {btns.map((item, index) => (
              <Button
                key={index}
                size={"xs"}
                color={'#130130'}
                bgColor={"#fff"}
                onClick={() => changePage(index + 1)}
                css={{
                  "&:hover": {
                    cursor: "pointer",
                    border: "2px solid #fff"
                  },
                }}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
