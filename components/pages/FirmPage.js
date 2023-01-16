import dynamic from 'next/dynamic';
import Subscription from 'components/molecules/subscription/Subscription';
import Sidebar from 'components/shared/Sidebar';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import { FIRM_BLOG_PAGES } from 'utils/constants';
import Article from 'components/atoms/Article';
import {
  FirstColumn,
  BottomContainer,
  SecondColumn,
  TwoColumnsContainer,
} from 'styles/Containers.style';

const RecommendedPosts = dynamic(() => import('components/common/RecommendedPosts'));
const RelatedAttorneys = dynamic(() => import('components/molecules/practice/RelatedAttorneys'));

export default function FirmPage({ page, canonicalUrl, handleLink }) {
  const {
    seo, tabs, relatedPages, attorneysRecommendedPosts, title, description, members,
  } = page;

  const titlesMap = {
    'Women LEAD': 'Latest from Woman Lead',
    Diversity: 'Latest Diversity News',
  };

  return (
    <>
      <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
      <SingleSubHeader title={title} subtitle={description} />
      <TwoColumnsContainer>
        <FirstColumn>
          {tabs.map((tab) => (
            <Article
              key={tab.title}
              title={tab.title}
              highlight
              contentBody={formatPageImageToCloudinaryUrl(tab.content)}
            />
          ))}
        </FirstColumn>
        <SecondColumn>
          <Subscription />
          <hr />
          <Sidebar title="Firm Library" content={FIRM_BLOG_PAGES} tabKey={2} />
          <hr />
          <Sidebar title="Diversity" content={relatedPages} tabKey={2} />
        </SecondColumn>
      </TwoColumnsContainer>
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
