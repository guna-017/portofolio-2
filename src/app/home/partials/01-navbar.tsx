'use client';
import { navigationData } from '@/app/constants/navigation-data';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur }}
      className='fixed top-0 z-50 w-full'
    >
      <div className='custom-container flex h-12 items-center justify-center gap-8'>
        {/* logo_name */}

        {/* navlink */}
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-8'>
            <h1 className='text-xl font-bold'>Edwin</h1>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  className='md:text-md hover:text-primary-300 hover:decoration-primary-300 active:text-primary-300 active:decoration-primary-300'
                  href={data.href}
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* hamburger button mobile */}
      <div className='custom-container absolute top-4 z-50 flex w-full justify-between md:hidden'>
        <h1 className='text-xl font-bold'>Edwin</h1>
        <Sheet>
          <SheetTrigger>
            <Menu className='cursor-pointer md:hidden' />
          </SheetTrigger>
          <SheetContent className='w-full bg-black p-4'>
            <nav className=''>
              <ul className=''>
                <h1 className='mb-4 text-xl font-bold'>Edwin</h1>
                {navigationData.map((data) => (
                  <li key={data.label} className='mb-2'>
                    <Link
                      className='md:text-md hover:text-primary-300 hover:decoration-primary-300 active:text-primary-300 active:decoration-primary-300'
                      href={data.href}
                    >
                      {data.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Navbar;
