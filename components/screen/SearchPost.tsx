'use client';

import React from 'react';

import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';

import searchInputPlaceholders from '@/constants/searchInputConst';

export default function SearchPost() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h2 className="mb-4 sm:mb-8 text-xl font-semibold text-center sm:text-3xl dark:text-white text-black">
        보고싶은 글을 검색해주세요.
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={searchInputPlaceholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
