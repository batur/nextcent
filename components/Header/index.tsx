import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import LOGO from '@assets/svgs/Logo.svg';

const DATA = {
  logo: {
    path: LOGO,
    alt: 'Nexcent'
  },
  navLinks: [
    {
      label: 'Home',
      path: '#'
    },
    {
      label: 'Service',
      path: '#'
    },
    {
      label: 'Feature',
      path: '#'
    },
    {
      label: 'Product',
      path: '#'
    },
    {
      label: 'Testimonial',
      path: '#'
    },
    {
      label: 'FAQ',
      path: '#'
    }
  ],
  authLinks: [
    {
      label: 'Login',
      path: '#'
    },
    {
      label: 'Sign up',
      path: '#'
    }
  ]
};

const Header: React.FC = () => {
  return (
    <nav className='container sticky  mx-auto mt-1 flex justify-center px-10 py-[18px]'>
      <div className='flex w-full items-center justify-between px-8'>
        <div className='flex grow justify-start pl-3'>
          <Image src={DATA.logo.path} alt={DATA.logo.alt} width={155} height={24} />
        </div>
        <div className='hidden gap-[50px] pb-0.5 pl-[40px] lg:flex'>
          {DATA.navLinks.map((link) => (
            <Link key={link.label} className='text-base leading-6 text-gray-600 hover:text-gray-900' href={link.path}>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        <div className='flex grow justify-end gap-[14px] pr-[28px]'>
          {DATA.authLinks.map((link) => (
            <Link href={link.path} key={link.label}>
              <Button className='px-[20px]' key={link.label} variant={link.label === 'Sign up' ? 'default' : 'ghost'}>
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
