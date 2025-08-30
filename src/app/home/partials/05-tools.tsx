'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import Image from 'next/image';
import React from 'react';
import AnimatedCounter from '@/app/home/helper/AnimatedCounter';

const skills = [
  {
    name: 'HTML',
    percentage: 100,
    icon: (
      <Image src='/icons/html.png' alt='html' width={60} height={60}></Image>
    ),
  },
  {
    name: 'CSS',
    percentage: 90,
    icon: (
      <Image src='/icons/css.png' width={60} height={60} alt='css-icon'></Image>
    ),
  },
  {
    name: 'JavaScript',
    percentage: 90,
    icon: (
      <Image src='/icons/js.png' width={60} height={60} alt='js-icon'></Image>
    ),
  },
  {
    name: 'TypeScript',
    percentage: 80,
    icon: (
      <Image src='/icons/ts.png' width={60} height={60} alt='ts-icon'></Image>
    ),
  },
  {
    name: 'Sequalize',
    percentage: 80,
    icon: (
      <Image
        src='/icons/sequalize.png'
        width={60}
        height={60}
        alt='ts-icon'
      ></Image>
    ),
  },
  {
    name: 'Mongo DB',
    percentage: 75,
    icon: (
      <Image
        src='/icons/mongo-db.png'
        width={60}
        height={60}
        alt='ts-icon'
      ></Image>
    ),
  },
];

const Tools = () => {
  return (
    <div className='custom-container py-10 md:flex md:justify-between md:gap-[191px] md:py-20'>
      {/* title */}
      <div className='flex flex-col gap-2 md:relative md:h-full md:max-w-[367px]'>
        <h1 className='md:text-display-2xl text-3xl font-bold'>
          Tools I Use to Build
        </h1>
        <p className='md:text-md pt-2 pb-6 text-sm text-neutral-400'>
          From code to design — here’s the tech that helps me turn ideas into
          real products.
        </p>
        <Button className='w-full gap-2 md:absolute md:bottom-0'>
          <Image
            src='/icons/white-mail.png'
            width={24}
            height={24}
            alt='mail-logo'
            className=''
          ></Image>
          <p className='text-sm font-semibold'>Send Message</p>
        </Button>
      </div>

      {/* skill*/}
      <div className='mt-6 md:mt-0 md:w-[642px]'>
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <div className='flex items-center justify-between py-1'>
              <div className='flex items-center gap-4'>
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black p-3 shadow-lg'>
                  {skill.icon}
                </div>
                <span className='text-xl'>{skill.name}</span>
              </div>
              <div className='text-xl font-bold'>
                <AnimatedCounter
                  target={skill.percentage}
                  suffix='%'
                  duration={2}
                />
              </div>
            </div>
            <motion.div
              className='mb-1 h-1 overflow-hidden rounded-full bg-[#22252B]'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className='h-full rounded-full bg-gradient-to-r from-[#149BB0] to-[#0d7a8a]'
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1 + 0.5,
                  ease: 'easeOut',
                }}
              />
            </motion.div>
            {index < skills.length - 1 && (
              <div className='my-4 h-px bg-neutral-900' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
