import React from 'react';
import { fetchAPI } from 'requests/api';
import empty from 'is-empty';
import IndustryPage from 'components/pages/IndustryPage';
import { PRODUCTION_URL } from 'utils/constants';
import { getIndustryContent } from 'requests/industries/industry-default';

const industriesSlugsQuery = `
query industriesSlugs {
  industries(first: 100, where: {status: PUBLISH}) {
    nodes {
      slug
    }
  }
}`;

const getDescriptionFromTab = (content) => {
  if (!content) return null;

  return content?.map((item) => {
    if (!empty(item?.description)) return item.description;
    if (!empty(item?.columns)) {
      return item.columns.find((column) => !empty(column.description))
        ?.description;
    }

    return null;
  })[0];
};

const sanitizeSlides = (slides) => {
  if (!slides) return null;

  return slides?.map((slide) => ({
    title: slide?.openerTitle,
    description: getDescriptionFromTab(slide?.tabContent),
    image: slide?.image?.sourceUrl || '/images/whyChooseUs1.webp',
  }));
};

const excludedSlugs = ['entertainment-and-media', 'cannabis'];

export const getStaticPaths = async () => {
  const listId = await fetchAPI(industriesSlugsQuery);
  const paths = [];

  listId?.industries?.nodes?.forEach((node) => {
    if (excludedSlugs.includes(node?.slug)) {
      return;
    }
    paths.push(`/industries/${node?.slug}`);
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const { industry, includeAttorney, industryChief } = await getIndustryContent(
    params.slug,
  );

  if (empty(industry)) {
    return {
      notFound: true,
    };
  }

  const content = {
    title: industry?.title,
    description: industry?.industryContent?.description,
    featuredImage: industry?.featuredImage?.node?.sourceUrl || null,
    contentSection: industry?.industryContent?.contentSection,
    contentTabs: industry?.contentTabs?.tabs,
    slides: sanitizeSlides(industry?.contentTabs?.tabs),
    faq: industry?.industryContent?.faq,
    whyChooseUs: industry?.industryContent?.whyChooseUs,
    chairIndustry: industryChief
      ? industryChief.map((item) => ({ ...item, isChair: true }))
      : [],
    attorneyListIndustry: includeAttorney || [],
  };

  return {
    props: {
      content,
      seo: industry?.seo,
      canonicalLink: `${PRODUCTION_URL}/industries/${params?.slug}`,
    },
    revalidate: 8600,
  };
};

const Industry = ({ content, seo, canonicalLink }) => {
  const industryProps = {
    content,
    seo,
    canonicalLink,
  };
  return <IndustryPage {...industryProps} />;
};

export default Industry;
