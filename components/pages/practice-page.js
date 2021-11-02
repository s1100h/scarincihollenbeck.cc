import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PracticeContent from 'components/organisms/practice/content';
import PracticeLinks from 'components/organisms/practice/links';
import RelatedAttorneys from 'components/organisms/practice/related-attorneys';
import PracticeClientSlider from 'components/organisms/practice/client-slider';
import ArticleHeroPractice from 'components/organisms/practice/practice-article-hero';
import PracticeArticles from 'components/organisms/practice/articles';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import CovidResourceBox from 'components/organisms/practice/covid-resource-box';
import PracticeSidebar from 'components/organisms/practice/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import lineStyles from 'styles/LineHeader.module.css';
import textStyles from 'styles/Text.module.css';
import { SITE_URL } from 'utils/constants';
import { buildBusinessSchema } from 'utils/json-ld-schemas';

export default function PracticePage({
  corePractices,
  practice,
  practiceChildren,
  canoncialUrl,
  body,
  slug,
  type,
  articleLoading = false,
}) {
  const router = useRouter();

  function handleLink(e) {
    router.push(e.target.value);
  }

  return (
    <>
      <NextSeo
        title={practice.seo.title}
        description={practice.seo.metaDescription}
        canonical={canoncialUrl}
        openGraph={{
          type: 'website',
          url: canoncialUrl,
          title: practice.seo.title,
          description: practice.seo.metaDescription,
          images: [
            {
              url: `${SITE_URL}/images/no-image-found-diamond.png`,
              width: 300,
              height: 140,
              alt: practice.seo.title,
            },
          ],
          site_name: canoncialUrl,
        }}
        twitter={{
          handle: '@S_H_Law',
          site: canoncialUrl,
          cardType: practice.seo.metaDescription,
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
      <SingleSubHeader
        title={practice.title}
        subtitle={practice.description}
        offset={0}
        span={8}
        isTabs
      />
      <Container>
        <Row>
          <Col sm={12}>
            <PracticeLinks links={practice} practiceUrl={slug} />
          </Col>
          <Col sm={12} md={9} style={{ position: 'relative', bottom: '2.5em' }}>
            {type !== 'articles' ? (
              <PracticeContent title={body.title} content={body.content} />
            ) : (
              <PracticeArticles
                initalArticles={body.content}
                title={body.title}
                articleLoading={articleLoading}
              />
            )}

            {practice.attorneyList.length > 0 && (
              <RelatedAttorneys
                members={practice.attorneyList}
                chair={practice.chair}
                handleLink={handleLink}
                title="Chair"
              />
            )}

            {practice.highlightReal.length > 0 && (
              <div className="mt-5">
                <div className={`${lineStyles.lineHeader} my-4`}>
                  <h3>Representative Clients</h3>
                </div>
                <PracticeClientSlider content={practice.highlightReal} />
              </div>
            )}
            <div className="mt-5">
              <div className={`${lineStyles.lineHeader} my-4`}>
                <h3>Latest News & Articles</h3>
              </div>
              <ArticleHeroPractice link={slug} blogId={practice.blogId} />
            </div>
          </Col>
          <Col sm={12} md={3} style={{ position: 'relative', bottom: '2.85em' }}>
            {router.query.slug === 'education-law' && (
              <>
                <div>
                  <div className="mx-auto d-block">
                    <Image
                      src="/images/1593501004logo-250x250.png"
                      width={200}
                      height={200}
                      alt="NJSBA 2020 event"
                    />
                  </div>
                  <h5>
                    <Link
                      href="https://virtualworkshop.njsba.org/en/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <a className={textStyles.redTitle}>
                        <strong>
                          <u>Visit our booth</u>
                        </strong>
                      </a>
                    </Link>
                  </h5>
                  <hr />
                </div>
                <CovidResourceBox
                  title="COVID-19 Response Team"
                  link="/government-education-covid-19-response-team"
                  message="Learn more about the Government & Education Law Practice's COVID-19 focused response team."
                />
                <hr />
              </>
            )}
            {router.query.slug === 'crisis-risk-management' && (
              <>
                <CovidResourceBox
                  title="COVID-19 Crisis Management Unit"
                  link="/covid-19-crisis-management-unit"
                  message="Learn more about the Crisis & Risk Management Law Practice's COVID-19 Strategic Response Unit."
                />
                <hr />
              </>
            )}
            <SubscriptionMessage />
            <hr />
            <PracticeSidebar title="Core Practices" content={corePractices} tabKey={2} />
            {practiceChildren.length > 0 && (
              <>
                <hr />
                <PracticeSidebar title="Related Practices" content={practiceChildren} tabKey={1} />
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
