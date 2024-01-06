import React from 'react';

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const Body: React.FC = () => {
  return (
    <section className='container mx-auto mb-48 flex flex-col items-center justify-center gap-12 px-4 md:mb-82.5'>
      <SectionOne />
      <SectionTwo />
    </section>
  );
};

export default Body;
