import React from 'react';

import { Button } from '@components/ui/button';

const SectionOne = (): JSX.Element => {
  return (
    <article className='container mx-auto flex flex-col items-center justify-center gap-8 bg-neutral-silver px-0 py-8'>
      <h4 className='w-221.5 text-center text-16 font-semibold leading-19 text-brand-secondary'>
        Pellentesque suscipit fringilla libero eu.
      </h4>
      <Button className='h-13 rounded-sm' size='lg'>
        <span className='px-2.5 leading-6'>{'Get a Demo ->'}</span>
      </Button>
    </article>
  );
};

export default SectionOne;
