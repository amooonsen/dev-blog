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
        <Button className="inline-flex gap-2" asChild>
          <Link href="/blog">
            <strong>All</strong>
            <span>{allPostCount}</span>
          </Link>
        </Button>
      </li>
      {categoryList.map(
        (item: CategoryDetail): ReactElement => (
          <li key={item.dirName}>
            <Button className="inline-flex gap-2" asChild>
              <Link href={`/blog/${item.dirName}`}>
                <strong>{item.publicName}</strong>
                <span>{item.count}</span>
              </Link>
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
