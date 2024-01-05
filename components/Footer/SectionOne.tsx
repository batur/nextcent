import React from 'react';

import { Button } from '@components/ui/button';

const SectionOne = (): JSX.Element => {
  return (
    <div className='bg-neutralsilver relative flex w-[1440px] flex-col items-center gap-[32px] px-0 py-[32px]'>
      <p className='font-heading-headline-1 text-neutralblack relative mt-[-1.00px] w-[887px] text-center text-[length:var(--heading-headline-1-font-size)] font-[number:var(--heading-headline-1-font-weight)] leading-[var(--heading-headline-1-line-height)] tracking-[var(--heading-headline-1-letter-spacing)] [font-style:var(--heading-headline-1-font-style)]'>
        Pellentesque suscipit fringilla libero eu.
      </p>
      <Button>Get a Demo</Button>
    </div>
  );
};

export default SectionOne;
