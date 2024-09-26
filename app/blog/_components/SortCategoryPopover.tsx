'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

// components
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';

// hooks
import useSortCategory from '@/hooks/useSortCategory';

// types
import { SortType } from '@/types/TypePage';

interface SortCategoryPopoverProps {
  type: SortType;
  allTags?: string[];
}

const sortOptions: { label: string; value: string }[] = [
  { label: '최신순', value: 'newest' },
  { label: '오래된순', value: 'oldest' },
];

export function SortCategoryPopover({ type, allTags }: SortCategoryPopoverProps) {
  const [selectedType, setSelectedType] = useState<'tag' | 'sort' | null>(null);

  // 선택된 태그 및 정렬 옵션 가져오기
  const searchParams = useSearchParams();
  const tagsParam = searchParams.get('tags');
  const selectedTags = tagsParam ? tagsParam.split(',') : [];

  const { handleTagClick, handleSortOptionClick, renderTriggerContent, sortParam } =
    useSortCategory({
      type,
      sortOptions,
      selectedTags,
      onTypeSelect: setSelectedType,
    });

  return (
    <Popover>
      <PopoverTrigger asChild>
        {/* <Button variant="outline">{type === 'tag' ? 'Tags' : 'View'}</Button> */}
        <Button variant="outline">{renderTriggerContent()}</Button>
      </PopoverTrigger>

      <PopoverContent className="w-44">
        {type === 'tag' ? (
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">태그 선택</h4>
              <p className="text-sm text-muted-foreground">태그를 선택해 주세요.</p>
            </div>
            <ul className="grid gap-2">
              {allTags?.map((tag) => (
                <li className="flex gap-2 items-center" key={tag}>
                  <Checkbox id={tag} />
                  <button className="text-base" onClick={() => handleTagClick(tag)}>
                    {tag}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">정렬 옵션</h4>
              <p className="text-sm text-muted-foreground">옵션을 선택해 주세요.</p>
            </div>
            <ul className="grid gap-2">
              {sortOptions?.map((option) => (
                <li key={option.value}>
                  <button
                    className={`text-base ${
                      sortParam === option.value ? 'font-bold text-primary' : ''
                    }`}
                    onClick={() => handleSortOptionClick(option.value)}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}