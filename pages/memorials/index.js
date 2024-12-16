import { useRouter } from 'next/router';
import { PRODUCTION_URL } from 'utils/constants';
import { fetchAPI } from 'requests/api';
import {
  memorialsPageContentQuery,
  memorialsQuery,
} from 'requests/graphql-queries';
import MemorialsPage from 'components/pages/MemorialsPage';

export async function getStaticProps() {
  const {
    pageBy: { title, seo, memoriam },
  } = await fetchAPI(memorialsPageContentQuery);
  const { memorials } = await fetchAPI(memorialsQuery);

  return {
    props: {
      seo,
      title,
      description: memoriam?.description,
      image: memoriam?.pageImage,
      memorials: memorials?.nodes,
    },
    revalidate: 86400,
  };
}

const Memorials = ({
  seo, title, description, image, memorials,
}) => {
  const { asPath } = useRouter();
  const canonicalUrl = `${PRODUCTION_URL}${asPath}`;

  const memorialsProps = {
    seo,
    title,
    description,
    image,
    memorials,
    canonicalUrl,
  };
  return <MemorialsPage {...memorialsProps} />;
};

export default Memorials;
