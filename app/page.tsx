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
      <BlogMainCards />
    </main>
  );
}
