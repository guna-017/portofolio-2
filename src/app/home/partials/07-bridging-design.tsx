import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Bridging = () => {
  return (
    <div className='custom-container py-10 md:mt-10'>
      <div className='flex flex-col items-center justify-center gap-2 text-center'>
        <h1 className='text-display-md md:text-display-2xl font-bold'>
          Bridging Design and Development
        </h1>
        <p className='md:text-md text-sm text-neutral-400'>
          These are real projects where I implemented frontend interfaces with
          precision and attention to detail.
        </p>
      </div>

      {/* portofolio */}
      <div className='md:pt-6xl gap-5 pt-6 md:flex md:max-w-[1160px] md:justify-center'>
        {/* portofolio 1*/}
        <div className='md:pt-5'>
          <div className='flex justify-center md:min-w-[370px]'>
            <Link href='/' className='w-full'>
              <Image
                src='/images/porto-1.png'
                alt='porto'
                width={373}
                height={373}
                className='w-full md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-105'
              />
            </Link>
          </div>
          <div className='flex flex-col gap-1 pt-4'>
            <p className='text-lg md:text-xl'>Portofolio 1</p>
            <p className='md:text-md text-sm text-neutral-400'>2025</p>
          </div>
        </div>
        {/* end portofolio 1*/}

        {/* portofolio 2*/}
        <div className='pt-5'>
          <div className='flex justify-center md:min-w-[370px]'>
            <Link href='/' className='w-full'>
              <Image
                src='/images/porto-2.png'
                alt='porto'
                width={373}
                height={373}
                className='w-full md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-105'
              />
            </Link>
          </div>
          <div className='flex flex-col gap-1 pt-4'>
            <p className='text-lg md:text-xl'>Portofolio 2</p>
            <p className='md:text-md text-sm text-neutral-400'>2025</p>
          </div>
        </div>
        {/* end portofolio 2*/}

        {/* portofolio 3*/}
        <div className='pt-5'>
          <div className='flex justify-center md:min-w-[370px]'>
            <Link href='/' className='w-full'>
              <Image
                src='/images/porto-3.png'
                alt='porto'
                width={373}
                height={373}
                className='w-full md:transition-transform md:duration-300 md:ease-in-out md:hover:scale-105'
              />
            </Link>
          </div>
          <div className='flex flex-col gap-1 pt-4'>
            <p className='text-lg md:text-xl'>Portofolio 3</p>
            <p className='md:text-md text-sm text-neutral-400'>2025</p>
          </div>
        </div>
        {/* end portofolio 3*/}
      </div>
    </div>
  );
};

export default Bridging;
