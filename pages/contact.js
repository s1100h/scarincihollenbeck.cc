import ContactPage from 'components/pages/ContactPage';
import { getLocationContent } from 'utils/queries';
import { SITE_URL } from 'utils/constants';

export default function Contact({ seo, site, offices }) {
  const contactProps = {
    site,
    seo,
    offices,
  };
  return <ContactPage {...contactProps} />;
}

export async function getStaticProps() {
  const [locations, currentOffice] = await getLocationContent('lyndhurst');
  if (currentOffice.status === 404) {
    return {
      notFound: true,
    };
  }

  const seo = {
    title: 'Contact | Scarinci Hollenbeck',
    metaDescription:
      'Contact an attorney at Scarinci Hollenbeck, business law firm, at their offices in Lyndhurst NJ, New York City, Red Bank, Washington D.C.',
    canonicalUrl: `${SITE_URL}/contact`,
  };

  const site = {
    title: 'Contact Us',
    description:
      'Looking To Get In Touch With Someone At Scarinci Hollenbeck? Feel free to navigate to any one of our directory pages or fill out the form below.',
  };

  const offices = locations.offices.map(({
    id, title, address, phone, fax, slug,
  }) => ({
    id,
    title,
    address,
    phone,
    fax,
    slug,
  }));

  return {
    props: {
      offices,
      seo,
      site,
    },
  };
}
