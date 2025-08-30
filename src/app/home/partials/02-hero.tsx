import { Button } from '@/components/ui/button';
import React from 'react';
import { Charm } from 'next/font/google';
import Image from 'next/image';

const charm = Charm({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal'],
  variable: '--font-charm',
});

const Hero = () => {
  return (
    <section>
      <div
        className={`${charm.variable} custom-container w-full md:relative md:flex md:flex-row-reverse`}
      >
        {/* image */}
        <div className='flex items-center justify-center md:absolute md:flex-[0.5]'>
          <div className='relative h-[671px] w-[341px]'>
            <Image
              src='/images/name-tag.png'
              width={341}
              height={671}
              alt='tag'
            ></Image>
            <Image
              src='/images/name-tag-bg.png'
              width={325}
              height={110}
              alt='tag-bg'
              className='absolute top-1/2'
            ></Image>
            <Image
              src='/images/gentleman-1.png'
              width={341}
              height={410}
              alt='photo'
              className='absolute bottom-0'
            ></Image>
          </div>
        </div>

        {/* left */}
        <div className='pt-8 md:flex-[9.5] md:pt-56'>
          <div>
            <div className='flex max-w-[684px] flex-col gap-15'>
              <p className='text-neutral-25 text-xl'>Hi. I’m Edwin Anderson</p>
              <h1 className='text-6xl font-bold md:text-8xl'>
                FRONT <span className='font-charm'>END</span> DEVELOPER
              </h1>
              <p className='text-lg text-neutral-400'>
                Passionate about frontend development, I focus on crafting
                digital products that are visually polished,
                performance-optimized, and deliver a consistent experience
                across all platforms.
              </p>
            </div>

            <div className='pt-15'>
              <Button
                variant='default'
                className='flex w-full gap-2 md:max-w-[287px]'
              >
                <Image
                  src='/icons/white-mail.png'
                  width={24}
                  height={24}
                  alt='mail-logo'
                ></Image>
                <p className='text-md flex items-center font-semibold'>
                  Hire Me
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* bg */}
      <div className='absolute top-0 right-0 z-[-5] w-full'>
        <Image
          src='/images/hero-section.png'
          alt='hero-section'
          width={1440}
          height={756}
          className='object-cover'
        ></Image>
      </div>
    </section>
  );
};

export default Hero;
