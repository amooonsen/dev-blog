'use client';
import React from 'react';
import Link from 'next/link';

export default function PostThumbnail({ post }) {
  return (
    <li>
      <Link href={`/posts/${post.id}`}>
        {/* 썸네일 이미지 */}
        {/* <img src={post.thumbnail} alt={post.title} /> */}

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
        <p>{post.previewText}</p>
      </Link>
    </li>
  );
}
