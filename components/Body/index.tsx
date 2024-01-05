import React from 'react';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const Body: React.FC = () => {
  return (
    <section className='relative inline-flex flex-col items-start justify-center gap-[48px]'>
      <SectionOne />
      <SectionTwo />
    </section>
  );
};

export default Body;
