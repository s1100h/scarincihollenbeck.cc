import parse from 'html-react-parser';
import Link from 'next/link';
import Image from 'next/legacy/image';
import empty from 'is-empty';
import { PRODUCTION_URL } from '../../../utils/constants';

// Parsing HTML and replace a hardcode-domain to dynamic href for <Link/>. This function returns React jsx components.
export const JSXWithDynamicLinks = ({ HTML, print }) => parse(HTML, {
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
          {domNode.children[0]?.data || domNode.children[0]?.children[0]?.data}
        </Link>
      );
    }
    if (domNode.type === 'tag' && domNode.name === 'a' && !empty(domNode.attribs.href)) {
      return (
        <Link href={domNode.attribs.href}>
          {domNode.children[0]?.data || domNode.children[0]?.children[0]?.data}
        </Link>
      );
    }
    if (domNode.type === 'tag' && domNode.name === 'img') {
      if (print) {
        return (
          <img
              // blurDataURL={domNode.attribs['data-srcset'] || domNode.attribs.src}
            src={domNode.attribs['data-srcset'] || domNode.attribs.src}
            alt={domNode.attribs.alt}
            width={domNode.attribs.width || 500}
            height={domNode.attribs.height || 300}
          />
        );
      }
      return (
        <Image
          placeholder="blur"
          blurDataURL={domNode.attribs['data-srcset'] || domNode.attribs.src}
          loading="lazy"
          src={domNode.attribs['data-srcset'] || domNode.attribs.src}
          alt={domNode.attribs.alt}
          width={domNode.attribs.width || 500}
          height={domNode.attribs.height || 300}
          layout="responsive"
        />
      );
    }

    if (domNode.type === 'tag' && domNode.name === 'iframe') {
      domNode.attribs.width = '100%';
      domNode.attribs.height = '300';

      return domNode;
    }
  },
});
