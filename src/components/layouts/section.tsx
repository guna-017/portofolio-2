import { title } from 'process';
import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  id?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
}) => {
  return (
    <div id={id} className='custom-container py-10 md:py-20'>
      {/* heading */}

      <div className='text-center'>
        <h2 className='md:text-display-2xl text-display-md font-bold'>
          {title}
        </h2>
        <p className='md:text-md mt-2 text-sm text-neutral-400 md:mt-4'>
          {subtitle}
        </p>
      </div>

      {/* content */}
      <div className='mt-6 md:mt-12'>{children}</div>
    </div>
  );
};
