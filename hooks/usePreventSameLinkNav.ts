import { useRouter } from 'next/navigation';

const usePreventSameLinkNavigation = () => {
  const router = useRouter();

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetUrl: string
  ) => {
    const currentUrl = new URL(targetUrl, window.location.origin);

    // 현재 URL과 클릭된 링크의 URL이 같으면 이동을 방지
    if (window.location.href === currentUrl.href) {
      event.preventDefault();
    } else {
      router.push(currentUrl.href);
    }
  };

  return { handleLinkClick };
};

export default usePreventSameLinkNavigation;
