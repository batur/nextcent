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
    <nav className='container sticky mx-auto mt-1 flex justify-center px-10 py-4.5'>
      <div className='flex w-full items-center justify-between px-8'>
        <div className='flex grow justify-start pl-3'>
          <Image src={DATA.logo.path} alt={DATA.logo.alt} width={155} height={24} />
        </div>
        <div className='hidden gap-12.5 pb-0.5 pl-10 lg:flex'>
          {DATA.navLinks.map((link) => (
            <Link key={link.label} className='text-base leading-6 text-text-main hover:text-gray-900' href={link.path}>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        <div className='flex grow justify-end gap-3.5 pr-7'>
          {DATA.authLinks.map((link) => (
            <Link href={link.path} key={link.label}>
              <Button className='px-5' key={link.label} variant={link.label === 'Sign up' ? 'default' : 'ghost'}>
                <span>{link.label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
