// components
import { Section } from '@/components/ui/section';
import SearchPost from '@/components/screen/SearchPost';
import BlogMainCards from '@/app/home/_components/BlogMainCards';
import BlogMainHero from '@/app/home/_components/BlogMainHero';

export default function HomePage() {
  return (
    <main className="mb-32">
      <BlogMainHero />
      <Section className="lg:max-w-7xl mt-10">
        <SearchPost />
        <BlogMainCards />
      </Section>
    </main>
  );
}
