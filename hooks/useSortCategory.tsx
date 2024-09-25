import { useRouter, useSearchParams } from 'next/navigation';
import React, { useTransition } from 'react';

import { SortType } from '@/types/TypePage';

interface UseSortCategoryProps {
  type: 'tag' | 'sort';
  sortOptions: { label: string; value: string }[];
  selectedTags: string[];
  onTypeSelect: (type: SortType) => void;
}

export default function useSortCategory({
  type,
  sortOptions,
  selectedTags,
  onTypeSelect,
}: UseSortCategoryProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const sortParam = searchParams.get('sort');

  // 태그 클릭 핸들러
  const handleTagClick = (tag: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const tags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    if (tags.length > 0) {
      params.set('tags', tags.join(','));
    } else {
      params.delete('tags');
    }

    onTypeSelect('tag');

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  // 정렬 옵션 클릭 핸들러
  const handleSortOptionClick = (option: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (params.get('sort') === option) {
      params.delete('sort');
    } else {
      params.set('sort', option);
    }

    onTypeSelect('sort');

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  // PopoverTrigger에 표시할 내용 생성
  const renderTriggerContent = () => {
    if (type === 'tag') {
      if (selectedTags.length === 0) {
        return '태그';
      } else if (selectedTags.length <= 3) {
        return selectedTags.map((tag) => (
          <p key={tag} className="inline-block mr-1">
            {tag}
          </p>
        ));
      } else {
        return `${selectedTags.length}개 선택`;
      }
    } else {
      const sortOption = sortOptions.find((option) => option.value === sortParam);
      return sortOption ? sortOption.label : '최신순';
    }
  };

  return {
    handleTagClick,
    handleSortOptionClick,
    renderTriggerContent,
    isPending,
    selectedTags,
    sortParam,
  };
}
