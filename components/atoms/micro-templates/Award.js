import Image from 'next/image';
import Link from 'next/link';
import { AwardImgLinkBox } from 'styles/attorney-page/ProfileSidebar.style';

const renderAward = (link, image, title, key) => {
  if (link) {
    if (link.includes('https')) {
      return (
        <AwardImgLinkBox key={key && title} href={link} target="_blank">
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
        <Link key={key && title} href={link} passHref legacyBehavior>
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
    <AwardImgLinkBox key={key && title}>
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
