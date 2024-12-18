import dynamic from 'next/dynamic';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { FIRM_PAGES } from 'utils/constants';
import { BottomContainer } from 'styles/Containers.style';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';

const RecommendedPosts = dynamic(() => import('components/common/RecommendedPosts'));
const RelatedAttorneys = dynamic(() => import('components/molecules/practice/RelatedAttorneys'));
const FirmContent = dynamic(() => import('components/organisms/firm/FirmContent'));

export default function FirmPage({ page, canonicalUrl, handleLink }) {
  const {
    seo,
    sections,
    attorneysRecommendedPosts,
    title,
    description,
    members,
    image,
  } = page;

  const titlesMap = {
    'Women LEAD': 'Latest from Woman Lead',
    Diversity: 'Latest Diversity News',
  };

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDesc}
        canonicalUrl={canonicalUrl}
      />
      <SubHeaderDefault
        title={title}
        subtitle={description}
        backgroundImage={image}
        menu={FIRM_PAGES}
      />

      <FirmContent sections={sections} />

      <BottomContainer>
        {members && (
          <RelatedAttorneys
            members={members.member}
            chair={members.chair}
            handleLink={handleLink}
            title="Chair"
          />
        )}

        {attorneysRecommendedPosts.length > 0 && (
          <div className="mt-lg-5">
            <RecommendedPosts
              titleGeneralBlock={titlesMap[title] || 'Latest from the firm'}
              attorneyFooterNewsArticles={attorneysRecommendedPosts}
            />
          </div>
        )}
      </BottomContainer>
    </>
  );
}
