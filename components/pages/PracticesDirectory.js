import FullWidth from 'layouts/FullWidth';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import ListWrapper from 'components/organisms/practices/ListWrapper';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';
import Article from 'components/atoms/Article';
import dynamic from 'next/dynamic';
import SearchPractices from 'components/molecules/practice/SearchPractices';
import { ATTORNEYS_FAQ } from 'utils/constants';
import { Title } from '../../styles/Article.style';
import { ArticleSearchBox } from '../../styles/Practices.style';
import SubHeader from '../../layouts/SubHeader/SubHeader';

const FAQ = dynamic(() => import('components/atoms/FAQ'));

const PracticesDirectory = ({
  site, seo, canonicalUrl, practices, subheaderOverlay,
}) => (
  <>
    <BasicSiteHead title={seo.title} metaDescription={seo.metaDesc} canonicalUrl={canonicalUrl} />
    <SubHeader backgroundImage={subheaderOverlay} title={site.title} subtitle={site.description} span={7} offset={2} />
    <FullWidth>
      <Title props={{ size: '2rem' }}>Law Practices</Title>
      <ArticleSearchBox>
        <Article contentBody={formatPageImageToCloudinaryUrl(site.bodyContent)} />
        <SearchPractices practicesAll={practices} />
      </ArticleSearchBox>
      <ListWrapper list={practices} isBlock />
      <FAQ faqArrContent={ATTORNEYS_FAQ} />
    </FullWidth>
  </>
);

export default PracticesDirectory;
