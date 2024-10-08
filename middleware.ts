import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 정적 파일 및 API 경로 예외 처리
  const PUBLIC_FILE = /\.(.*)$/;
  if (
    pathname.startsWith('/_next') || // Next.js 내부 파일
    pathname.startsWith('/api') || // API 경로
    pathname.startsWith('/static') || // 정적 파일 경로
    pathname.startsWith('/favicon.ico') || // 파비콘 파일
    PUBLIC_FILE.test(pathname) // 모든 정적 파일 (예: .js, .css, .png, etc)
  ) {
    return NextResponse.next();
  }

  // '/contact' 경로는 허용
  if (pathname.startsWith('/contact')) {
    return NextResponse.next();
  }

  // 유효한 depth 경로인지 확인
  const validDepths = ['tech', 'newsletter', 'life'];
  const pathSegments = pathname.split('/').filter(Boolean);

  // depth가 없는 루트 경로이거나, 유효한 depth일 경우 통과
  if (pathSegments.length === 0 || validDepths.includes(pathSegments[0])) {
    return NextResponse.next();
  }

  // 그 외의 경우에만 '/'로 리다이렉트, 무한 리다이렉트 방지
  // pathname이 이미 '/'라면 리다이렉트하지 않음
  if (pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 기본적으로 모든 요청 통과
  return NextResponse.next();
}
