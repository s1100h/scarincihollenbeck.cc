import { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import RelatedAttorneys from 'components/organisms/practice/related-attorneys';
import PracticeClientSlider from 'components/organisms/practice/client-slider';
import ArticleHeroPractice from 'components/organisms/practice/practice-article-hero';
import ArticleArchives from 'components/organisms/library/article-archives';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import CovidResourceBox from 'components/organisms/practice/covid-resource-box';
import PracticeSidebar from 'components/organisms/practice/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import lineStyles from 'styles/LineHeader.module.css';
import textStyles from 'styles/Text.module.css';
import { SITE_URL, BASE_API_URL } from 'utils/constants';
import { buildBusinessSchema } from 'utils/json-ld-schemas';
import { createMarkup } from 'utils/helpers';
import pageContentStyles from 'styles/PageContent.module.css';

const Tab = styled.button`
  border: 0;
  outline: 0;
  margin-right: 8px;
  width: 200px;
  text-align: center;
  max-width: 210px;
  font-size: 1rem;
  color: #fff;
  padding: 0.5rem 1rem;
  background: linear-gradient(1turn, rgba(144, 25, 24, 0.9) 60%, rgba(221, 38, 36, 0.9)), #333;
  max-height: 42px;
  ${({ active }) => active
    && `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MobileGroup = styled.div`
  display: inherit;
  @media (min-width: 768px) {
    display: none;
  }
`;

const DropDownContainer = styled.div`
  background-color: #e9e9e9;
  position: absolute;
  min-width: 400px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  z-index: 99;
`;

const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export default function PracticePage({
  corePractices,
  practice,
  practiceChildren,
  canoncialUrl,
  tabs,
  slug,
}) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeTabContent, setActiveTabContent] = useState(tabs[0].content);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const blogId = practice.blog_data_id[0];
  const archiveUrl = `${BASE_API_URL}/wp-json/wp/v2/posts/?categories=${blogId}`;
  useEffect(() => {
    const currentTabContent = tabs.filter((t) => t.id === activeTab);
    setActiveTabContent(currentTabContent[0].content);
  }, [activeTab]);

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
          <Col sm={12} lg={9} style={{ position: 'relative', top: '-66px' }}>
            <ButtonGroup>
              {tabs.map((tab) => (
                <Tab
                  key={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </Tab>
              ))}
            </ButtonGroup>
            <MobileGroup>
              <Tab onClick={() => setToggleDropDown(!toggleDropDown)}>Menu Options</Tab>
              {toggleDropDown && (
                <DropDownContainer>
                  <DropDownList>
                    {tabs.map((tab) => (
                      <Button
                        variant="link"
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setToggleDropDown(false);
                        }}
                        className="text-dark text-left py-3 border-bottom"
                      >
                        {tab.title}
                      </Button>
                    ))}
                  </DropDownList>
                </DropDownContainer>
              )}
            </MobileGroup>
            <div
              className={`${pageContentStyles.p} mt-4`}
              dangerouslySetInnerHTML={createMarkup(activeTabContent)}
            />
            {activeTab === 99 && <ArticleArchives title="" url={archiveUrl} />}
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
              <ArticleHeroPractice link={slug} blogId={blogId} />
            </div>
          </Col>
          <Col sm={12} lg={3} style={{ position: 'relative', bottom: '24px' }}>
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

      {/* <Container>
        <Row>
          <Col sm={12}>
            <PracticeLinks links={practice} practiceUrl={slug} />
          </Col>
          <Col sm={12} md={9} style={{ position: 'relative', bottom: '2.5em' }}>
            {type !== 'articles' ? (
              <PracticeContent title={body.title} content={body.content} />
            ) : (
              <ArticleArchives url={body.url} title={body.title} />
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
      </Container> */}
    </>
  );
}
