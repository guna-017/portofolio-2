import { runningText } from '@/app/constants/runningText';
import { Marquee } from '@/components/ui/marquee';

import Image from 'next/image';
import React from 'react';

const SkillMarquee = () => {
  return (
    <div className='bg-primary-300 relative mt-15 flex h-15.5 items-center md:h-27'>
      <div className='w-full overflow-hidden mix-blend-luminosity'>
        <Marquee className='py-4'>
          {runningText.map((data) => (
            <Image
              src={data.src}
              alt={data.alt}
              key={data.alt}
              className='h-full w-auto object-contain select-none'
              style={{ height: 'clamp(2.13rem, 3.97vw, 3rem)' }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const RunningText = () => {
  return (
    <div className='mt-6.5 md:mt-70'>
      <SkillMarquee />
    </div>
  );
};

export default RunningText;
