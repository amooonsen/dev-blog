'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PostThumbnail({ post }) {
  return (
    <li>
      <Link href={`${post.url}`}>
        {/* 썸네일 이미지 */}
        <div className="relative aspect-video w-full rounded-t-md border-b">
          <Image
            src={post.thumbnail}
            alt={`thumbnail for ${post.title}`}
            sizes="(max-width: 1000px) 50vw, 450px"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* 제목 */}
        <h2>{post.title}</h2>

        {/* 생성일 */}
        <p>{post.creationDate}</p>

        {/* 태그 */}
        {/* <ul>
          {post.tags.map((tag, index) => (
            <li key={index}>#{tag}</li>
          ))}
        </ul> */}

        {/* 본문 미리보기 */}
        <p>{post.desc}</p>
      </Link>
    </li>
  );
}
