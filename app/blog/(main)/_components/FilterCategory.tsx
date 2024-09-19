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
    <div className="flex justify-between">
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
      </ul>
      <ul className="flex gap-4">
        <li>
          태그별로 소팅해주는 팝오버 삽입 예정
          오름차순, 내림차순, 최신순, 오래된순 팝오버 예정
        </li>
      </ul>
    </div>
  );
}
