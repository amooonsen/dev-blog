import React from "react";

// components
import {Section} from "@/components/ui/section";
import PostThumbnailList from "../_components/PostThumbnailList";

export default function blogMain() {
  return (
    <main className="mt-14 mb-8">
      <h1 className="border-t border-b border-slate-400 text-[256px] font-bold text-center">
        DEV LOG
      </h1>
      <Section className="mx-auto w-full space-y-8">
        <h2>All blog posts</h2>
        <PostThumbnailList />
      </Section>
      <Section className="mx-auto w-full space-y-8">섹션2</Section>
    </main>
  );
}
