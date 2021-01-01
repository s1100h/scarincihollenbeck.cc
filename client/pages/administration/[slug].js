import { useRouter } from 'next/router';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import Footer from 'components/footer';
import ProfileImage from 'components/singleattorney/profile-image';
import InfoCard from 'components/singleattorney/info-card';
import SiteLoader from 'components/site-loader';
import MultiSubHeader from 'layouts/multi-sub-header';
import FullWidth from 'layouts/full-width';
import { createMarkup, headers } from 'utils/helpers';
import lineStyles from 'styles/LineHeader.module.css';

export default function AdminSingleBio({ response }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="my-5 py-5">
        <SiteLoader />
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title={response.seo.title}
        description={response.seo.metaDescription}
        canonical={`https://scarincihollenbeck.com${response.seo.canonicalLink}`}
        openGraph={{
          url: `https://scarincihollenbeck.com${response.seo.canonicalLink}`,
          title: 'Scarinci Hollenbeck',
          description: response.seo.metaDescription,
          images: [
            {
              url: response.seo.featuredImg,
              width: 743,
              height: 795,
              alt: response.seo.title,
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: `https://scarincihollenbeck.com${response.seo.canonicalLink}`,
          cardType: response.seo.metaDescription,
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name={response.name}
        url={`https://scarincihollenbeck.com${response.seo.canonicalLink}`}
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
              image={response.image.url}
              name={response.name}
            />
          )}
          infoCard={(
            <InfoCard
              email={response.email}
              vizibility={response.vizibility}
              fullName={response.name}
              designation={response.Title}
              phoneNumber={`201-896-4100 ${response.phoneExtension}`}
              socialMediaLinks={response.socialMediaLinks}
              offices={response.offices}
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
                  response.biography,
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
  const [res] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/admin-search/admin',
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    paths: res.admins.map((a) => a.link) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [bio] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/individual-admin/admin/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  if (JSON.stringify(bio) === '{}') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      response: bio,
    },
    revalidate: 1,
  };
}
