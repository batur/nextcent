import React from 'react';

import IMAGE_0 from '@assets/images/Card_Image_0.png';
import IMAGE_1 from '@assets/images/Card_Image_1.png';
import IMAGE_2 from '@assets/images/Card_Image_2.png';

import Card from './Card';

const DATA = {
  title: 'Caring is the new marketing',
  description:
    'The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who&#39;s joining the community, read about how our community are increasing their membership income and lot&#39;s more.',
  card: [
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
  ]
};
const SectionTwo = (): JSX.Element => {
  return (
    <section className='flex w-full grow flex-col items-center justify-start gap-4'>
      <div className='flex flex-col items-center justify-center gap-2 md:text-center'>
        <h3 className='text-4xl font-semibold leading-11 text-neutral-darkGrey'>{DATA.title}</h3>
        <p className='text-clip text-neutral-grey lg:w-157'>{DATA.description}</p>
      </div>
      <div className='flex w-full grow flex-col items-center justify-start gap-34 py-0 md:gap-32 lg:flex-row lg:items-start lg:gap-6'>
        {DATA.card.map((data) => (
          <Card key={data.title} data={data} />
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;
