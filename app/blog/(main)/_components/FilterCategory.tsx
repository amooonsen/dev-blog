import React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FilterCategory() {
  return (
    <ul className="flex gap-4">
      <li>
        <Button asChild>
          <Link href="/category">카테고리</Link>
        </Button>
      </li>
      <li>
        <Button asChild>
          <Link href="/category">카테고리</Link>
        </Button>
      </li>
      <li>
        <Button asChild>
          <Link href="/category">카테고리</Link>
        </Button>
      </li>
    </ul>
  );
}
