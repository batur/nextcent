import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import HERO_SVG from '@assets/svgs/Hero.svg';
import { Button } from '@components/ui/button';

const HEADLINE = 'Lessons and insights <br/> from 8 years';
const Home: React.FC = () => {
  return (
    <div className='flex w-full grow flex-row items-center justify-center gap-[104px] py-24'>
      <div className='flex flex-col items-start gap-8'>
        <div className='flex w-full flex-col items-start gap-4 pt-1'>
          <h1 className='text-[64px] font-semibold leading-[76px]' dangerouslySetInnerHTML={{ __html: HEADLINE }} />
          <p className=''>Where to grow your business as a photographer: site or social media?</p>
        </div>
        <Link href='#'>
          <Button className='rounded-sm px-9 py-[26px]'>
            <span className='font-medium leading-6'>Register</span>
          </Button>
        </Link>
      </div>
      <Image src={HERO_SVG} alt='Illustration' width={391} height={407} className='ml-1 mt-1' />
    </div>
  );
};

export default Home;
