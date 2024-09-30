import Link from 'next/link';
// import { redirect } from 'next/navigation';

// components
import { Section } from '@/components/ui/section';
import SearchPost from '@/components/screen/SearchPost';
import BlogMainCards from './_components/BlogMainCards';

export default function Home() {
  return (
    <main className="mt-20 mb-32">
      <Section className="mt-10">
        <SearchPost />
      </Section>
      <Section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">메뉴 보기</h2>
        <BlogMainCards />
      </Section>
    </main>
  );
}
