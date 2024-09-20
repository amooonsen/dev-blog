'use client';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface SortCategoryPopoverProps {
  type: 'tag' | 'sort';
}

export function SortCategoryPopover({ type }: SortCategoryPopoverProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="text-base">아이템1</div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="text-base">아이템1</div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="text-base">아이템1</div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="text-base">아이템1</div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
