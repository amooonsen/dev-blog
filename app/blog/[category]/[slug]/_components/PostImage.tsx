import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export interface PostImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  type: 'thumbnail' | 'content';
  ratio?: number;
}

export default function PostImage({ src, alt, type = 'content', ratio = 16 / 9 }: PostImageProps) {
  return (
    <div className={type === 'content' ? 'mt-8' : 'mt-0'}>
      {type === 'content' ? (
        <AspectRatio ratio={ratio}>
          <img src={src} alt={alt} className="absolute h-full w-full object-cover bg-foreground" />
        </AspectRatio>
      ) : (
        <img src={src} alt={alt} className="h-auto w-full object-contain bg-foreground" />
      )}
    </div>
  );
}
