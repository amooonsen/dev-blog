import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// component
import { AspectRatio } from '@/components/ui/aspect-ratio';

// post
import { getSortedPostList } from '@/lib/post';

export default async function BlogMainRecent() {
  const { posts } = await getSortedPostList(undefined, undefined, 1, 3);
  console.log(posts.length);
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Blog.
        </h1>
        <h2 className="text-center md:text-left text-lg mt-5 md:pl-8">
          웹 개발자 조경문 블로그 입니다.
          <br />
          기술, 뉴스테러, 그리고 일상을 공유합니다.
        </h2>
      </section>
      <section>
        <div className="mb-8 md:mb-16">
          <div className="sm:mx-0">
            <AspectRatio ratio={16 / 9}>
              <Link aria-label={posts[0].title} href={posts[0].url}>
                <Image
                  alt={posts[0].thumbnailAlt || posts[0].title}
                  src={posts[0].thumbnail}
                  className="shadow-sm hover:shadow-md transition-shadow duration-200"
                  fill
                  sizes="100vw"
                />
              </Link>
            </AspectRatio>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          <div>
            <h3 className="mb-8 text-4xl lg:text-6xl leading-tight">
              <Link className="hover:underline" href="/posts/dynamic-routing">
                {posts[0].title}
              </Link>
            </h3>
            <div className="inline-flex gap-4 items-baseline mb-4 md:mb-0 text-lg">
              <span>{posts[0].dateString}</span>
              <span>{posts[0].readingMinutes}분 읽기</span>
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">{posts[0].preview}</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          More Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {posts.slice(1).map((post) => (
            <article key={post.url}>
              <div className="mb-5">
                <div className="sm:mx-0">
                  <AspectRatio ratio={16 / 9}>
                    <Link aria-label={post.title} href={post.url}>
                      {post.thumbnail ? (
                        <Image
                          src={post.thumbnail}
                          alt={post.thumbnailAlt}
                          sizes="(max-width: 550px) 50vw, 450px"
                          fill
                          className="object-cover transition-transform duration-300 ease-out group-hover:scale-125 bg-foreground"
                        />
                      ) : (
                        <div className="relative flex justify-center items-center aspect-video w-full rounded-md bg-foreground overflow-hidden">
                          <span className="text-sm text-white dark:text-black">No Image</span>
                        </div>
                      )}
                    </Link>
                  </AspectRatio>
                </div>
              </div>
              <h3 className="text-3xl mb-3 leading-snug">
                <Link className="hover:underline" href={post.url}>
                  {post.title}
                </Link>
              </h3>
              <div className="text-lg mb-4">
                <time dateTime={post.dateString}>{post.dateString}</time>
              </div>
              <p className="text-lg leading-relaxed mb-4">{post.preview}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// import { PostRepository } from '@/service/PostRepository';

// // 참고 UI
// // https://next-blog-starter.vercel.app/
// export default async function BlogMainRecent() {
//   // 데이터 페칭 로직
//   const postRepository = new PostRepository('tech'); // 또는 적절한 카테고리
//   const recentPosts = await postRepository.fetchRecentPosts(6);

//   return (
//     <div className="space-y-12">
//       <h2 className="text-3xl font-bold tracking-tight">최근 게시물</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {recentPosts.map((post) => (
//           <article key={post.slug} className="flex flex-col">
//             <div className="relative w-full h-48 mb-4">
//               {post.thumbnail && (
//                 <Link href={post.url}>
//                   <Image
//                     src={post.thumbnail}
//                     alt={post.thumbnailAlt || post.title}
//                     fill
//                     className="object-cover rounded-lg hover:opacity-80 transition-opacity"
//                   />
//                 </Link>
//               )}
//             </div>
//             <div className="flex-1 flex flex-col">
//               <h3 className="text-xl font-semibold mb-2 line-clamp-2">
//                 <Link href={post.url} className="hover:text-primary">
//                   {post.title}
//                 </Link>
//               </h3>
//               <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.desc}</p>
//               <div className="mt-auto flex items-center justify-between text-sm">
//                 <time className="text-muted-foreground">{post.dateString}</time>
//                 <span className="text-muted-foreground">{post.readingMinutes}분 읽기</span>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// }
