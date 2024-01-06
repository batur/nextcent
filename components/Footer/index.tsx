import React from 'react';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const Footer: React.FC = () => {
  return (
    <section className='w-full'>
      <SectionOne />
      <SectionTwo />
    </section>
  );
};

export default Footer;
