import React from 'react';

import { Button } from '@components/ui/button';

const DATA = {
  title: 'Pellentesque suscipit fringilla libero eu.',
  buttonText: 'Get a Demo ->'
};

const SectionOne = (): JSX.Element => {
  return (
    <article className='container mx-auto flex flex-col items-center justify-center gap-8 bg-neutral-silver px-0 py-8'>
      <h4 className='text-center text-8 font-semibold leading-19 text-brand-secondary lg:w-221.5 lg:text-16'>{DATA.title}</h4>
      <Button className='rounded-sm lg:h-13'>
        <span className='md:px-2.5 md:leading-6'>{DATA.buttonText}</span>
      </Button>
    </article>
  );
};

export default SectionOne;
