import React from 'react';

import Image from 'next/image';

import LOGO from '@assets/svgs/Logo.svg';
import { Button } from '@components/ui/button';

const SectionTwo: React.FC = () => {
  return (
    <footer className='container mx-auto w-full px-36.5 py-16'>
      <div className='flex flex-row items-center justify-between gap-31.5'>
        <div className='flex grow flex-col items-start justify-start gap-10 pb-2'>
          <Image src={LOGO} alt='Nexcent Logo' width={191} height={30} />
          <div className='flex flex-col gap-2'>
            <p className='text-sm'>Copyright © 2020 Nexcent ltd.</p>
            <p className='text-sm'>All rights reserved</p>
          </div>
          <div className='flex gap-3.5'>
            <Button variant='outline' className='h-8 w-8 rounded-full'></Button>
            <Button variant='outline' className='h-8 w-8 rounded-full'></Button>
            <Button variant='outline' className='h-8 w-8 rounded-full'></Button>
            <Button variant='outline' className='h-8 w-8 rounded-full'></Button>
          </div>
        </div>
        <div className='flex flex-auto flex-row items-start justify-between gap-7.5 pl-6'>
          <div>
            <h5 className='mb-6 text-xl font-semibold leading-7'>Company</h5>
            <ul className='flex flex-col gap-3 text-sm'>
              <li>
                <a className='hover:text-gray-300' href='#'>
                  About us
                </a>
              </li>
              <li>
                <a className='hover:text-gray-300' href='#'>
                  Blog
                </a>
              </li>
              <li>
                <a className='hover:text-gray-300' href='#'>
                  Contact us
                </a>
              </li>
              <li>
                <a className='hover:text-gray-300' href='#'>
                  Pricing
                </a>
              </li>
              <li>
                <a className='hover:text-gray-300' href='#'>
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className=''>
            <h5 className='mb-6 text-xl font-semibold leading-7'>Support</h5>
            <ul className='flex flex-col gap-3 text-sm'>
              <li>
                <a className='hover:text-gray-300' href='#'>
                  Help center
                </a>
              </li>
              <li>
                <a className='hover:text-gray-300' href='#'>
                  Terms of service
                </a>
              </li>
              <li>
                <a className='hover:text-gray-300' href='#'>
                  Legal
                </a>
              </li>
              <li>
                <a className='hover:text-gray-300' href='#'>
                  Privacy policy
                </a>
              </li>
              <li>
                <a className='hover:text-gray-300' href='#'>
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div className='w-63.5'>
            <h5 className='mb-6 text-xl font-semibold leading-7'>Stay up to date</h5>
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
