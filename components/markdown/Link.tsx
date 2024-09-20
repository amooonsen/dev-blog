import { PropsWithChildren, AnchorHTMLAttributes } from 'react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
}

export const ExternalLink = ({
  children,
  href,
  ...props
}: PropsWithChildren<ExternalLinkProps>) => {
  return (
    <a
      {...props}
      target="_blank"
      href={href}
      className="break-words text-pink-600 no-underline underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
};
