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
    <div className='relative inline-flex flex-col items-center gap-[16px]'>
      <div className='relative flex w-[1110px] flex-[0_0_auto] flex-col items-center gap-[8px]'>
        <p className='font-heading-headline-2 text-neutraldgrey relative mt-[-1.00px] self-stretch text-center text-[length:var(--heading-headline-2-font-size)] font-[number:var(--heading-headline-2-font-weight)] leading-[var(--heading-headline-2-line-height)] tracking-[var(--heading-headline-2-letter-spacing)] [font-style:var(--heading-headline-2-font-style)]'>
          Caring is the new marketing
        </p>
        <p className='font-body-regular-body-2 text-neutralgrey relative w-[628px] text-center text-[length:var(--body-regular-body-2-font-size)] font-[number:var(--body-regular-body-2-font-weight)] leading-[var(--body-regular-body-2-line-height)] tracking-[var(--body-regular-body-2-letter-spacing)] [font-style:var(--body-regular-body-2-font-style)]'>
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&#39;s joining the
          community, read about how our community are increasing their membership income and lot&#39;s more.
        </p>
      </div>
      <div className='relative flex w-[1440px] flex-[0_0_auto] items-center justify-between px-[144px] py-0'>
        {DATA.map((data) => (
          <div key={data.title} className='relative inline-flex flex-col items-center'>
            <Image src={data.image} alt='Image' width={368} height={286} />
            <div className='bg-neutralsilver shadow-shadow-8px relative mt-[-96px] inline-flex flex-[0_0_auto] flex-col items-center gap-[16px] rounded-[8px] p-[16px]'>
              <p className='font-heading-headline-4 text-neutralgrey relative mt-[-1.00px] w-[285px] text-center text-[length:var(--heading-headline-4-font-size)] font-[number:var(--heading-headline-4-font-weight)] leading-[var(--heading-headline-4-line-height)] tracking-[var(--heading-headline-4-letter-spacing)] [font-style:var(--heading-headline-4-font-style)]'>
                {data.title}
              </p>
              <div className='relative flex w-full flex-[0_0_auto] items-center justify-center gap-[8px] self-stretch p-[8px]'>
                <div className='font-heading-headline-4 text-brandprimary relative mt-[-1.00px] w-fit whitespace-nowrap text-[length:var(--heading-headline-4-font-size)] font-[number:var(--heading-headline-4-font-weight)] leading-[var(--heading-headline-4-line-height)] tracking-[var(--heading-headline-4-letter-spacing)] [font-style:var(--heading-headline-4-font-style)]'>
                  Readmore
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
