// components
import { Section } from '@/components/ui/section';
import SearchPost from '@/components/screen/SearchPost';
import BlogMainCards from '@/app/_components/BlogMainCards';

export default function HomePage() {
  return (
    <main className="mt-20 mb-32">
      <Section className="lg:max-w-7xl mt-10">
        <SearchPost />
        <BlogMainCards />
      </Section>
    </main>
  );
}
