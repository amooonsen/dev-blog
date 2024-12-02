import { Suspense } from 'react';

// components
import { Section } from '@/components/ui/section';
import SearchPost from '@/components/screen/SearchPost';
import BlogMainCards from '@/app/home/_components/BlogMainCards';
import BlogMainRecent from './_components/BlogMainRecent';

export default function HomePage() {
  return (
    <main className="lg:max-w-7xl mt-10 mb-32 mx-auto">
      <Section>
        <BlogMainRecent />
      </Section>
      <Section>
        {/* 241130 기능 개발 전 까지 검색 영역 주석처리 */}
        {/* <SearchPost /> */}
        <BlogMainCards />
      </Section>
    </main>
  );
}
