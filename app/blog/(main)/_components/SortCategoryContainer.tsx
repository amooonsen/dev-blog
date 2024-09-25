'use client';

import React from 'react';

// components
import { SortCategoryPopover } from './SortCategoryPopover';
import { Button } from '@/components/ui/button';

// hooks
import useSortCategory from '@/hooks/useSortCategory';

interface SortCategoryContainerProps {
  allTags: string[];
}

export default function SortCategoryContainer({ allTags }: SortCategoryContainerProps) {
  return (
    <ul className="flex gap-4">
      <li>
        <Button>초기화</Button>
      </li>
      <li>
        <SortCategoryPopover type="tag" allTags={allTags} />
      </li>
      <li>
        <SortCategoryPopover type="sort" />
      </li>
    </ul>
  );
}
