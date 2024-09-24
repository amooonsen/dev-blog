import React from 'react';
import { Section } from '../ui/section';
import { Skeleton } from '../ui/skeleton';

export default function PostHeadSkeleton() {
  return (
    <Section id="postHeadSkeleton" aria-label="게시글 상단 정보 로딩 중">
      <div className="flex flex-col space-y-6 mb-8">
        <Skeleton className="w-full h-16"></Skeleton>
        <div className="flex gap-3 text-slate-500 dark:text-slate-200">
          <div className="flex items-center gap-1">
            <Skeleton className="w-32 h-6"></Skeleton>
          </div>
          <div className="flex items-center gap-1">
            <Skeleton className="w-24 h-6"></Skeleton>
          </div>
        </div>
        <dl className="flex gap-3">
          <Skeleton className="w-24 h-6"></Skeleton>
          <Skeleton className="w-24 h-6"></Skeleton>
        </dl>
        <dl className="flex gap-3">
          <Skeleton className="w-24 h-6"></Skeleton>
          <Skeleton className="w-24 h-6"></Skeleton>
          <Skeleton className="w-24 h-6"></Skeleton>
          <Skeleton className="w-24 h-6"></Skeleton>
        </dl>
      </div>
      <div className="border-t pt-12">
        <Skeleton className="w-full h-96"></Skeleton>
      </div>
    </Section>
  );
}
