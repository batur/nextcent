import { type NextPage } from 'next';

import Body from '@components/Body';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Hero from '@components/Hero';

// TODO: Fix body section style
// TODO: Pixel Perfect
// TODO: Responsive
// TODO: JSON data
// TODO: Convert all arbitarty values to tailwindcss variables
// TODO: Check theme colors
// TODO: container mx-144px

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
