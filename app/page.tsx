import { type NextPage } from 'next';

import Body from '@components/Body';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Hero from '@components/Hero';

// TODO: Input component
// TODO: Icons

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
