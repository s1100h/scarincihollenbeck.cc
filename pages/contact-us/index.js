import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import {
  contactPageQuery,
  officeLocationQuery,
} from 'requests/graphql-queries';
import { getSubTitleFromHTML } from 'utils/helpers';
import { useRouter } from 'next/router';
import ContactPage from 'components/pages/ContactPage';

const sanitizeLocations = (locations) => locations.map((office) => ({
  databaseId: office.databaseId,
  ...office.officeMainInformation,
}));

export async function getStaticProps() {
  const {
    pageBy: {
      title, seo, content, featuredImage,
    },
  } = await fetchAPI(contactPageQuery);
  const { officeLocations } = await fetchAPI(officeLocationQuery, {});
  const { subTitle } = getSubTitleFromHTML(content);
  return {
    props: {
      seo,
      title,
      description: subTitle,
      officeLocations: sanitizeLocations(officeLocations.nodes),
      featuredImage: featuredImage.node.sourceUrl,
    },
    revalidate: 86400,
  };
}

const ContactUs = ({
  seo,
  title,
  description,
  officeLocations,
  featuredImage,
}) => {
  const { asPath } = useRouter();
  const canonicalUrl = `${PRODUCTION_URL}${asPath}`;

  const contactProps = {
    seo,
    title,
    description,
    officeLocations,
    featuredImage,
    canonicalUrl,
  };
  return <ContactPage {...contactProps} />;
};

export default ContactUs;
