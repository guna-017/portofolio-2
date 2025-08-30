import { div } from 'motion/react-client';
import Image from 'next/image';
import React from 'react';

const TrustedVoice = () => {
  return (
    <div className='custom-container py-10 md:mt-10'>
      <div className='md:pb-6xl flex flex-col items-center justify-center gap-2 pb-6'>
        <h1 className='text-3xl font-bold'>Trusted Voices</h1>
        <p className='text-sm text-neutral-400'>
          Here’s what people say about working with me — across projects, teams,
          and timelines.
        </p>
      </div>

      {/* card */}
      {/* md left */}
      <div className='flex flex-col gap-4 md:flex md:flex-row md:gap-5'>
        <div className='md:max-w-[448px]'>
          {/* card 1 */}
          <div className='z-[-1] border-1 border-neutral-900 bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(20,155,176,0.3)] px-5 py-5 md:flex md:h-full md:flex-col'>
            <div className='gap-6 pb-5 md:relative md:h-full md:max-w-[448px]'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-display-sm font-bold'>8X</h1>
                <h2 className='text-neutral-25 text-lg font-bold'>
                  More users converted after redesign
                </h2>
                <div className='flex gap-[3px]'>
                  <Image
                    src='/icons/star.png'
                    alt='star'
                    width={16}
                    height={16}
                  ></Image>
                  <Image
                    src='/icons/star.png'
                    alt='star'
                    width={16}
                    height={16}
                  ></Image>
                  <Image
                    src='/icons/star.png'
                    alt='star'
                    width={16}
                    height={16}
                  ></Image>
                  <Image
                    src='/icons/star.png'
                    alt='star'
                    width={16}
                    height={16}
                  ></Image>
                  <Image
                    src='/icons/star.png'
                    alt='star'
                    width={16}
                    height={16}
                  ></Image>
                </div>
                <p className='text-sm text-neutral-400'>
                  Working with Edwin has been a fantastic experience. His
                  attention to detail and commitment to quality are evident in
                  every project. He consistently delivers results that exceed
                  expectations, making him a valuable asset to any team.
                </p>
              </div>
            </div>

            {/* pablo icon  */}
            <div className='relative flex justify-between pt-6'>
              <div className='flex flex-col gap-2'>
                <Image
                  src='/icons/pablo.png'
                  alt='pablo'
                  width={48}
                  height={48}
                  className='rounded-full'
                ></Image>
                <p className='text-neutral-25 text-sm font-semibold'>
                  Pablo Stanley
                </p>
                <p className='text-neutral-25 text-sm'>
                  Product Manager at Finovate
                </p>
              </div>
              <div className='absolute right-0 bottom-0'>
                <Image
                  src='/icons/quote.png'
                  alt='quote'
                  width={48}
                  height={48}
                ></Image>
              </div>
            </div>
          </div>

          {/* end card 1 */}
        </div>
        {/* end md left */}

        {/* md right */}
        <div className='md:flex md:max-w-[732px] md:flex-col md:gap-5'>
          {/* md right-up */}
          <div>
            {/* card 2 */}
            <div className='border-1 border-neutral-900 px-5 py-5 md:flex md:flex-col'>
              <div className='gap-6 pb-5 md:relative md:h-full md:max-w-[448px]'>
                <div className='flex flex-col gap-2'>
                  <h1 className='text-display-sm font-bold'>3X</h1>
                  <h2 className='text-neutral-25 text-lg font-bold'>
                    Improved user engagement and sign-ups
                  </h2>
                  <div className='flex gap-[3px]'>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                  </div>
                  <p className='text-sm text-neutral-400'>
                    Edwin's expertise in frontend development is remarkable. He
                    brings creativity and innovation to the table, ensuring that
                    every project is not only functional but also visually
                    appealing.
                  </p>
                </div>
              </div>

              {/* pablo icon  */}
              <div className='relative flex justify-between pt-6'>
                <div className='flex flex-col gap-2'>
                  <Image
                    src='/icons/pablo-2.png'
                    alt='pablo'
                    width={48}
                    height={48}
                    className='rounded-full'
                  ></Image>
                  <p className='text-neutral-25 text-sm font-semibold'>
                    Pablo Stanley
                  </p>
                  <p className='text-neutral-25 text-sm'>
                    Product Manager at Finovate
                  </p>
                </div>
                <div className='absolute right-0 bottom-0'>
                  <Image
                    src='/icons/quote.png'
                    alt='quote'
                    width={48}
                    height={48}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          {/* end md right-up */}

          {/* end card 2 */}

          {/* md right-down */}

          <div className='md:flex md:gap-5'>
            {/* card 3 */}
            <div className='border-1 border-neutral-900 px-5 py-5 md:flex md:flex-col'>
              <div className='gap-6 pb-5 md:relative md:h-full md:max-w-[448px]'>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-[3px]'>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                  </div>
                  <p className='text-sm text-neutral-400'>
                    Edwin's work ethic and dedication are truly inspiring. He
                    approaches challenges with a positive attitude and
                    consistently finds effective solutions.
                  </p>
                </div>
              </div>

              {/* pablo icon  */}
              <div className='relative flex justify-between pt-6'>
                <div className='flex flex-col gap-2'>
                  <Image
                    src='/icons/pablo-3.png'
                    alt='pablo'
                    width={48}
                    height={48}
                    className='rounded-full'
                  ></Image>
                  <p className='text-neutral-25 text-sm font-semibold'>
                    Pablo Stanley
                  </p>
                  <p className='text-neutral-25 text-sm'>
                    Product Manager at Finovate
                  </p>
                </div>
                <div className='absolute right-0 bottom-0'>
                  <Image
                    src='/icons/quote.png'
                    alt='quote'
                    width={48}
                    height={48}
                  ></Image>
                </div>
              </div>
            </div>

            {/* end card 3*/}

            {/* card 4 */}
            <div className='border-1 border-neutral-900 px-5 py-5 md:flex md:flex-col'>
              <div className='gap-6 pb-5 md:relative md:h-full md:max-w-[448px]'>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-[3px]'>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                    <Image
                      src='/icons/star.png'
                      alt='star'
                      width={16}
                      height={16}
                    ></Image>
                  </div>
                  <p className='text-sm text-neutral-400'>
                    Edwin has a unique ability to transform complex ideas into
                    user-friendly designs. His contributions have significantly
                    enhanced our projects.
                  </p>
                </div>
              </div>

              {/* pablo icon  */}
              <div className='relative flex justify-between pt-6'>
                <div className='flex flex-col gap-2'>
                  <Image
                    src='/icons/pablo-4.png'
                    alt='pablo'
                    width={48}
                    height={48}
                    className='rounded-full'
                  ></Image>
                  <p className='text-neutral-25 text-sm font-semibold'>
                    Pablo Stanley
                  </p>
                  <p className='text-neutral-25 text-sm'>
                    Product Manager at Finovate
                  </p>
                </div>
                <div className='absolute right-0 bottom-0'>
                  <Image
                    src='/icons/quote.png'
                    alt='quote'
                    width={48}
                    height={48}
                  ></Image>
                </div>
              </div>
            </div>

            {/* end card 4*/}
          </div>
          {/* end md right-down */}
        </div>
      </div>
    </div>
  );
};

export default TrustedVoice;
