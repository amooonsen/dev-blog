import { ImgHTMLAttributes } from 'react';
import PostImage from '../../app/docs/[onedepth]/[category]/[slug]/_components/PostImage';

export const Image = ({ alt = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <>
      <PostImage type="content" alt={alt} {...props} />
      {alt && (
        <span className="mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400">
          {alt}
        </span>
      )}
    </>
  );
};
