'use client';

import React, { ReactElement } from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

// types
import { CategoryDetail } from '@/types/Post';

interface FilterCategoryProps {
  allPostCount: number;
  categoryList: CategoryDetail[];
  category?: string;
}

export default function FilterCategory({ allPostCount, categoryList }: FilterCategoryProps) {
  return (
    <ul className="flex gap-4">
      <li>
        <Button asChild>
          <Link href="/blog">All {allPostCount}</Link>
        </Button>
      </li>
      {categoryList.map(
        (item: CategoryDetail): ReactElement => (
          <li key={item.dirName}>
            <Button asChild>
              <Link href={`/blog/${item.dirName}}`}>{item.publicName}</Link>
            </Button>
          </li>
        )
      )}
      {/* <li>
        <Button asChild>
          <Link href="/category">카테고리</Link>
        </Button>
      </li> */}
    </ul>
  );
}
