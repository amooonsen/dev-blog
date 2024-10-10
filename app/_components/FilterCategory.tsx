import React, { ReactElement } from 'react';

import Link from 'next/link';

// components
import { Button } from '@/components/ui/button';

// types
import { CategoryDetail } from '@/types/TypePost';

interface FilterCategoryProps {
  allPostCount: number;
  categoryList: CategoryDetail[];
  category?: string;
}

export default function FilterCategory({ allPostCount, categoryList }: FilterCategoryProps) {
  return (
    <ul className="flex flex-wrap gap-4 lg:max-w-[60%]">
      <li>
        <Button variant="outline" size="sm" className="inline-flex gap-2" asChild>
          <Link href="/tech">
            <strong>All</strong>
            <span>{allPostCount}</span>
          </Link>
        </Button>
      </li>
      {categoryList.map(
        (item: CategoryDetail): ReactElement => (
          <li key={item.dirName}>
            <Button variant="outline" size="sm" className="inline-flex gap-2" asChild>
              <Link href={`/tech/${item.dirName}`} aria-label={`카테고리: ${item.dirName}`}>
                <strong>{item.publicName}</strong>
                <span>{item.count}</span>
              </Link>
            </Button>
          </li>
        )
      )}
    </ul>
  );
}
