import React, { ReactElement } from 'react';

import { Skeleton } from '../ui/skeleton';

export default function PostListSkeleton() {
  return (
    <>
      <Skeleton className="w-48 h-9" />
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
        {[...Array(9).keys()].map(
          (_: number, index: number): ReactElement => (
            <li
              key={`post-list-skeleton-${index}`}
              className="flex flex-col space-y-3 overflow-hidden"
            >
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
          )
        )}
      </ul>
    </>
  );
}
