'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { MessageSquareText } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface CardData {
  id: number;
  question: string;
  answer: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    question: 'Do you work on freelance or remote projects?',
    answer: 'Yes, I work freelance and accept remote projects.',
  },
  {
    id: 2,
    question: 'What technologies do you work with?',
    answer:
      'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
  },

  {
    id: 3,
    question: 'Can you convert Figma or Sketch designs into code?',
    answer: 'Yes, I can convert Figma design into code.',
  },
  {
    id: 4,
    question: 'Do you collaborate with backend developers or teams?',
    answer: 'Yes, I can collaborate with developers or backend teams.',
  },
  {
    id: 5,
    question: 'Are you available for full-time roles?',
    answer: 'Yes, I am available for full-time roles.',
  },
];

const FAQ: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [startIndex, setStartIndex] = useState<number>(0);
  const visibleCards = cardData.slice(startIndex, startIndex + 4);

  //
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const scroll = (direction: 'next' | 'prev') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'next' ? 400 : -400,
        behavior: 'smooth',
      });
    }
  };

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
  //

  const handleToggle = (id: number) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  const handleNext = () => {
    if (startIndex + 4 < cardData.length) {
      setStartIndex((prev) => prev + 1);
      setActiveCard(null);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
      setActiveCard(null);
    }
  };

  return (
    <div className='custom-container py-10 md:mt-10'>
      {/* title */}
      <div className='flex flex-col gap-6 md:flex md:flex-row md:justify-between'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-bold'>Still Got Questions?</h1>
          <p className='text-sm text-neutral-400'>
            I’ve listed answers to questions I often get as a frontend
            developer.
          </p>
        </div>

        {/* Button */}
        <div>
          {/*Mobile Button */}
          <div className='flex gap-3 md:hidden'>
            <Button
              onClick={() => scroll('prev')}
              variant={'destructive'}
              size={'destructive'}
              disabled={isAtStart}
              className='disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-white'
            >
              <p className='text-sm font-semibold'>Prev</p>
            </Button>
            <Button
              onClick={() => scroll('next')}
              variant={'destructive'}
              size={'destructive'}
              disabled={isAtEnd}
              className='disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-white'
            >
              <p className='text-sm font-semibold'>Next</p>
            </Button>
          </div>
          {/*End Mobile Button */}

          {/*Desktop Button */}

          <div className='hidden md:block'>
            <div className='md:flex md:gap-3'>
              <Button
                onClick={handlePrev}
                variant={'destructive'}
                size={'destructive'}
                disabled={startIndex === 0}
                className='disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-white'
              >
                <p className='text-sm font-semibold'>Prev</p>
              </Button>
              <Button
                onClick={handleNext}
                variant={'destructive'}
                size={'destructive'}
                disabled={startIndex + 4 >= cardData.length}
                className='disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-white'
              >
                <p className='text-sm font-semibold'>Next</p>
              </Button>
            </div>
          </div>

          {/*End Desktop Button */}
        </div>
        {/* Button */}
      </div>

      {/* Mobile Display*/}
      <div className='mt-6 border-1 border-neutral-900 md:hidden'>
        <div
          ref={scrollRef}
          className='flex max-w-[353px] snap-x snap-mandatory gap-5 overflow-hidden scroll-smooth md:hidden'
        >
          {cardData.map((card) => (
            <div
              key={card.id}
              className='bg-primary-400 min-w-full snap-center border-1 border-neutral-900 px-4 py-4'
            >
              <div className='flex justify-between'>
                <Image
                  src='/icons/profile.png'
                  alt='profile'
                  width={80}
                  height={80}
                  className='rounded-full'
                ></Image>
                <MessageSquareText size={40} />
              </div>
              <div className='pt-6xl flex flex-col gap-2'>
                <h2 className='text-2xl font-semibold'>{card.question}</h2>
                <p className='text-neutral-25 text-md font-medium'>
                  {card.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Mobile Display */}

      {/* Desktop Display*/}
      <div className='custom-container md:mt-6xl hidden md:block'>
        <div className='flex items-center justify-center gap-5 overflow-hidden'>
          {visibleCards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleToggle(card.id)}
              className={`cursor-pointer transition-all duration-500 ease-in-out ${
                activeCard === card.id
                  ? 'bg-primary-400 w-[379px]'
                  : 'w-[252px]'
              } flex h-[466px] flex-col justify-between overflow-hidden rounded-md border border-neutral-900 p-4 text-white`}
            >
              <div>
                {activeCard === card.id ? (
                  <div className='flex justify-between'>
                    <Image
                      src='/icons/profile.png'
                      alt='profile'
                      width={80}
                      height={80}
                      className='rounded-full'
                    />
                    <MessageSquareText size={40} />
                  </div>
                ) : (
                  <MessageSquareText size={40} />
                )}
              </div>

              <div className='flex flex-col justify-end gap-6'>
                <h2 className='text-2xl font-semibold'>{card.question}</h2>
                {activeCard === card.id && (
                  <p className='text-neutral-25 text-sm'>{card.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Desktop */}
    </div>
  );
};

export default FAQ;
