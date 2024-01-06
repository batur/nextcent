import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import HERO_SVG from '@assets/svgs/Hero.svg';
import { Button } from '@components/ui/button';

const HEADLINE = 'Lessons and insights <br/> <span>from 8 years</span>';

const Home: React.FC = () => {
  return (
    <div className='container mx-auto flex w-full grow flex-row items-center justify-around gap-26 py-24'>
      <div className='flex flex-col items-start gap-8'>
        <div className='flex w-full flex-col items-start gap-4 pt-1'>
          <h1
            className='hero__title text-nowrap text-16 font-semibold leading-19 text-neutral-darkGrey'
            dangerouslySetInnerHTML={{ __html: HEADLINE }}
          />
          <p className='text-4 leading-6 text-neutral-grey'>Where to grow your business as a photographer: site or social media?</p>
        </div>
        <Link href='#'>
          <Button className='rounded-sm py-6.5'>
            <span className='px-4 text-4 font-medium leading-6'>Register</span>
          </Button>
        </Link>
      </div>
      <Image src={HERO_SVG} alt='Illustration' width={391} height={407} className='ml-1 mt-1' />
    </div>
  );
};

export default Home;
