import { ImgHTMLAttributes } from 'react';
import PostImage from '@/app/blog/[category]/[slug]/_components/PostImage';

export const Image = ({ alt = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <>
      {/* <img alt={alt} {...props} className="mb-0 mt-8 rounded-md" /> */}
      <PostImage alt={alt} {...props} />
      {alt && (
        <span className="mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400">
          {alt}
        </span>
      )}
    </>
  );
};
