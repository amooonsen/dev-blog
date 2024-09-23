'use client';

import React, { ReactElement } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

// components
import { SortCategoryPopover } from './SortCategoryPopover';
import { Button } from '@/components/ui/button';

// types
import { CategoryDetail } from '@/types/Post';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface FilterCategoryProps {
  allPostCount: number;
  categoryList: CategoryDetail[];
  category?: string;
}

export default function FilterCategory({ allPostCount, categoryList }: FilterCategoryProps) {
  const router: AppRouterInstance = useRouter();

  return (
    <div className="flex justify-between">
      <ul className="flex flex-wrap gap-4 max-w-[60%]">
        <li>
          <Button variant="outline" className="inline-flex gap-2" asChild>
            <Link href="/blog">
              <strong>All</strong>
              <span>{allPostCount}</span>
            </Link>
          </Button>
        </li>
        {categoryList.map(
          (item: CategoryDetail): ReactElement => (
            <li key={item.dirName}>
              <Button variant="outline" className="inline-flex gap-2" asChild>
                <Link href={`/blog/${item.dirName}`} aria-label={`카테고리: ${item.dirName}`}>
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
          {/* 태그별로 소팅해주는 팝오버 삽입 예정 */}
          <SortCategoryPopover type="tag" />
        </li>
        <li>
          {/* 오름차순, 내림차순, 최신순, 오래된순 팝오버 예정 */}
          <SortCategoryPopover type="sort" />
        </li>
      </ul>
    </div>
  );
}
