import localFont from 'next/font/local';
import { Noto_Sans_KR } from 'next/font/google';

export const geistSans = localFont({
  src: './GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
export const geistMono = localFont({
  src: './GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});
export const pretendard = localFont({
  src: './PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});
export const BMJUA = localFont({
  src: './BMJUA.woff',
  display: 'swap',
  weight: '100 900',
});

// next font goolge
export const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
});
