'use client';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Post } from '@/types/Post';

interface SortCategoryPopoverProps {
  type: 'tag' | 'sort';
  postList: Post[];
}

export function SortCategoryPopover({ type, postList }: SortCategoryPopoverProps) {
  console.log(postList);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{type === 'tag' ? 'Tags' : 'View'}</Button>
      </PopoverTrigger>
      <PopoverContent className="w-44">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">태그 소팅</h4>
            <p className="text-sm text-muted-foreground">항목을 선택해 주세요.</p>
          </div>
          <ul className="grid gap-2">
            <li className="grid grid-cols-2 items-center gap-4">
              <div className="text-base">아이템1</div>
            </li>
            <li className="grid grid-cols-2 items-center gap-4">
              <div className="text-base">아이템1</div>
            </li>
            <li className="grid grid-cols-2 items-center gap-4">
              <div className="text-base">아이템1</div>
            </li>
            <li className="grid grid-cols-2 items-center gap-4">
              <div className="text-base">아이템1</div>
            </li>
          </ul>
        </div>
      </PopoverContent>
    </Popover>
  );
}
