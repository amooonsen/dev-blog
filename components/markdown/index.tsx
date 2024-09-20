import { Callout } from './callout';
import { Image } from './Image';
import { ExternalLink } from './Link';
import { MDXComponents } from 'mdx/types';

// dev test commit

export const MdxComponents: MDXComponents = {
  a: ExternalLink,
  img: Image,
  blockquote: Callout,
  Callout,
};
