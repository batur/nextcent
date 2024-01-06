import React from 'react';

import Image, { type StaticImageData } from 'next/image';

import { Button } from '@components/ui/button';

interface CardProps {
  data: {
    image: StaticImageData;
    title: string;
    description: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div key={data.title} className='relative flex flex-1 grow flex-row'>
      <Image src={data.image} alt='Image' width={368} height={286} className='aspect-auto' />
      <div className='absolute -bottom-20 mx-6 flex aspect-auto flex-col items-center gap-4 rounded-md bg-neutral-silver  p-4 shadow-md'>
        <h3 className='text-center text-4 font-semibold leading-7 text-neutral-darkGrey lg:max-w-71.5 lg:text-xl'>{data.title}</h3>
        <Button variant='ghost' className='h-11 w-full'>
          <span className='text-4 font-semibold leading-7 text-brand-primary lg:text-xl'>{'Readmore ->'}</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
