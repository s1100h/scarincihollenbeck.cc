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

const ListWrapperDynamic = dynamic(() => import('components/organisms/practices/ListWrapper'));
const FAQ = dynamic(() => import('components/atoms/FAQ'));

const corePracticesArticle = `
Some of <strong>the specific law practices</strong> that Scarinci Hollenbeck attorneys offer include litigation and dispute resolution,
with arbitration, mediation, and trial practice, corporate law, with mergers and acquisitions,
joint ventures, and business formation and others.
<br />
<br />
Scarinci Hollenbeck also works in a wide range of other <strong>legal practice areas</strong> not listed here. If you have a legal need that is not mentioned,
please contact us to discuss how we can help you. Our experienced attorneys are ready to provide the quality representation you deserve. 
`;

const additionalPracticesArticle = `
Scarinci Hollenbeck <strong>law practices</strong> offer many services to our clients. Our law practices are designed to help their clients with various legal issues,
including business law, family law, and estate planning. We also offer a wide range of other legal practice areas including: сannabis law,
cyber security & data privacy, gaming and others. 
  <br />
  <br />
No matter what your legal need may be, our experienced attorneys are ready to help you achieve the best possible outcome.
Contact us today to learn more about how we can serve you.
`;

const legalServicesArticle = `
Business law is a broad area of law that covers all aspects of starting and running a business. This <strong>law practice area</strong> can be complex and challenging,
but it is also essential for any entrepreneur. Starting and operating a successful company would be very difficult without a solid understanding
of business law.
<br />
<br />
There are many different corporations out there, each with its own unique legal needs. That is why it is so important
to find a law firm specializing in your business's specific fields of law. 
`;

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
    <SearchWithArticle>
      <SearchPractices practicesAll={{ sortedCorePractices, sortedAdditionalPractices }} />
      <Article contentBody={formatPageImageToCloudinaryUrl(site.bodyContent)} />
    </SearchWithArticle>
    <FullWidth>
      <ListWrapper
        title="Core Law Practices"
        article={corePracticesArticle}
        list={sortedCorePractices}
        isBlock
      />
      <ListWrapper
        title="Additional Law Practices"
        article={additionalPracticesArticle}
        list={sortedAdditionalPractices}
        isBlock
      />
      <ListWrapperDynamic
        title="Business-Related Legal Services"
        article={legalServicesArticle}
        list={sortedBusinessPractices}
        isSimple
      />
      <FAQ faqArrContent={ATTORNEYS_FAQ} />
    </FullWidth>
  </>
);

export default PracticesDirectory;
