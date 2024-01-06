import React from 'react';

import Image from 'next/image';

import CALENDAR_SVG from '@assets/svgs/Body.svg';
import { Button } from '@components/ui/button';

const SectionOne = (): JSX.Element => {
  return (
    <article className='flex w-full min-w-full items-start'>
      <div className='flex flex-1 grow items-center justify-between gap-12.5'>
        <Image src={CALENDAR_SVG} alt='Illustration' width={441} height={433} />
        <div className='flex flex-1 grow flex-col items-start gap-9'>
          <div className='flex shrink-0 flex-col items-center gap-4 lg:max-w-150'>
            <h3 className='text-4xl font-semibold leading-11 text-neutral-darkGrey'>How to design your site footer like we did</h3>
            <p className='text-ellipsis text-sm leading-5 text-neutral-grey'>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula
              leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi
              eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec
              consectetur faucibus ipsum id gravida.
            </p>
          </div>
          <Button className='rounded-sm py-6.5'>
            <span className='px-4 text-base leading-5'>Learn More</span>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default SectionOne;
