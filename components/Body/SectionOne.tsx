import React from 'react';

import Image from 'next/image';

import CALENDAR_SVG from '@assets/svgs/Body.svg';
import { Button } from '@components/ui/button';

const SectionOne = (): JSX.Element => {
  return (
    <div className='relative inline-flex items-start'>
      <div className='relative flex w-[1440px] items-center justify-between px-[144px] py-0'>
        <div className='relative h-[433.4px] w-[441.53px]'>
          <div className='relative h-[434px] w-[442px]'>
            <Image src={CALENDAR_SVG} alt='Illustration' width={442} height={434} />
          </div>
        </div>
        <div className='relative flex w-[661px] flex-col items-start gap-[32px]'>
          <div className='relative flex w-[601px] flex-[0_0_auto] flex-col items-start gap-[16px]'>
            <p className='font-heading-headline-2 text-neutraldgrey relative mt-[-1.00px] self-stretch text-[length:var(--heading-headline-2-font-size)] font-[number:var(--heading-headline-2-font-weight)] leading-[var(--heading-headline-2-line-height)] tracking-[var(--heading-headline-2-letter-spacing)] [font-style:var(--heading-headline-2-font-style)]'>
              How to design your site footer like we did
            </p>
            <p className='font-body-regular-body-3 text-neutralgrey relative self-stretch text-[length:var(--body-regular-body-3-font-size)] font-[number:var(--body-regular-body-3-font-weight)] leading-[var(--body-regular-body-3-line-height)] tracking-[var(--body-regular-body-3-letter-spacing)] [font-style:var(--body-regular-body-3-font-style)]'>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula
              leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi
              eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec
              consectetur faucibus ipsum id gravida.
            </p>
          </div>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
