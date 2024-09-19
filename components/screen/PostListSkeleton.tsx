import React from 'react';

import { Skeleton } from '../ui/skeleton';

// [...Array(9).keys()].map(v => v + 1)

export default function PostListSkeleton() {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
      {[...Array(9).keys()].map((_, index) => (
        <li key={`post-list-skeleton-${index}`} className="flex flex-col space-y-3">
          <Skeleton className="h-[200px] w-[352px] rounded-xl" />
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-8 w-[350px]" />
            <Skeleton className="h-4 w-[350px]" />
            <Skeleton className="h-4 w-[120px]" />
          </div>
          <div className="mt-4">
            <Skeleton className="h-4 w-[180px]" />
          </div>
        </li>
      ))}
    </ul>
  );
}
