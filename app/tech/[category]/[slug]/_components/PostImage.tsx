import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface PostImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  type: 'thumbnail' | 'content';
  ratio?: number;
}

export default function PostImage({ src, alt, type = 'content', ratio = 16 / 9 }: PostImageProps) {
  return (
    <div className={type === 'content' ? 'mt-8' : 'w-full lg:max-w-5xl mt-0'}>
      {type === 'content' ? (
        <AspectRatio ratio={ratio}>
          <Image
            unoptimized
            src={src ?? ''}
            alt={alt ?? '컨텐츠 이미지'}
            sizes="(max-width: 550px) 50vw, 920px"
            fill
            className="object-cover bg-foreground"
          />
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
