import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import HERO_SVG from '@assets/svgs/Hero.svg';
import { Button } from '@components/ui/button';
const DATA = {
  title: 'Lessons and insights <br/> <span>from 8 years</span>',
  description: 'Where to grow your business as a photographer: site or social media?',
  buttonText: 'Register',
  image: HERO_SVG
};

const Home: React.FC = () => {
  return (
    <div className='container mx-auto flex w-full grow flex-col-reverse items-center justify-around gap-26 bg-neutral-silver px-4 py-6 md:py-12 lg:flex-row lg:py-24'>
      <div className='flex flex-col items-start gap-8'>
        <div className='flex w-full flex-col items-start gap-4 pt-1'>
          <h1
            className='hero__title text-nowrap text-8 font-semibold text-neutral-darkGrey md:text-14 lg:text-16 lg:leading-19'
            dangerouslySetInnerHTML={{ __html: DATA.title }}
          />
          <p className='text-3.5 leading-6 text-neutral-grey lg:text-4'>{DATA.description}</p>
        </div>
        <Link href='#'>
          <Button className='rounded-sm md:py-6.5'>
            <span className='text-3 font-medium leading-6 md:px-4 lg:text-4'>{DATA.buttonText}</span>
          </Button>
        </Link>
      </div>
      <Image src={DATA.image} alt='Illustration' width={391} height={407} className='h-auto w-full object-cover lg:ml-1 lg:mt-1' />
    </div>
  );
};

export default Home;
