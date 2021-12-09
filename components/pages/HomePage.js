import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import HomeBanner from 'components/organisms/home/banner';
import HomeHoneyCombSection from 'components/organisms/home/honey-comb-section';
import HomeMainTag from 'components/organisms/home/main-tag';
import HomeSiteHead from 'components/shared/head/HomeSiteHead';
import { sortByKey } from 'utils/helpers';
import styles from 'styles/Home.module.css';
import marginStyles from 'styles/Margins.module.css';
import { CURRENT_DOMAIN } from 'utils/constants';
import dynamic from 'next/dynamic';

const HomeLocations = dynamic(() => import('components/organisms/home/locations'));
const HomeOurLeadership = dynamic(() => import('components/organisms/home/our-leadership'));
const HomeReviews = dynamic(() => import('components/organisms/home/reviews'));
const HomeWhoWeAreSection = dynamic(() => import('components/organisms/home/who-we-are-section'));
const HomePageLink = dynamic(() => import('components/organisms/home/page-link'));
const ArticleHero = dynamic(() => import('components/shared/ArticleHero'));

export default function HomePage({
  seo, posts, locations, leadership, awards,
}) {
  return (
    <>
      <HomeSiteHead
        title={seo.title}
        metaDescription={seo.metaDescription}
        canonicalUrl={CURRENT_DOMAIN}
      />
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
        <HomeReviews awards={awards} />
        <HomePageLink link="/awards" title="Award Methodology" />
        <HomeLocations locations={sortByKey(locations.offices, 'id')} />
        <div className={marginStyles.mt6}>
          <ArticleHero content={posts} />
        </div>
        <HomePageLink
          link="/library/category/firm-news"
          title="Read more articles about our attorneys"
          margins="my-5"
        />
      </Container>
    </>
  );
}
