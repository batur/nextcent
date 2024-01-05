import React from 'react';

import Image from 'next/image';

import LOGO from '@assets/svgs/Logo.svg';

const SectionTwo: React.FC = () => {
  return (
    <footer className='bg-[#111827] text-white'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div>
            <Image src={LOGO} alt='Nexcent Logo' width={191} height={30} />
            <p className='mb-4 text-sm'>
              Copyright © 2020 Nexcent ltd.
              <br />
              All rights reserved
            </p>
          </div>
          <div>
            <h3 className='mb-4 text-sm font-semibold'>Company</h3>
            <ul className='space-y-3 text-sm'>
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
          <div>
            <h3 className='mb-4 text-sm font-semibold'>Support</h3>
            <ul className='space-y-3 text-sm'>
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
          <div>
            <h3 className='mb-4 text-sm font-semibold'>Stay up to date</h3>
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
