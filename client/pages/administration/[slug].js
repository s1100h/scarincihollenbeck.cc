import { useRouter } from 'next/router';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import Error from 'pages/_error';
import Footer from 'components/footer';
import ProfileImage from 'components/singleattorney/profile-image';
import InfoCard from 'components/singleattorney/info-card';
import SiteLoader from 'components/site-loader';
import MultiSubHeader from 'layouts/multi-sub-header';
import FullWidth from 'layouts/full-width';
import { createMarkup } from 'utils/helpers';
import client from 'utils/graphql-client';
import {
  singleAdministraionQuery,
  getAllAdministration,
} from 'queries/administration';
import lineStyles from 'styles/LineHeader.module.css'e;

export default function AdminSingleBio({ status, response }) {
  const router = useRouter();

  if (status === 404) {
    return <Error statusCode={404} />;
  }

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  const imageLarge = response.administration.featuredImage.mediaDetails.sizes.filter(
    (i) => i.name === 'large',
  );
  const imageThumb = response.administration.featuredImage.mediaDetails.sizes.filter(
    (i) => i.name === 'thumbnail',
  );
  const seoProfileImage = imageThumb[0];
  const profileImage = imageLarge[0];

  return (
    <>
      <NextSeo
        title={response.seo.title}
        description={response.seo.metaDesc}
        canonical={`https://scarincihollenbeck.com${response.uri}`}
        openGraph={{
          url: `https://scarincihollenbeck.com${response.uri}`,
          title: 'Scarinci Hollenbeck',
          description: response.seo.metaDesc,
          images: [
            {
              url: seoProfileImage.sourceUrl,
              width: seoProfileImage.width,
              height: seoProfileImage.height,
              alt: response.seo.title,
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: `https://scarincihollenbeck.com${response.uri}`,
          cardType: response.seo.metaDesc,
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name={response.administration.name}
        url={`https://scarincihollenbeck.com${response.uri}`}
        sameAs={[
          'https://twitter.com/S_H_Law',
          'https://www.facebook.com/ScarinciHollenbeck/',
          'https://www.linkedin.com/company/scarinci-hollenbeck-llc/',
        ]}
      />
      <div>
        <MultiSubHeader
          image="/images/Columns-1800x400-JPG.jpg"
          height="450px"
          isAdmin
          profile={(
            <ProfileImage
              image={response.administration.featuredImage.sourceUrl}
              name={response.administration.name}
              width={profileImage.width}
              height={profileImage.height}
            />
          )}
          infoCard={(
            <InfoCard
              email={response.administration.email}
              vizibility={response.administration.vizibility}
              fullName={response.administration.name}
              designation={response.administration.title}
              phoneNumber={`201-896-4100 ${response.administration.phoneExtension}`}
              socialMediaLinks={response.administration.socialMediaLinks}
              offices={response.administration.location}
            />
          )}
        />
        <FullWidth>
          <div>
            <div className={lineStyles.lineHeader}>
              <h3>Biography</h3>
            </div>
            <div className="w-100 my-5">
              <div
                dangerouslySetInnerHTML={createMarkup(
                  response.administration.biography,
                )}
              />
            </div>
          </div>
        </FullWidth>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const res = await client.query(getAllAdministration, {});

  return {
    paths:
      res.data.administrations.nodes.map((a) => `/administration/${a.slug}`)
      || [],
    fallback: false,
  };
}

export async function getStaticProps({ params, res }) {
  const administrationContent = await client.query(
    singleAdministraionQuery(params.slug),
    {},
  );
  let status = 200;

  if (!res && administrationContent.data.administrations.edges.length <= 0) {
    status = 404;

    return {
      props: {
        status,
        response: [],
      },
      notFound: true,
    };
  }

  return {
    props: {
      status,
      response: administrationContent.data.administrations.edges[0].node,
    },
    revalidate: 1,
  };
}
