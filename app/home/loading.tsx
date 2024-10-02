import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import MainSkeleton from '@/components/loading/MainSkeleton';

export default function loading() {
  return (
    <main className="mb-32">
      <Skeleton className="w-full h-[50vh]" />
      <MainSkeleton />
    </main>
  );
}
