import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import ExchangeCard from './ExchangeCard';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import { Container, HStack, Button } from '@chakra-ui/react';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges?per_page=98`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <ErrorComponent message={'Error While Fetching Data'} />;
// bgColor={"#25274D"}
  return (
    <Container maxW={'container.xxl'} bgGradient='linear(to-l, #25274D, #5AB9EA)'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'}  borderRadius={'lg'} justifyContent={"space-evenly"} py={10}>
            {exchanges.map(i => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>

          <HStack w={'full'} overflowX={'auto'} p={'8'}>
            {btns.map((item, index) => (
              <Button
                key={index}
                color={'#5AB9EA'}
                bgColor={'#25274D'}
                onClick={() => changePage(index + 1)}
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

export default Exchanges;
