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
    <nav className='bg-transparent px-4 py-5'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <Image src={DATA.logo.path} alt={DATA.logo.alt} width={155} height={24} />
        </div>
        <div className='hidden space-x-8 md:flex'>
          {DATA.navLinks.map((link) => (
            <Link key={link.label} className='text-gray-600 hover:text-gray-900' href={link.path}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className='flex items-center space-x-4'>
          {DATA.authLinks.map((link) => (
            <Link href={link.path} key={link.label}>
              <Button key={link.label} variant={link.label === 'Sign up' ? 'default' : 'ghost'}>
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
