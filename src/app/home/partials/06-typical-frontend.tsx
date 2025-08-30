import { Check, X } from 'lucide-react';

import Image from 'next/image';
import React from 'react';

const Typical = () => {
  return (
    <div className='relative'>
      <div className='custom-container py-10 md:mt-10'>
        <div className='flex flex-col justify-center gap-2 text-center'>
          <h1 className='text-3xl font-bold md:text-5xl'>
            Not Your Typical Frontend Developer
          </h1>
          <p className='md:text-md text-sm text-neutral-400'>
            I care about how it looks, how it works, and how it feels — all at
            once
          </p>
        </div>
        <div className='md:pt-6xl flex border border-neutral-900 bg-black p-3'>
          {/* Skills Column */}
          <div className='flex-1 md:w-1/3'>
            <div className='flex h-18 items-center border-b border-neutral-900 bg-black px-3 py-1'>
              <p className='md:text-display-xs text-neutral-25 text-base leading-8 font-semibold tracking-tight'>
                Skill
              </p>
            </div>
            {[
              'React Expert',
              'Pixel Perfect',
              'TypeScript Proficiency',
              'Clean, Maintainable Code',
              'Performance Optimization',
              'Responsive Website',
              'UI Design Proficiency (Figma)',
            ].map((skill, index) => (
              <div
                key={skill}
                className='flex h-18 items-center border-b border-neutral-900 px-3 py-1 last:border-b-0'
              >
                <p className='text-neutral-25 text-sm leading-7 md:text-lg'>
                  {skill}
                </p>
              </div>
            ))}
          </div>
          {/* End Skills Column */}

          {/* With Me Column */}
          <div className='w-16 bg-neutral-950 md:w-1/3'>
            <div className='bg-primary-400 flex h-18 items-center justify-center border-b border-white/40 px-3 py-2'>
              <span className='md:text-display-xs text-neutral-25 text-sm leading-7 font-semibold'>
                With Me
              </span>
            </div>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className='bg-primary-400 flex h-18 items-center justify-center border-b border-white/40 px-2 py-2 last:border-b-0 md:justify-start md:pl-6'
                >
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white'>
                    <Check className='text-primary-400 h-3.5 w-3.5' />
                  </div>
                </div>
              ))}
          </div>
          {/* End With Me Column */}

          {/* Other Column */}
          <div className='w-16 bg-neutral-900 md:w-1/3'>
            <div className='flex h-18 items-center justify-center border-b border-neutral-900 bg-black px-3 py-2'>
              <span className='text-neutral-25 md:text-display-xs text-sm leading-7 font-semibold'>
                Other
              </span>
            </div>
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className='flex h-18 items-center justify-center border-b border-neutral-900 bg-black px-2 py-2 last:border-b-0 md:justify-start md:pl-6'
                >
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700'>
                    <X className='h-3.5 w-3.5 text-neutral-950' />
                  </div>
                </div>
              ))}
          </div>
          {/* End Other Column */}
        </div>
      </div>

      {/* bg */}
      <div className='absolute bottom-0 z-[-1] scale-y-[-1] overflow-hidden'>
        <Image
          src='/images/hero-section.png'
          width={1440}
          height={756}
          alt='bg'
        ></Image>
      </div>
    </div>
  );
};

export default Typical;
