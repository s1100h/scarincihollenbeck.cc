import Image from 'next/image';
import Link from 'next/link';
import { AwardImgLinkBox } from 'styles/attorney-page/ProfileSidebar.style';

const renderAward = (link, image, title) => {
  if (link) {
    if (link.includes('https')) {
      return (
        <AwardImgLinkBox href={link} target="_blank">
          <Image
            data-src={image}
            src={image}
            alt={title}
            width={120}
            height={120}
            blurDataURL={image}
          />
        </AwardImgLinkBox>
      );
    }
    if (link.slice(0, 1) === '/') {
      return (
        <Link href={link} passHref>
          <AwardImgLinkBox>
            <Image
              data-src={image}
              src={image}
              alt={title}
              width={120}
              height={120}
              blurDataURL={image}
            />
          </AwardImgLinkBox>
        </Link>
      );
    }
  }

  return (
    <AwardImgLinkBox>
      <Image
        data-src={image}
        src={image}
        alt={title}
        width={120}
        height={120}
        blurDataURL={image}
      />
    </AwardImgLinkBox>
  );
};

export default renderAward;
