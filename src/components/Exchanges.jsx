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
        const { data } = await axios.get(`${server}/exchanges?per_page=96`);
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
    <Container maxW={'container.xxl'} bgColor={"#e5e7eb"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={'wrap'} spacing='0.1rem' borderRadius={'md'} justifyContent={"space-evenly"} py={5} px={10}>
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

          <HStack w={'full'} overflowX={'auto'} py={'8'} px={'6'}>
            {btns.map((item, index) => (
              <Button
                key={index}
                size={'xs'}
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

export default Exchanges;
