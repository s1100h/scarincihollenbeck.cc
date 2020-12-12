import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import LargeSidebar from 'layouts/large-sidebar';
import SingleCareerBreadCrumbs from 'components/singlecareer/breadcrumbs';
import SingleCareerBody from 'components/singlecareer/body';
import SingleCareerSidebar from 'components/singlecareer/sidebar';
import { getAllCareers, getSingleCareer } from 'queries/careers';
import client from 'utils/graphql-client';

export default function CareersPost({ career }) {
  return (
    <>
      <NextSeo
        title={career.seo.title}
        description={career.seo.metaDesc}
        canonical={`http://scarincihollenbeck.com${career.uri}`}
      />
      <SingleSubHeader
        image="/images/Legal-Research-1800x400-JPG.jpg"
        title={career.title}
        subtitle=" Our commitment to diversity and equal opportunity enables Scarinci Hollenbeck to recruit, retain, and promote the best attorneys."
      />
      <LargeSidebar
        body={(
          <>
            <SingleCareerBreadCrumbs title={career.title} />
            <SingleCareerBody
              title={career.title}
              position={career.careerFields.positionDescription}
              contact={career.careerFields.contact}
            />
          </>
        )}
        sidebar={<SingleCareerSidebar />}
      />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const res = await client.query(getAllCareers, {});

  return {
    paths: res.data.careers.nodes.map((c) => `/careers/${c.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const careerContent = await client.query(
    getSingleCareer(params.slug),
    {},
  );

  if (careerContent.data.careers.nodes.length <= 0) {
    return {
      props: {
        career: [],
      },
      notFound: true,
    };
  }

  return {
    props: {
      career: careerContent.data.careers.nodes[0],
    },
    revalidate: 1,
  };
}
