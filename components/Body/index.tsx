import React from 'react';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const Body: React.FC = () => {
  return (
    <section className='container mx-auto flex flex-col items-center justify-center gap-12'>
      <SectionOne />
      <SectionTwo />
    </section>
  );
};

export default Body;
