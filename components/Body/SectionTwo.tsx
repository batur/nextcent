import React from 'react';

import Image from 'next/image';

import IMAGE_0 from '@assets/images/Card_Image_0.png';
import IMAGE_1 from '@assets/images/Card_Image_1.png';
import IMAGE_2 from '@assets/images/Card_Image_2.png';
import { Button } from '@components/ui/button';

const DATA = [
  {
    image: IMAGE_0,
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    description:
      'The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&#39;s joining the community, read about how our community are increasing their membership income and lot&#39;s more.'
  },
  {
    image: IMAGE_1,
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    description:
      'The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&#39;s joining the community, read about how our community are increasing their membership income and lot&#39;s more.'
  },
  {
    image: IMAGE_2,
    title: 'Revamping the Membership Model with Triathlon Australia',
    description:
      'The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&#39;s joining the community, read about how our community are increasing their membership income and lot&#39;s more.'
  }
];

const SectionTwo = (): JSX.Element => {
  return (
    <section className='flex w-full grow flex-col items-center justify-start gap-4'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <p className='text-4xl font-semibold leading-[44px]'>Caring is the new marketing</p>
        <p className='text-clip lg:w-[628px]'>
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&#39;s joining the
          community, read about how our community are increasing their membership income and lot&#39;s more.
        </p>
      </div>
      <div className='flex w-full grow items-start justify-start gap-6 py-0'>
        {DATA.map((data) => (
          <div key={data.title} className='relative flex flex-1 grow flex-row'>
            <Image src={data.image} alt='Image' width={368} height={286} className='aspect-auto' />
            <div className='absolute -bottom-20 left-6 flex aspect-auto flex-col items-center gap-4 rounded-md bg-white p-4 shadow-md'>
              <h3 className='text-center text-xl font-semibold leading-7 lg:max-w-[285px]'>{data.title}</h3>
              <Button variant='ghost' className='h-[44px] w-full'>
                <span className='text-xl font-semibold leading-7 text-brand-primary'>{'Readmore ->'}</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
