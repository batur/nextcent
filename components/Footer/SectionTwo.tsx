import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import LOGO_WHITE from '@assets/svgs/Logo_White.svg';
import { Button } from '@components/ui/button';

const DATA = {
  tag: {
    title: 'Copyright © 2020 Nexcent ltd.',
    description: 'All rights reserved'
  },
  infoOne: {
    title: 'Company',
    bullets: [
      {
        text: 'About us',
        link: '#'
      },
      {
        text: 'Blog',
        link: '#'
      },
      {
        text: 'Contact us',
        link: '#'
      },
      {
        text: 'Pricing',
        link: '#'
      },
      {
        text: 'Testimonials',
        link: '#'
      }
    ]
  },
  infoTwo: {
    title: 'Support',
    bullets: [
      {
        text: 'Help center',
        link: '#'
      },
      {
        text: 'Terms of service',
        link: '#'
      },
      {
        text: 'Legal',
        link: '#'
      },
      {
        text: 'Privacy policy',
        link: '#'
      },
      {
        text: 'Status',
        link: '#'
      }
    ]
  },
  infoThree: {
    title: 'Stay up to date'
  }
};

const SectionTwo: React.FC = () => {
  return (
    <footer className='w-full bg-brand-secondary text-white'>
      <div className='container mx-auto flex flex-col-reverse items-center justify-between gap-31.5 px-4 py-16 md:px-36.5 lg:flex-row'>
        <div className='flex grow flex-col items-start justify-start gap-10 pb-2'>
          <Image src={LOGO_WHITE} alt='Nexcent Logo' width={191} height={30} />
          <div className='flex flex-col gap-2'>
            <p className='text-sm'>{DATA.tag.title}</p>
            <p className='text-sm'>{DATA.tag.description}</p>
          </div>
          <div className='flex gap-3.5'>
            <Button variant='outline' className='h-8 w-8 rounded-full'></Button>
            <Button variant='outline' className='h-8 w-8 rounded-full'></Button>
            <Button variant='outline' className='h-8 w-8 rounded-full'></Button>
            <Button variant='outline' className='h-8 w-8 rounded-full'></Button>
          </div>
        </div>
        <div className='flex w-full flex-auto flex-row-reverse flex-wrap items-center justify-between gap-y-5 lg:flex-row lg:flex-nowrap lg:items-start lg:gap-7.5 lg:pl-6'>
          <div className='order-2 flex w-1/2 flex-col items-center lg:order-1'>
            <h5 className='mb-6 text-xl font-semibold leading-7'>{DATA.infoOne.title}</h5>
            <ul className='flex flex-col gap-3 text-sm'>
              {DATA.infoOne.bullets.map((bullet) => (
                <Link href={bullet.link} key={bullet.text}>
                  <li className='hover:text-gray-300'>{bullet.text}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className='order-3 flex w-1/2 flex-col items-center lg:order-2'>
            <h5 className='mb-6 text-xl font-semibold leading-7'>{DATA.infoTwo.title}</h5>
            <ul className='flex flex-col gap-3 text-sm'>
              {DATA.infoTwo.bullets.map((bullet) => (
                <Link href={bullet.link} key={bullet.text}>
                  <li className='hover:text-gray-300'>{bullet.text}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className='order-1 mb-12 w-full md:mb-0 lg:order-3 lg:w-63.5'>
            <h5 className='mb-6 text-center text-xl font-semibold leading-7 md:text-left'>{DATA.infoThree.title}</h5>
            <form className='flex'>
              <input
                className='w-full rounded-l-md border border-gray-600 bg-transparent px-4 py-2 text-sm placeholder:text-gray-400 focus:border-gray-300 focus:outline-none'
                placeholder='Your email address'
                type='email'
              />
              <button aria-label='Subscribe' className='rounded-r-md bg-gray-600 px-4 hover:bg-gray-500' type='submit'></button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default SectionTwo;
