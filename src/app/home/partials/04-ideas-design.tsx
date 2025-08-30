import Image from 'next/image';
import React from 'react';
import { CodeXml, Globe, Smartphone, Component } from 'lucide-react';
import Link from 'next/link';
import { div } from 'motion/react-client';

const Idea = () => {
  return (
    <div className='custom-container py-10 md:mt-10'>
      {/* About Me */}
      <div className=''>
        <div className='flex flex-col gap-6 md:flex md:flex-row md:justify-between'>
          <h1 className='md:text-display-xl text-4xl font-bold md:max-w-[756px]'>
            I turn ideas and designs into functional, accessible, and performant
            websites{' '}
            <span className='text-primary-300'>
              using modern frontend technologies
            </span>
            .
          </h1>
          <div className='pt-6 md:flex md:flex-col md:justify-between md:pt-0'>
            <p className='text-md text-neutral-400 md:text-lg'>About Me</p>
            <div className='flex gap-4 pt-4'>
              <Link href='https:facebook.com'>
                <Image
                  src='/logo/logo-fb.png'
                  width={40}
                  height={40}
                  alt='fb'
                />
              </Link>

              <Link href='https:instagram.com'>
                <Image
                  src='/logo/logo-insta.png'
                  width={40}
                  height={40}
                  alt='fb'
                />
              </Link>
              <Link href='https:linkedin.com'>
                <Image
                  src='/logo/logo-linked-in.png'
                  width={40}
                  height={40}
                  alt='fb'
                />
              </Link>
              <Link href='https:tiktok.com'>
                <Image
                  src='/logo/logo-tiktok.png'
                  width={40}
                  height={40}
                  alt='fb'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End About Me */}

      <div className='mt-12 md:flex md:gap-6'>
        {/* Picture */}
        <div className='flex w-full items-center justify-center md:justify-start'>
          <Image
            src='/images/gentleman-2.png'
            alt='gentleman-2'
            width={453}
            height={513}
          ></Image>
        </div>
        {/* End Picture */}

        <div className='my-6 items-center gap-6 md:grid md:grid-cols-2'>
          {/* Frontend Development */}
          <div className=''>
            <div className='pb-3 md:pb-6'>
              <CodeXml size={40} className='text-primary-300' />
              {/* <Image
              src='/icons/code.png'
              alt='code'
              width={40}
              height={40}
              className='pb-3'
            ></Image> */}
            </div>
            <h1 className='text-lg font-bold md:text-xl'>
              Frontend Development
            </h1>
            <p className='md:text-md text-sm text-neutral-400'>
              I build responsive, accessible, and scalable websites using modern
              frontend tools and best practices.
            </p>
          </div>
          {/* End Frontend Development */}

          {/* Web Performance */}
          <div className='mt-12 md:mt-0'>
            <div className='pb-3 md:pb-6'>
              <Globe size={40} className='text-primary-300' />
            </div>
            {/* <Image
              src='/icons/web.png'
              alt='web'
              width={40}
              height={40}
              className='pb-3'
            ></Image> */}
            <h1 className='text-lg font-bold md:text-xl'>Web Performance</h1>
            <p className='md:text-md text-sm text-neutral-400'>
              I optimize websites for speed and efficiency to ensure smooth
              experiences across all devices.
            </p>
          </div>
          {/* End Web Performance */}

          {/* Component Based UI */}
          <div className='mt-12'>
            <div className='pb-3 md:pb-6'>
              <Component size={40} className='text-primary-300' />
            </div>
            {/* <Image
              src='/icons/component.png'
              alt='component'
              width={40}
              height={40}
              className='pb-3'
            ></Image> */}
            <h1 className='text-lg font-bold md:text-xl'>Component Based UI</h1>
            <p className='md:text-md text-sm text-neutral-400'>
              I specialize in crafting reusable UI components that are clean,
              maintainable, and aligned with design systems.
            </p>
          </div>
          {/* End Component Based UI */}

          {/* Responsive Design */}
          <div className='mt-12'>
            <div className='pb-3 md:pb-6'>
              <Smartphone size={40} className='text-primary-300' />
            </div>
            {/* <Image
              src='/icons/mobile.png'
              alt='mobile'
              width={25}
              height={25}
              className='pb-3'
            ></Image> */}
            <h1 className='text-lg font-bold md:text-xl'>Responsive Design</h1>
            <p className='md:text-md text-sm text-neutral-400'>
              I ensure that every layout adapts beautifully to different screen
              sizes — from mobile to desktop.
            </p>
          </div>
          {/* End Responsive Design */}
        </div>
      </div>
    </div>
  );
};

export default Idea;
