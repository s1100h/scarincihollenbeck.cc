import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import HomeBanner from 'components/home/banner';
import HomeHoneyCombSection from 'components/home/honey-comb-section';
import HomeLocations from 'components/home/locations';
import HomeMainTag from 'components/home/main-tag';
import HomeOurLeadership from 'components/home/our-leadership';
import HomeReviews from 'components/home/reviews';
import HomeWhoWeAreSection from 'components/home/who-we-are-section';
import HomePageLink from 'components/home/page-link';
import ArticleHero from 'components/article-hero';
import { sortByKey, headers } from 'utils/helpers';
import styles from 'styles/Home.module.css';
import marginStyles from 'styles/Margins.module.css';
import { buildBusinessSchema } from 'utils/json-ld-schemas';

export default function HomePageTwo({
  seo, posts, locations, leadership,
}) {
  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical="https://scarincihollenbeck.com/"
        openGraph={{
          type: 'website',
          url: 'https://scarincihollenbeck.com/',
          title: 'Scarinci Hollenbeck',
          description: seo.metaDescription,
          images: [
            {
              url: 'https://scarincihollenbeck.com/images/no-image-found-diamond.png',
              width: 300,
              height: 140,
              alt: 'Scarinci Hollenbeck',
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: 'https://scarincihollenbeck.com',
          cardType:
            'With a growing practice of more than 70+ experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm.',
        }}
      />
      <Head>
        <script
          key="ScarinciHollenbeck"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildBusinessSchema()),
          }}
        />
      </Head>
      <HomeBanner />
      <Container>
        <HomeMainTag />
        <HomeHoneyCombSection
          contentOne={(
            <Image
              src="/images/goalssh-400x400.png"
              alt="meet our attorneys"
              width={400}
              height={400}
              layout="intrinsic"
            />
          )}
          contentTwo={(
            <div className={`${styles.honeyCombContent} float-right`}>
              <p className={styles.honeycombTitle}>
                <strong>MEET OUR TEAM</strong>
              </p>
              <p>
                Our attorneys collaborate across the firm’s practice areas to achieve the best
                combination of knowledge, experience, and efficiency. We are dedicated to delivering
                outstanding client service.
              </p>
              <Link href="/attorneys">
                <a>Meet our attorneys</a>
              </Link>
            </div>
          )}
        />
        <HomeHoneyCombSection
          contentOne={(
            <div className={styles.honeyCombContent}>
              <p className={styles.honeycombTitle}>
                <strong>OUR SERVICES</strong>
              </p>
              <p>
                We help our clients achieve their goals by providing tailored services with the
                focused experience of a boutique firm by drawing upon the resources of the firm’s
                core practice areas.
              </p>
              <Link href="/practices">
                <a>See what we do</a>
              </Link>
            </div>
          )}
          contentTwo={(
            <div className="float-right">
              <Image
                src="/images/colabsh2-400x400.png"
                alt="meet our attorneys"
                width={400}
                height={400}
                layout="intrinsic"
              />
            </div>
          )}
        />
        <HomeWhoWeAreSection />
        <HomePageLink link="/firm-overview" title="More from our firm" />
        <HomeOurLeadership attorneys={leadership} />
        <HomeReviews />
        <HomePageLink link="/awards" title="Award Methodology" />
        <HomeLocations locations={sortByKey(locations.offices, 'id')} />
        <div className={marginStyles.mt6}>
          <ArticleHero content={posts} />
        </div>
        <HomePageLink
          link="/library?category=firm-news"
          title="Read more articles about our attorneys"
          margins="my-5"
        />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  /** Adding in graphql queries */
  const [seo, news, events, locations, attorneys, administration] = await Promise.all([
    fetch('https://wp.scarincihollenbeck.com/wp-json/front-page/meta', {
      headers,
    }).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/wp/v2/posts?categories=98&_embed', {
      headers,
    }).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/wp/v2/posts?categories=99&_embed', {
      headers,
    }).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/location-portal/offices', {
      headers,
    }).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/wp/v2/attorneys?per_page=100', {
      headers,
    }).then((data) => data.json()),
    fetch('https://wp.scarincihollenbeck.com/wp-json/wp/v2/administration?per_page=10', {
      headers,
    }).then((data) => data.json()),
  ]);

  const posts = [...news, ...events];
  const leadership = attorneys
    .filter((a) => a.acf.chair.length > 0)
    .filter((a) => a.acf.last_name !== 'Pepe')
    .filter((a) => a.acf.last_name !== 'Eynon')
    .map((leader) => ({
      name: leader.title.rendered,
      link: leader.link,
      lastName: leader.acf.last_name,
      image: leader.better_featured_image.source_url,
      title: leader.acf.chair
        .map((chair) => chair.post_title)
        .sort((a, b) => {
          if (a.title > b.title) {
            return 1;
          }

          return -1;
        }),
    }))
    .sort((a, b) => {
      if (a.lastName > b.lastName) {
        return 1;
      }

      return -1;
    });

  const donaldScarinci = attorneys
    .filter((a) => a.acf.designation === 'Managing Partner')
    .map((ds) => ({
      name: ds.title.rendered,
      link: ds.link,
      image: ds.better_featured_image.source_url,
      title: ['Firm Managing Partner'],
    }));

  const donPepe = attorneys
    .filter((a) => a.acf.designation === 'Red Bank, NJ Managing Partner')
    .map((ds) => ({
      name: ds.title.rendered,
      link: ds.link,
      image: ds.better_featured_image.source_url,
      title: ['Red Bank, NJ Office Managing Partner'],
    }));

  const howardBader = attorneys
    .filter((a) => a.acf.designation === 'NYC Managing Partner')
    .map((ds) => ({
      name: ds.title.rendered,
      link: ds.link,
      image: ds.better_featured_image.source_url,
      title: ['NYC Office Managing Partner'],
    }));

  const teddyEnynon = attorneys
    .filter((a) => a.acf.designation === 'Washington, D.C. Managing Partner')
    .map((ds) => ({
      name: ds.title.rendered.replace(/&#8220;/g, '"').replace(/&#8221;/g, '"'),
      link: ds.link,
      image: ds.better_featured_image.source_url,
      title: ['Washington, D.C. Office Managing Partner'],
    }));

  const katerinTraugh = administration
    .filter((a) => a.acf.Title === 'Executive Director')
    .map((ks) => ({
      name: ks.title.rendered,
      link: ks.link,
      image: ks.better_featured_image.source_url,
      title: ['Executive Director'],
    }));
  return {
    props: {
      seo,
      posts: posts.splice(0, 5),
      locations,
      leadership: [
        ...katerinTraugh,
        ...donaldScarinci,
        ...donPepe,
        ...howardBader,
        ...teddyEnynon,
        ...leadership,
      ],
    },
    revalidate: 1,
  };
}
