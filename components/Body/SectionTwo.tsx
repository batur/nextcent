import React from 'react';

import Image from 'next/image';

import IMAGE_0 from '@assets/images/Card_Image_0.png';
import IMAGE_1 from '@assets/images/Card_Image_1.png';
import IMAGE_2 from '@assets/images/Card_Image_2.png';

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
    <section className='flex w-full grow flex-col items-center justify-center gap-4'>
      <div className='flex max-w-[1100px] flex-col items-center justify-center gap-2 text-center'>
        <p className='text-4xl leading-[44px]'>Caring is the new marketing</p>
        <p className='lg:max-w[300px]'>
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&#39;s joining the
          community, read about how our community are increasing their membership income and lot&#39;s more.
        </p>
      </div>
      <div className='flex items-center justify-between gap-6 py-0'>
        {DATA.map((data) => (
          <div key={data.title} className='flex flex-1 grow flex-col items-center'>
            <Image src={data.image} alt='Image' width={368} height={286} className='aspect-auto' />
            {/* <            <div className='bg-neutralsilver shadow-shadow-8px relative mt-[-96px] inline-flex flex-[0_0_auto] flex-col items-center gap-[16px] rounded-[8px] p-[16px]'>
              <p className='font-heading-headline-4 text-neutralgrey relative text-center'>{data.title}</p>
              <div className='relative flex w-full flex-[0_0_auto] items-center justify-center gap-[8px] self-stretch p-[8px]'>
                <div className='font-heading-headline-4 text-brandprimary relative w-fit whitespace-nowrap'>Readmore</div>
              </div>
            </div>> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
