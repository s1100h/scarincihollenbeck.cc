import { useRouter } from 'next/router';
import AdministrationPage from 'components/pages/AdminDirectory';
import { headers } from 'utils/helpers';
import { BASE_API_URL, SITE_URL } from 'utils/constants';
import { archivesPageContent } from 'utils/api';

export default function Administration({ admins, seo, site }) {
  const router = useRouter();
  const canonicalUrl = `${SITE_URL}${router.asPath}`;
  const adminProps = {
    admins,
    seo,
    canonicalUrl,
    site,
  };
  return <AdministrationPage {...adminProps} />;
}

export async function getStaticProps() {
  const request = await fetch(`${BASE_API_URL}/wp-json/admin-search/admin`, {
    headers,
  })
    .then((data) => data.json())
    .catch((err) => err);
  const page = await archivesPageContent();
  const { title, seo, administrationArchive } = page;

  return {
    props: {
      seo,
      site: {
        title,
        description: administrationArchive.description,
      },
      admins: request.admins,
    },
    revalidate: 86400,
  };
}
