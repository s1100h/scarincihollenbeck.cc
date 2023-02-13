import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTION_URL } from '../../../utils/constants';

// Parsing HTML and replace a hardcode-domain to dynamic href for <Link/>. This function returns React jsx components.
export const JSXWithDynamicLinks = ({ HTML }) => parse(HTML, {
  replace: (domNode) => {
    if (
      domNode.type === 'tag'
        && domNode.name === 'a'
        && domNode.attribs.href?.includes(PRODUCTION_URL)
    ) {
      const uri = domNode.attribs.href?.split('/');
      const uriSliced = `/${uri.slice(3).join('/')}`;
      return (
        <Link href={uriSliced}>
          <a>{domNode.children[0].data || domNode.children[0]?.children[0].data}</a>
        </Link>
      );
    }
    if (domNode.type === 'tag' && domNode.name === 'img') {
      return (
        <Image
          placeholder="blur"
          blurDataURL={domNode.attribs['data-srcset']}
          loading="lazy"
          src={domNode.attribs['data-srcset']}
          alt={domNode.attribs.alt}
          width={domNode.attribs.width}
          height={domNode.attribs.height}
          layout="responsive"
        />
      );
    }
  },
});
