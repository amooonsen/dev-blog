// 도메인 구입 후 교체 필요
export const baseDomain =
  process.env.NEXT_PUBLIC_MODE === 'local'
    ? 'http://localhost:3000'
    : 'https://dev-blog-2024-teal.vercel.app';

export const blogName = '개발자 조경문';
export const blogDesc =
  '개발자 조경문 입니다. 프론트엔드를 주로 하고 있으며, 웹에 관련하여 많은 일을 하고 있습니다.';
