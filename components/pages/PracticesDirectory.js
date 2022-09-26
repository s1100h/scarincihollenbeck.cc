import SingleSubHeader from 'layouts/SingleSubHeader';
import FullWidth from 'layouts/FullWidth';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import ListWrapper from 'components/organisms/practices/ListWrapper';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import Article from 'components/atoms/Article';
import dynamic from 'next/dynamic';

const ListWrapperDynamic = dynamic(() => import('components/organisms/practices/ListWrapper'));

const PracticesDirectory = ({
  site,
  seo,
  canonicalUrl,
  sortedCorePractices,
  sortedAdditionalPractices,
  sortedBusinessPractices,
}) => (
  <>
    <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
    <SingleSubHeader title={site.title} subtitle={site.description} span={7} offset={2} />
    <FullWidth>
      <Article contentBody={formatPageImageToCloudinaryUrl(site.bodyContent)} />
      <ListWrapper title="Core Practices" list={sortedCorePractices} isBlock />
      <ListWrapper title="Additional Practices" list={sortedAdditionalPractices} isBlock />
      <ListWrapperDynamic
        title="Business Related Legal Services"
        list={sortedBusinessPractices}
        isSimple
      />
    </FullWidth>
  </>
);

export default PracticesDirectory;
