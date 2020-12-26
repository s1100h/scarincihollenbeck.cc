{
  router.isFallback ? (
    <Container>
      <Row
        id="page-loader-container"
        className="justify-content-center align-self-center"
      >
        <BarLoader color="#DB2220" />
      </Row>
    </Container>
  ) : (
    <>
      <NextSeo
        title={practice.seo.title}
        description={practice.seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${practice.seo.canonicalLink}`}
      />
      <SingleSubHeader
        image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/City-Night-Background-1800x400-JPG.jpg"
        title={practice.title}
        subtitle={practice.description}
      />
      <div id="single-practice">
        <TabContainer
          className="mb--1"
          id="nav-tab"
          defaultActiveKey={urlify(practice.content[0].title)}
        >
          <Container>
            <Row>
              <Col sm={12}>
                <Nav id="practice-navigation">
                  {practice.content.length > 0
                    && practice.content.map((item) => (
                      <Nav.Link
                        eventKey={urlify(item.title)}
                        className="main-tab"
                        key={item.title}
                      >
                        {item.title}
                      </Nav.Link>
                    ))}
                  {practice.practicesIncluded.relatedBlogCategory[0].posts.nodes
                    .length > 0 && (
                    <Nav.Link
                      eventKey="related-updates"
                      className={tabStyle.tab}
                    >
                      Related Updates
                    </Nav.Link>
                  )}
                </Nav>
              </Col>
              <Col sm={12} md={9} className="mt-4">
                {practice.practicesIncluded.contentSection.length > 0
                  && practice.practicesIncluded.contentSection.map((item) => (
                    <TabContent key={item.title}>
                      <PracticeContent
                        tabTitle={urlify(item.title)}
                        title={item.title}
                        content={item.content}
                      />
                    </TabContent>
                  ))}
                {practice.practicesIncluded.relatedBlogCategory[0].posts.nodes
                  .length > 0 && (
                  <TabContent>
                    <RelatedArticlesTab
                      tabTitle="related-updates"
                      title="Related Updates"
                      content={
                        practice.practicesIncluded.relatedBlogCategory[0].posts
                          .nodes
                      }
                    />
                  </TabContent>
                )}
                {/* Related Articles tab */}
                {/* Attorney list */}
                <RelatedAttorneys
                  members={practice.attorneyList}
                  chair={practice.chair}
                  handleLink={handleLink}
                  title="Chair"
                />
                {/** Awards */}
                {practice.highlightReal.length > 0 && (
                  <>
                    {/* <LineHeading title="Represenative Clients" /> */}
                    <FeaturedSlider content={practice.highlightReal} />
                  </>
                )}
                {/** Recent Blog Articles */}
                {practice.industryTopics.length > 0 && (
                  <div className="w-100 d-block">
                    {/* <LineHeading title="Latest News & Articles" /> */}
                    <FeaturedSlider content={practice.industryTopics} />
                  </div>
                )}
              </Col>
              <Col sm={12} md={3}>
                {router.query.slug === 'education-law' && (
                  <>
                    <div>
                      <img
                        src="/images/1593501004logo-250x250.png"
                        alt="NJSBA 2020 event"
                        className="mt-sm-4 mt-lg-0 mx-auto mb-4 d-block"
                      />
                      <a
                        type="button"
                        className="mx-auto mb-5 p-2 d-block w-75 text-center border-r-5 mb-3 ft-14px btn btn-danger"
                        href="https://virtualworkshop.njsba.org/en/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Visit Our Booth
                      </a>
                    </div>
                    <CovidResourceBox
                      title="COVID-19 Response Team"
                      link="/government-education-covid-19-response-team"
                      message="Learn more about the Government & Education Law Practice's COVID-19 focused response team."
                    />
                  </>
                )}
                {router.query.slug === 'crisis-risk-management' && (
                  <>
                    <CovidResourceBox
                      title="COVID-19 Crisis Management Unit"
                      link="/covid-19-crisis-management-unit"
                      message="Learn more about the Crisis & Risk Management Law Practice's COVID-19 Strategic Response Unit."
                    />
                  </>
                )}
                <SimpleSearch />
                <SubscriptionMessage />
                <SidebarContent
                  title="Core Practices"
                  content={corePractices}
                  tabKey={2}
                />
                <SidebarContent
                  title="Related Sub-Practices"
                  content={practice.practiceList}
                  tabKey={1}
                />
              </Col>
            </Row>
          </Container>
        </TabContainer>
      </div>
      <Footer />
    </>
  );
}
