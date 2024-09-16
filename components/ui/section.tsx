import React from 'react';

import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'flex flex-col gap-y-3 w-full lg:max-w-6xl min-h-0 mx-auto px-6 lg:px-0',
        className
      )}
      {...props}
    />
  );
}
