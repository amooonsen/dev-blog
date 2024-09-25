'use client';

import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

// components
import { SortCategoryPopover } from './SortCategoryPopover';
import { Button } from '@/components/ui/button';

interface SortCategoryContainerProps {
  allTags: string[];
}

export default function SortCategoryContainer({ allTags }: SortCategoryContainerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleResetClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    const hasTags = params.has('tags');
    const hasSort = params.has('sort');

    // 전체 초기화
    if (hasSort && hasTags && window.confirm('전체를 초기화 하시겠습니까?')) {
      params.delete('tags');
      params.delete('sort');
      router.push(`?${params.toString()}`);
      return;
    }

    // 태그 초기화
    if (hasTags && window.confirm('태그를 초기화 하시겠습니까?')) {
      params.delete('tags');
      router.push(`?${params.toString()}`);
      return;
    }

    // 정렬 초기화
    if (hasSort && window.confirm('정렬을 초기화 하시겠습니까?')) {
      params.delete('sort');
      router.push(`?${params.toString()}`);
      return;
    }

    // 아무 것도 선택되지 않았을 때 경고
    if (!hasTags && !hasSort) {
      window.alert('초기화할 항목이 없습니다.');
    }
  };

  return (
    <ul className="flex gap-4">
      <li>
        <Button onClick={handleResetClick}>초기화</Button>
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
