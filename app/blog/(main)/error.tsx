'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>에러 발생</h2>
      <button onClick={() => reset()}>다시 시도하기</button>
      <Link href="/blog">홈으로</Link>
    </div>
  );
}
