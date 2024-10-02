import { Section } from '@/components/ui/section';
import { Skeleton } from '../ui/skeleton';

export default function MainSkeleton() {
  return (
    <main className="mt-20 mb-32">
      <Section className="lg:max-w-7xl mt-10">
        <Section className="flex flex-col space-y-4 justify-center items-center mt-10">
          <Skeleton className="w-1/3 h-16" />
          <Skeleton className="w-1/2 h-16" />
        </Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 lg:mt-16 px-6 lg:px-10">
          <Skeleton className="w-1/4 h-48" />
          <Skeleton className="w-1/4 h-48" />
          <Skeleton className="w-1/4 h-48" />
          <Skeleton className="w-1/4 h-48" />
        </div>
      </Section>
    </main>
  );
}
