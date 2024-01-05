import { type NextPage } from 'next';

import Body from '@components/Body';
import Header from '@components/Header';
import Hero from '@components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Body />
    </>
  );
};

export default Home;
