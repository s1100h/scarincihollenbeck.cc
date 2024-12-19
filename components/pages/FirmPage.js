import dynamic from 'next/dynamic';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { FIRM_PAGES } from 'utils/constants';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';

const FirmContent = dynamic(() => import('components/organisms/firm/FirmContent'));
const LatestPostsSection = dynamic(() => import('components/organisms/home/LatestPostsSection'));

export default function FirmPage({ page }) {
  const {
    seo,
    sections,
    attorneysRecommendedPosts,
    title,
    description,
    image,
    canonicalLink,
  } = page;

  const titlesMap = {
    Diversity: 'Latest Diversity News',
  };

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDesc}
        canonicalUrl={canonicalLink}
      />
      <SubHeaderDefault
        title={title}
        subtitle={description}
        backgroundImage={image}
        menu={FIRM_PAGES}
      />

      <FirmContent sections={sections} />

      <LatestPostsSection
        title={titlesMap[title] || 'Latest from the firm'}
        posts={attorneysRecommendedPosts}
      />
    </>
  );
}
