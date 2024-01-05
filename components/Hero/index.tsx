import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import HERO_SVG from '@assets/svgs/Hero.svg';
import { Button } from '@components/ui/button';

const Home: React.FC = () => {
  return (
    <div className='relative inline-flex flex-col items-start gap-[40px]'>
      <div className='bg-neutralsilver relative flex w-full flex-[0_0_auto] items-center gap-[104px] self-stretch px-[144px] py-[96px]'>
        <div className='relative flex flex-1 grow flex-col items-start gap-[32px]'>
          <div className='relative flex w-full flex-[0_0_auto] flex-col items-start gap-[16px] self-stretch'>
            <p className='font-heading-headline-1 relative mt-[-1.00px] self-stretch text-[length:var(--heading-headline-1-font-size)] font-[number:var(--heading-headline-1-font-weight)] leading-[var(--heading-headline-1-line-height)] tracking-[var(--heading-headline-1-letter-spacing)] text-transparent [font-style:var(--heading-headline-1-font-style)]'>
              <span className='font-heading-headline-1 text-[length:var(--heading-headline-1-font-size)] font-[number:var(--heading-headline-1-font-weight)] leading-[var(--heading-headline-1-line-height)] tracking-[var(--heading-headline-1-letter-spacing)] text-[#4d4d4d] [font-style:var(--heading-headline-1-font-style)]'>
                Lessons and insights
              </span>
              <span className='font-heading-headline-1 text-[length:var(--heading-headline-1-font-size)] font-[number:var(--heading-headline-1-font-weight)] leading-[var(--heading-headline-1-line-height)] tracking-[var(--heading-headline-1-letter-spacing)] text-[#4caf4f] [font-style:var(--heading-headline-1-font-style)]'>
                from 8 years
              </span>
            </p>
            <p className='font-body-regular-body-2 text-neutralgrey relative self-stretch text-[length:var(--body-regular-body-2-font-size)] font-[number:var(--body-regular-body-2-font-weight)] leading-[var(--body-regular-body-2-line-height)] tracking-[var(--body-regular-body-2-letter-spacing)] [font-style:var(--body-regular-body-2-font-style)]'>
              Where to grow your business as a photographer: site or social media?
            </p>
          </div>
          <Link href='#'>
            <Button>Register</Button>
          </Link>
        </div>
        <Image src={HERO_SVG} alt='Illustration' width={391} height={407} />
      </div>
    </div>
  );
};

export default Home;
