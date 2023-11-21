import parse from 'html-react-parser';
import Link from 'next/link';
import * as ImageLegacy from 'next/legacy/image';
import Image from 'next/image';
import empty from 'is-empty';
import { PRODUCTION_URL } from '../../../utils/constants';
import { getCloudinaryImageUrl } from '../../../utils/helpers';

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
          {domNode.children[0]?.data
              || domNode.children[0]?.children[0]?.data}
        </Link>
      );
    }
    if (
      domNode.type === 'tag'
        && domNode.name === 'a'
        && !empty(domNode.attribs.href)
    ) {
      return (
        <Link href={domNode.attribs.href} target="_blank">
          {domNode.children[0]?.data
              || domNode.children[0]?.children[0]?.data}
          {domNode.children[0].name === 'img' && (
          <ImageLegacy
            src={domNode.children[0]?.attribs['data-srcset']}
            alt={domNode.children[0]?.attribs?.alt}
            width={domNode.children[0]?.attribs?.width}
            height={domNode.children[0]?.attribs?.height}
          />
          )}
        </Link>
      );
    }
    if (domNode.type === 'tag' && domNode.name === 'img') {
      if (print) {
        return (
        // eslint-disable-next-line @next/next/no-img-element
          <img
              // blurDataURL={domNode.attribs['data-srcset'] || domNode.attribs.src}
            src={domNode.attribs['data-srcset'] || domNode.attribs.src}
            alt={domNode.attribs.alt}
            width={domNode.attribs.width || 500}
            height={domNode.attribs.height || 300}
          />
        );
      }
      if (domNode.parent?.parent?.attribs?.class === 'wp-block-image') {
        return (
          <Image
            className="floated-image"
            placeholder="blur"
            blurDataURL={
                domNode.attribs['data-srcset'] || domNode.attribs.src
              }
            loading="lazy"
            src={domNode.attribs['data-srcset'] || domNode.attribs.src}
            alt={domNode.attribs.alt}
            width={domNode.attribs?.width || 500}
            height={domNode.attribs?.height || 300}
          />
        );
      }
      if (!domNode.attribs['data-srcset']?.length) {
        const imageUrl = getCloudinaryImageUrl(
          domNode.attribs['data-version'],
          domNode.attribs['data-public-id'],
        );
        return (
          <ImageLegacy
            placeholder="blur"
            blurDataURL={imageUrl}
            loading="lazy"
            src={imageUrl}
            alt={domNode.attribs.alt}
            width={domNode.attribs.width || 500}
            height={domNode.attribs.height || 300}
            layout="responsive"
          />
        );
      }

      return (
        <ImageLegacy
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

    if (domNode.type === 'tag' && domNode.name === 'li') {
      if (domNode.children[0]?.name === 'a') {
        return (domNode.attribs.class = 'bullets-li');
      }
    }

    if (domNode.type === 'tag' && domNode.name === 'iframe') {
      domNode.attribs.width = '100%';
      domNode.attribs.height = '300';

      return domNode;
    }

    if (domNode.type === 'tag' && domNode.attribs.class === 'wp-video') {
      let video;

      domNode.children.forEach((child) => {
        if (child.name === 'video') {
          video = child;
        }
      });

      return (
      // eslint bug.
      // eslint-disable-next-line jsx-a11y/media-has-caption
        <video preload="metadata" controls>
          <source
            type={video.children[0].attribs.type}
            src={video.children[0].attribs.src}
          />
        </video>
      );
    }

    if (domNode.type === 'tag' && domNode.name === 'li') {
      domNode.attribs.class = 'bullets-li';
    }
  },
});
