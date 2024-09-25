import React from 'react';

import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn('flex flex-col w-full lg:max-w-5xl min-h-0 mx-auto px-6 lg:px-12', className)}
      {...props}
    />
  );
}
