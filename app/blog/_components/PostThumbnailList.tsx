import React from "react";

// components
import PostThumbnail from "./PostThumbnail";

// 임의의 데이터 생성
const posts = Array.from({length: 8}, (_, index) => ({
  id: index + 1,
  creationDate: "2023-10-01",
  tags: ["React", "JavaScript"],
  thumbnail: "/path/to/thumbnail.jpg",
  title: `포스트 제목 ${index + 1}`,
  previewText: `이것은 포스트 ${
    index + 1
  }의 미리보기입니다. 이 포스트는 React와 JavaScript에 관한 내용을 다룹니다. 자세한 내용은 본문을 확인하세요.`,
}));

export default function PostThumbnailList() {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
      {posts.map((post) => (
        <PostThumbnail key={post.id} post={post} />
      ))}
    </ul>
  );
}
