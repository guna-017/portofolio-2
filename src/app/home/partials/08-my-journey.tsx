'use client';

import { Button } from '@/components/ui/button';

import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';

const MyJourney: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // For Scroll - Next
  // const scroll = (direction: 'next' | 'prev') => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollBy({
  //       left: direction === 'next' ? 350 : -350,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  const scroll = (direction: 'next' | 'prev') => {
    if (scrollRef.current) {
      const screenWidth = window.innerWidth;
      const scrollAmount = screenWidth < 768 ? 350 : 1200;

      scrollRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  // End For Scroll - Next

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft <= 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);

      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className='custom-container py-10 md:py-20'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold'>My Journey in Tech</h1>
        <p className='text-sm text-neutral-400'>
          From small gigs to real-world challenges — each experience helped me
          grow as a builder and problem-solver.
        </p>
      </div>

      {/* card */}
      <div
        ref={scrollRef}
        className='md:mt-6xl mt-6 flex max-w-[361px] snap-x snap-mandatory gap-5 overflow-hidden scroll-smooth md:flex md:max-w-[1200px] md:gap-5 md:overflow-hidden md:scroll-smooth'
      >
        {/* card 1*/}
        <div className='] relative min-w-full snap-center border border-neutral-900 px-4 py-4 md:min-w-[564px] md:gap-5'>
          <div className='absolute left-0 h-16 w-1 bg-[#149BB0]' />
          <div className=''>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-1 pb-5'>
                <h1 className='text-md font-bold'>Frontend Developer</h1>
                <p className='text-sm text-neutral-400'>2025- Present</p>
              </div>

              <Image
                src='/icons/suitcase.png'
                alt='suitcase'
                width={24}
                height={24}
                className='flex items-center'
              ></Image>
            </div>
            <hr className='pb-5 text-neutral-900' />
            <p className='text-sm text-neutral-400'>
              Built responsive web interfaces using modern frameworks like
              React.js, ensuring seamless integration with backend systems.
              Optimized performance, implemented accessible designs, and
              delivered clean, reusable code to enhance user experience and
              scalability.
            </p>
            <div>
              <Image
                src='/logo/airnib.png'
                alt='logo'
                width={128}
                height={48}
                className='pt-5'
              />
            </div>
          </div>
        </div>
        {/* end card 1*/}

        {/* card 2*/}
        <div className='relative min-w-full snap-center border border-neutral-900 px-4 py-4 md:min-w-[564px] md:gap-5'>
          <div className='absolute left-0 h-16 w-1 bg-[#149BB0]' />
          <div className=''>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-1 pb-5'>
                <h1 className='text-md font-bold'>Frontend Developer</h1>
                <p className='text-sm text-neutral-400'>2025- Present</p>
              </div>

              <Image
                src='/icons/suitcase.png'
                alt='suitcase'
                width={24}
                height={24}
                className='flex items-center'
              ></Image>
            </div>
            <hr className='pb-5 text-neutral-900' />
            <p className='text-sm text-neutral-400'>
              Built responsive web interfaces using modern frameworks like
              React.js, ensuring seamless integration with backend systems.
              Optimized performance, implemented accessible designs, and
              delivered clean, reusable code to enhance user experience and
              scalability.
            </p>
            <div>
              <Image
                src='/logo/airnib.png'
                alt='logo'
                width={128}
                height={48}
                className='pt-5'
              />
            </div>
          </div>
        </div>
        {/* end card 2*/}

        {/* card 3*/}
        <div className='relative min-w-full snap-center border border-neutral-900 px-4 py-4 md:min-w-[564px] md:gap-5'>
          <div className='absolute left-0 h-16 w-1 bg-[#149BB0]' />
          <div className=''>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-1 pb-5'>
                <h1 className='text-md font-bold'>Frontend Developer</h1>
                <p className='text-sm text-neutral-400'>2025- Present</p>
              </div>

              <Image
                src='/icons/suitcase.png'
                alt='suitcase'
                width={24}
                height={24}
                className='flex items-center'
              ></Image>
            </div>
            <hr className='pb-5 text-neutral-900' />
            <p className='text-sm text-neutral-400'>
              Built responsive web interfaces using modern frameworks like
              React.js, ensuring seamless integration with backend systems.
              Optimized performance, implemented accessible designs, and
              delivered clean, reusable code to enhance user experience and
              scalability.
            </p>
            <div>
              <Image
                src='/logo/airnib.png'
                alt='logo'
                width={128}
                height={48}
                className='pt-5'
              />
            </div>
          </div>
        </div>
        {/* end card 3*/}

        {/* card 4*/}
        <div className='relative min-w-full snap-center border border-neutral-900 px-4 py-4 md:min-w-[564px] md:gap-5'>
          <div className='absolute left-0 h-16 w-1 bg-[#149BB0]' />
          <div className=''>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-1 pb-5'>
                <h1 className='text-md font-bold'>Frontend Developer</h1>
                <p className='text-sm text-neutral-400'>2025- Present</p>
              </div>

              <Image
                src='/icons/suitcase.png'
                alt='suitcase'
                width={24}
                height={24}
                className='flex items-center'
              ></Image>
            </div>
            <hr className='pb-5 text-neutral-900' />
            <p className='text-sm text-neutral-400'>
              Built responsive web interfaces using modern frameworks like
              React.js, ensuring seamless integration with backend systems.
              Optimized performance, implemented accessible designs, and
              delivered clean, reusable code to enhance user experience and
              scalability.
            </p>
            <div>
              <Image
                src='/logo/airnib.png'
                alt='logo'
                width={128}
                height={48}
                className='pt-5'
              />
            </div>
          </div>
        </div>
        {/* end card 4 */}
      </div>
      {/* end card */}

      {/* button */}
      <div className='mt-4 flex gap-3'>
        <Button
          onClick={() => scroll('prev')}
          variant='destructive'
          size={'destructive'}
          disabled={isAtStart}
          className='disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-white'
        >
          <p className='text-sm font-semibold'>Prev</p>
        </Button>
        <Button
          onClick={() => scroll('next')}
          variant='destructive'
          size={'destructive'}
          disabled={isAtEnd}
          className='disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-white'
        >
          <p className='text-sm font-semibold'>Next</p>
        </Button>
      </div>
    </div>
  );
};
export default MyJourney;
