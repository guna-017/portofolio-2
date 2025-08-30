import FormInput from '@/components/ui/form';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LetsBuild = () => {
  return (
    <div className='relative'>
      {/* bg */}
      <div className=''>
        <div className='absolute bottom-0 z-[-1] h-full w-full'>
          <Image
            src='/images/bg-footer.png'
            alt='bg-footer'
            fill
            className='object-cover'
          />
        </div>
        <div className='absolute top-0 z-[-1] h-1/2 w-full bg-gradient-to-b from-black to-transparent' />
      </div>
      {/* end bg */}

      {/* content */}
      <div className='custom-container py-10 md:mt-10 md:flex md:gap-10'>
        {/* title */}
        <div className='bg-black md:max-w-[580px] md:pt-10'>
          <div className='flex flex-col gap-2 md:px-6'>
            <h1 className='text-display-md md:text-display-2xl font-bold md:font-bold'>
              Let's <span className='text-primary-300'>Build Something</span>{' '}
              Great
            </h1>
            <p className='md:text-md text-sm text-neutral-400'>
              Got an idea, a project, or just want to connect? I’m always open
              to new conversations.
            </p>
          </div>

          {/* form */}
          <div className='mt-6'>
            <FormInput />
          </div>
        </div>

        {/* address */}
        <div className='flex flex-col gap-6 pt-6 md:justify-between'>
          <div className='md:flex md:flex-col md:gap-5'>
            <div className='md:flex md:flex-col md:gap-3'>
              <h2 className='text-md text-neutral-25 font-bold'>Address</h2>
              <p className='text-sm text-neutral-400'>Jakarta, Indonesia</p>
              <br className='md:hidden' />
              <hr className='text-white/10' />
            </div>
            <div className='md:flex md:flex-col md:gap-3'>
              <h2 className='text-md text-neutral-25 font-bold'>Contact</h2>
              <p className='text-sm text-neutral-400'>(+62) 1234567890</p>
              <br className='md:hidden' />
              <hr className='text-white/10' />
            </div>
            <div className='md:flex md:flex-col md:gap-3'>
              <h2 className='text-md text-neutral-25 font-bold'>
                Social Media
              </h2>
              {/* logo */}
              <div className='flex gap-3 pt-4'>
                <Link href='https://facebook.com'>
                  <Image src='/logo/fb.png' alt='fb' width={40} height={40} />
                </Link>
                <Link href='https://instagram.com'>
                  <Image
                    src='/logo/insta-2.png'
                    alt='insta'
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href='https://linkedin.com'>
                  <Image
                    src='/logo/in-2.png'
                    alt='linked-in'
                    width={40}
                    height={40}
                  />
                </Link>
                <Link href='https://tiktok.com'>
                  <Image
                    src='/logo/tiktok-2.png'
                    alt='tiktok'
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
              {/* end logo */}
              <br />
            </div>
          </div>

          <h1 className='text-display-xl md:text-display-3xl font-bold md:font-bold'>
            GET IN TOUCH
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LetsBuild;
