import React, { ReactElement } from 'react';
import { Section } from '../ui/section';
import { Skeleton } from '../ui/skeleton';

export default function PostBodySkeleton() {
  return (
    <Section id="postBodySkeleton" className="mt-16 mb-32" aria-label="게시글 정보 로딩 중">
      <div className="flex flex-col gap-14">
        {[...Array(3).keys()].map(
          (_: number, index: number): ReactElement => (
            <div key={`post-detail-body-skeleton-${index}`} className="flex flex-col space-y-8">
              <Skeleton className="w-16 h-8"></Skeleton>
              <Skeleton className="w-full h-32"></Skeleton>
            </div>
          )
        )}
      </div>
      <Skeleton className="w-full h-96"></Skeleton>
    </Section>
  );
}
