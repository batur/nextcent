import React from 'react';

import { Button } from '@components/ui/button';

const SectionOne = (): JSX.Element => {
  return (
    <article className='container mx-auto flex flex-col items-center justify-center gap-8 px-0 py-8'>
      <h4 className='w-[887px] text-center text-[64px] font-semibold leading-[76px]'>Pellentesque suscipit fringilla libero eu.</h4>
      <Button className='h-[52px] rounded-sm' size='lg'>
        <span className='px-[10px] leading-6'>{'Get a Demo ->'}</span>
      </Button>
    </article>
  );
};

export default SectionOne;
