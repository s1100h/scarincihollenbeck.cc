import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PracticeContent from 'components/singlepractice/content';
import PracticeLinks from 'components/singlepractice/links';
import RelatedAttorneys from 'components/singlepractice/related-attorneys';
import PracticeClientSlider from 'components/singlepractice/client-slider';
import ArticleHeroPractice from 'components/singlepractice/practice-article-hero';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import CovidResourceBox from 'components/singlepractice/covid-resource-box';
import PracticeSidebar from 'components/singlepractice/sidebar';
import SingleSubHeader from 'layouts/single-sub-header';
import { urlify } from 'utils/helpers';
import lineStyles from 'styles/LineHeader.module.css';
import textStyles from 'styles/Text.module.css';

export default function SinglePracticePage({
  corePractices,
  practice,
  practiceChildren,
  practiceUrl,
  canoncialUrl,
  handleLink,
  isEducation,
  isCrisisManagement,
  children,
}) {
  return (
    <>
      <NextSeo
        title={practice.seo.title}
        description={practice.seo.metaDescription}
        canonical={canoncialUrl}
      />
      <SingleSubHeader
        title={practice.title}
        subtitle={practice.description}
        offset={0}
        span={8}
        isTabs
      />
      <TabContainer id="nav-tab" defaultActiveKey="related-articles">
        <Container>
          <Row>
            <Col sm={12}>
              <PracticeLinks links={practice} practiceUrl={practiceUrl} />
            </Col>
            <Col sm={12} md={9}>
              <TabContent key="related-articles">{children}</TabContent>
              <div style={{ position: 'relative', bottom: '2.5em' }}>
                {practice.content.length > 0
                  && practice.content.map((item) => (
                    <TabContent key={item.title}>
                      <PracticeContent
                        tabTitle={urlify(item.title)}
                        title={item.title}
                        content={item.content}
                      />
                    </TabContent>
                  ))}
              </div>

              {practice.attorneyList.length > 0 && (
                <RelatedAttorneys
                  members={practice.attorneyList}
                  chair={practice.chair}
                  handleLink={handleLink}
                  title="Chair"
                />
              )}
              {practice.highlightReal.length > 0 && (
                <>
                  <div className={`${lineStyles.lineHeader} my-4`}>
                    <h3>Representative Clients</h3>
                  </div>
                  <PracticeClientSlider content={practice.highlightReal} />
                </>
              )}
              {practice.industryTopics.length > 0 && (
                <>
                  <div className={`${lineStyles.lineHeader} my-4`}>
                    <h3>Latest News & Articles</h3>
                  </div>
                  <ArticleHeroPractice
                    link={urlify(practiceUrl)}
                    content={practice.industryTopics}
                  />
                </>
              )}
            </Col>
            <Col sm={12} md={3} style={{ position: 'relative', bottom: '2.85em' }}>
              <SimpleSearch />
              <hr />
              {isEducation && (
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
              {isCrisisManagement && (
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
                  <PracticeSidebar
                    title="Related Practices"
                    content={practiceChildren}
                    tabKey={1}
                  />
                </>
              )}
            </Col>
          </Row>
        </Container>
      </TabContainer>
    </>
  );
}
