'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

// components
import SortCategoryPopover from './SortCategoryPopover';
import { Button } from '@/components/ui/button';

// utils
import { makeDialog } from '@/lib/utils';

interface SortCategoryContainerProps {
  allTags: string[];
}

export default function SortCategoryContainer({ allTags }: SortCategoryContainerProps) {
  const [selectedTags, setSelectedTags] = useState(false);
  const [hasSort, setHasSort] = useState(false);
  const [hasTags, setHasTags] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  // const params = new URLSearchParams(searchParams.toString());
  // const hasTags = params.has('tags');
  // const hasSort = params.has('sort');

  // if (hasTags || hasSort) setSelectedTags(true);

  const handleResetClick = () => {
    if (hasTags || hasSort) {
      if (hasTags && !hasSort) {
        makeDialog({
          type: 'alert',
          title: '초기화 알림',
          description: '태그를 초기화 하시겠습니까?',
          cancelText: '취소',
          confirmText: '확인',
          // onConfirm() {
          //   params.delete('tags');
          //   router.push(`?${params.toString()}`);
          // },
        });
        return;
      }

      // 정렬만 있을 때 정렬 초기화
      if (hasSort && !hasTags) {
        makeDialog({
          type: 'alert',
          title: '초기화 알림',
          description: '정렬을 초기화 하시겠습니까?',
          cancelText: '취소',
          confirmText: '확인',
          // onConfirm() {
          //   params.delete('sort');
          //   router.push(`?${params.toString()}`);
          // },
        });
        return;
      }

      // 태그와 정렬 둘 다 있을 때
      if (hasTags && hasSort) {
        makeDialog({
          type: 'alert',
          title: '초기화 알림',
          description: '모두 초기화 하시겠습니까?',
          cancelText: '취소',
          confirmText: '확인',
          // onConfirm() {
          //   params.delete('tags');
          //   params.delete('sort');
          //   router.push(`?${params.toString()}`);
          // },
        });
        return;
      }
    }

    // 아무 것도 선택되지 않았을 때 경고
    // makeDialog({
    //   type: 'alert',
    //   title: '',
    //   description: '초기화 할 항목이 없습니다.',
    //   confirmText: '확인',
    // });
  };
  // 3
  //   useEffect(() => {
  //     if (params.has('tags')) {
  //       setHasTags(true);
  //     }
  //     if (params.has('sort')) {
  //       setHasSort(true);
  //     }
  //   }, [params]);

  useEffect(() => {
    setSelectedTags(true);
  }, [hasTags, hasSort]);

  return (
    <ul className="flex gap-4">
      <li>
        <Button variant="destructive" size="sm" onClick={handleResetClick} disabled={!selectedTags}>
          초기화
        </Button>
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
