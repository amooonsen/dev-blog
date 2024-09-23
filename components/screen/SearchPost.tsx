'use client';

import React from 'react';

import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';

const placeholders = [
  '가장 관심있는 분야는 뭐에요?',
  'Frontend? Backend? Database?',
  '2024년 개발 트렌드',
  'Nextjs에서 성능 개선하는 방법',
];

export default function SearchPost() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <div className="h-48 flex flex-col justify-center items-center px-4">
      <h2 className="mb-4 sm:mb-8 text-xl text-center sm:text-3xl dark:text-white text-black">
        Search Input
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
