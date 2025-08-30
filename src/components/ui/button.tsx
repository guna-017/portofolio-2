import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer  outline-none disabled:text-neutral-800',
  {
    variants: {
      variant: {
        default:
          'bg-primary-300 text-white shadow-xs hover:bg-primary-400 text-md ',
        destructive:
          'border-neutral-900 border text-white shadow-xs hover:bg-neutral-800 text-sm ',
        outline:
          'bg-white border  text-neutral-950 shadow-xs hover:bg-neutral-100 text-sm',
      },
      size: {
        default: 'h-14 px-24 ',
        destructive: ' h-10 px-10',
        outline: 'h-14 w-full ',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
