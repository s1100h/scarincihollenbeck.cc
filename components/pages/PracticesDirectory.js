import SingleSubHeader from 'layouts/SingleSubHeader';
import FullWidth from 'layouts/FullWidth';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import ListWrapper from 'components/organisms/practices/ListWrapper';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import Article from 'components/atoms/Article';
import dynamic from 'next/dynamic';
import { SearchWithArticle } from 'styles/Practices.style';
import SearchPractices from 'components/molecules/practice/SearchPractices';
import { ATTORNEYS_FAQ } from 'utils/constants';
import { additionalPracticesArticle, corePracticesArticle, legalServicesArticle } from '../../utils/articles-content';

const ListWrapperDynamic = dynamic(() => import('components/organisms/practices/ListWrapper'));
const FAQ = dynamic(() => import('components/atoms/FAQ'));

const PracticesDirectory = ({
  site, seo, canonicalUrl, sortedCorePractices, sortedAdditionalPractices, sortedBusinessPractices, practices,
}) => (
  <>
    <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
    <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={2} />
    <SearchWithArticle>
      <SearchPractices practicesAll={{ sortedCorePractices, sortedAdditionalPractices }} />
      <Article contentBody={formatPageImageToCloudinaryUrl(site.bodyContent)} />
    </SearchWithArticle>
    <FullWidth>
      <ListWrapper title="Core Law Practices" article={corePracticesArticle} list={practices} isBlock />
      <ListWrapper title="Additional Law Practices" article={additionalPracticesArticle} list={sortedAdditionalPractices} isBlock />
      <ListWrapperDynamic title="Business-Related Legal Services" article={legalServicesArticle} list={sortedBusinessPractices} isSimple />
      <FAQ faqArrContent={ATTORNEYS_FAQ} />
    </FullWidth>
  </>
);

export default PracticesDirectory;
