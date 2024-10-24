// components
import { Section } from '@/components/ui/section';
import SearchPost from '@/components/screen/SearchPost';
import BlogMainCards from '@/app/home/_components/BlogMainCards';
import BlogMainHero from '@/app/home/_components/BlogMainHero';
import BlogMainRecent from './_components/BlogMainRecent';

export default function HomePage() {
  return (
    <main className="lg:max-w-7xl mt-10 mb-32">
      {/* <BlogMainHero /> */}
      <Section>
        <BlogMainRecent />
      </Section>
      <Section>
        <SearchPost />
        <BlogMainCards />
      </Section>
    </main>
  );
}
