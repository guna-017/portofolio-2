'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { ComponentPropsWithRef } from 'react';

interface MarqueeProps extends ComponentPropsWithRef<'div'> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = true,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const repeatCount = isMobile ? 2 : repeat;

  return (
    <div
      className={cn(
        'group flex overflow-hidden p-2',
        vertical ? 'flex-col' : 'flex-row',
        'gap-4 sm:gap-12',
        '[--gap:1rem] sm:[--gap:3rem]',
        '[--duration:20s] sm:[--duration:40s]',
        className
      )}
      {...props}
    >
      {Array(repeatCount)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              'flex shrink-0 justify-around',
              vertical ? 'flex-col' : 'flex-row',
              'gap-4 sm:gap-[var(--gap)]',
              {
                'animate-marquee': !vertical,
                'animate-marquee-vertical': vertical,
                'group-hover:[animation-play-state:paused]': pauseOnHover,
                '[animation-direction:reverse]': reverse,
              }
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
};
