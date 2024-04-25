import parse from 'html-react-parser';
import Link from 'next/link';
import * as ImageLegacy from 'next/legacy/image';
import Image from 'next/image';
import empty from 'is-empty';
import {
  BASE_API_URL,
  HTTP_PRODUCTION_URL,
  HTTP_WWW_PRODUCTION_URL,
  PRODUCTION_URL,
} from '../../../utils/constants';
import {
  cutSlashFromTheEnd,
  getCloudinaryImageUrl,
} from '../../../utils/helpers';

const createImageSrc = (attribs) => {
  if (
    empty(attribs?.['data-srcset'])
    && !empty(attribs?.['data-version'])
    && !empty(attribs?.['data-public-id'])
  ) {
    return getCloudinaryImageUrl(
      attribs?.['data-version'],
      attribs?.['data-public-id'],
    );
  }
  return attribs?.['data-srcset'] || attribs?.src;
};

const getWikiLink = (href) => {
  if (!empty(href) && !href.includes('http')) {
    return href?.replace(
      '//upload.wikimedia.org/',
      'https://upload.wikimedia.org/',
    );
  }
  return href;
};
// Parsing HTML and replace a hardcode-domain to dynamic href for <Link/>. This function returns React jsx components.
export const JSXWithDynamicLinks = ({ HTML, print, isHoliday }) => parse(HTML, {
  replace: (domNode) => {
    if (domNode.type === 'tag' && domNode.name === 'h1') {
      domNode.attribs.class = 'animate__animated animate__fadeInDown animate__fast';
    }
    const productionUrls = [
      PRODUCTION_URL,
      HTTP_PRODUCTION_URL,
      HTTP_WWW_PRODUCTION_URL,
      BASE_API_URL,
    ];
    if (
      domNode.type === 'tag'
        && domNode.name === 'a'
        && productionUrls.some((url) => domNode.attribs.href?.includes(url))
        && !domNode.attribs.href.includes('/wp-content/')
    ) {
      const uri = domNode.attribs.href?.split('/');
      const uriSliced = `/${uri.slice(3).join('/')}`;
      const urlCutPossibleSlash = cutSlashFromTheEnd(uriSliced);
      const href = !urlCutPossibleSlash ? '/' : urlCutPossibleSlash;
      // Using default tag <a> because with Next component <Link> don't work redirects from next config.
      // Example redirect - from /practices/sports-and-entertainment-law to /practices/entertainment-and-media
      return (
        <a href={href}>
          {domNode.children[0]?.data
              || domNode.children[0]?.children[0]?.data}
        </a>
      );
    }
    if (
      domNode.type === 'tag'
        && domNode.name === 'a'
        && !empty(domNode.attribs.href)
    ) {
      const alienUrl = domNode.attribs.href;
      const modifiedAlienUrl = alienUrl.startsWith('http:')
        ? `https:${alienUrl.slice(5)}`
        : alienUrl;
      const modifiedAlienUrlCutSlash = !modifiedAlienUrl.includes(PRODUCTION_URL)
          && modifiedAlienUrl.endsWith('/')
        ? cutSlashFromTheEnd(modifiedAlienUrl)
        : modifiedAlienUrl;
      const hrefTarget = modifiedAlienUrlCutSlash.includes('http')
          && !modifiedAlienUrlCutSlash.includes('scarincihollenbeck.com')
        ? '_blank'
        : domNode.attribs?.target;
      const imageSrc = createImageSrc(domNode?.children[0]?.attribs);

      return (
        <Link href={modifiedAlienUrlCutSlash} target={hrefTarget}>
          {domNode.children[0]?.data
              || domNode.children[0]?.children[0]?.data}
          {domNode.children[0]?.name === 'img' && (
          <ImageLegacy
            src={getWikiLink(imageSrc)}
            alt={domNode.children[0]?.attribs?.alt}
            width={domNode.children[0]?.attribs?.width || 750}
            height={domNode.children[0]?.attribs?.height || 350}
          />
          )}
        </Link>
      );
    }
    if (domNode.type === 'tag' && domNode.name === 'img') {
      const imageSrc = createImageSrc(domNode?.attribs);
      if (print) {
        return (
        // eslint-disable-next-line @next/next/no-img-element
          <img
              // blurDataURL={domNode.attribs['data-srcset'] || domNode.attribs.src}
            src={getWikiLink(imageSrc)}
            alt={domNode.attribs.alt}
            width={domNode.attribs.width || 750}
            height={domNode.attribs.height || 350}
          />
        );
      }

      if (domNode.parent?.parent?.attribs?.class.includes('wp-block-image')) {
        return (
          <Image
            className="floated-image"
            placeholder="blur"
            blurDataURL={imageSrc}
            loading="lazy"
            src={getWikiLink(imageSrc)}
            alt={domNode.attribs.alt}
            width={domNode.attribs?.width || 750}
            height={domNode.attribs?.height || 350}
          />
        );
      }

      return (
        <ImageLegacy
          placeholder="blur"
          blurDataURL={imageSrc}
          loading="lazy"
          src={getWikiLink(imageSrc)}
          alt={domNode.attribs.alt}
          width={domNode.attribs.width || 750}
          height={domNode.attribs.height || 350}
          layout={isHoliday ? '' : 'responsive'}
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
