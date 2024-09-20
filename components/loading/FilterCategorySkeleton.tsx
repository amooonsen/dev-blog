'use client';

import React, { ReactElement } from 'react';

import { Skeleton } from '../ui/skeleton';

export default function FilterCategorySkeleton() {
  return (
    <div className="flex justify-between">
      <ul className="flex flex-wrap gap-4 max-w-[60%]">
        {[...Array(5).keys()].map(
          (_, index): ReactElement => (
            <li key={`category-skeleton-${index}`}>
              <Skeleton className="h-8 w-[100px]" />
            </li>
          )
        )}
      </ul>
      <ul className="flex gap-4">
        <li>
          <Skeleton className="h-8 w-[100px]" />
        </li>
        <li>
          <Skeleton className="h-8 w-[100px]" />
        </li>
      </ul>
    </div>
  );
}
