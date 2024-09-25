'use client';

import { useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Post } from '@/types/Post';

interface SortCategoryPopoverProps {
  type: 'tag' | 'sort';
  postList: Post[];
}

const sortOptions = [
  { label: '최신순', value: 'newest' },
  { label: '오래된순', value: 'oldest' },
];

export function SortCategoryPopover({ type, postList }: SortCategoryPopoverProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const allTags: string[] = Array.from(new Set(postList.flatMap((post) => post.tags)));

  const handleTagClick = (tag: string) => {
    console.log(tag);
    const params = new URLSearchParams(searchParams);
    const tags: string[] = params.get('tags') ? params.get('tags').split(',') : [];
    console.log(tags);
  };

  const handleSortOptionClick = (option: string) => {
    const params = new URLSearchParams(searchParams);

    if (params.get('sort') === option) {
      params.delete('sort');
    } else {
      params.set('sort', option);
    }
    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{type === 'tag' ? 'Tags' : 'View'}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-44">
        {type === 'tag' ? (
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">태그 선택</h4>
              <p className="text-sm text-muted-foreground">태그를 선택해 주세요.</p>
            </div>
            <ul className="grid gap-2">
              {allTags.map((tag) => (
                <li key={tag}>
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
              {sortOptions.map((option) => (
                <li key={option.value}>
                  <button className="text-base" onClick={() => handleSortOptionClick(option.value)}>
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
