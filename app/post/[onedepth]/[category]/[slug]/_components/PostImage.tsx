'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Spinner from '@/components/ui/spinner'; // 로딩 스피너 컴포넌트라고 가정

export interface PostImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  type: 'thumbnail' | 'content';
  ratio?: number;
}

export default function PostImage({ src, alt, type = 'content', ratio = 16 / 9 }: PostImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className={type === 'content' ? 'mt-8' : 'w-full lg:max-w-5xl mt-0'}>
      {type === 'content' ? (
        <AspectRatio ratio={ratio}>
          <div className="relative w-full h-full">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Spinner />
              </div>
            )}
            <Image
              unoptimized
              src={src ?? ''}
              alt={alt ?? '컨텐츠 이미지'}
              sizes="(max-width: 550px) 50vw, 920px"
              fill
              className={`object-cover bg-foreground transition-opacity duration-500 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoadingComplete={handleLoadingComplete}
            />
          </div>
        </AspectRatio>
      ) : (
        <img
          src={src ?? ''}
          alt={alt ?? '컨텐츠 썸네일'}
          className="h-auto w-full object-contain bg-foreground"
        />
      )}
    </div>
  );
}
