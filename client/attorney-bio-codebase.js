<NextSeo
        title={bioT.seo.title}
        description={bioT.seo.metaDesc}
        canonical={`https://scarincihollenbeck.com${bioT.uri}`}
        openGraph={{
          url: `https://scarincihollenbeck.com${bioT.uri}`,
          title: 'Scarinci Hollenbeck',
          description: bioT.seo.metaDesc,
          images: [
            {
              url: bioT.attorneyMainInformation.profileImage.sourceUrl,
              width: 200,
              height: 220,
              alt: bioT.seo.title,
            },
          ],
          site_name: 'Scarinci Hollenbeck',
        }}
        twitter={{
          handle: '@S_H_Law',
          site: `https://scarincihollenbeck.com${bioT.uri}`,
          cardType: bioT.seo.metaDesc,
        }}
        />
        <Head>
        <script
        key="ScarinciHollenbeck"
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBusinessSchema()) }}
        />
        <script
        key="ScarinciHollenbeck Bio Profile"
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildAttorneyProfileSchema(
          bioT.title,
          `https://scarincihollenbeck.com/${bioT.uri}`,
          bioT.attorneyMainInformation.profileImage.sourceUrl,
          bioT.attorneyMainInformation.socialMediaLinks,
          bioT.attorneyMainInformation.designation))
        }}
        />
        </Head> 
        <div id="single-attorney">
       
        <TabContainer className="mb--1" id="nav-tab" defaultActiveKey="biography">
          <Container>
            <Row>
              <Col sm={12}>
                <Nav>
                  <Nav.Link eventKey="biography" className="main-tab">Biography</Nav.Link>
                  { (bioT.attorneyRepresentativeMatters.repMatters !== null) && <Nav.Link eventKey="representative-matters" className="main-tab">Representative Matters</Nav.Link> }
                  { (bioT.attorneyRepresentativeClients.repClients !== null) && <Nav.Link eventKey="represntative-clients" className="main-tab">Representative Clients</Nav.Link> }
                  { (bio.presentations) && <Nav.Link eventKey="presentations" className="main-tab">Presentations</Nav.Link> }
                  { (bio.publications) && <Nav.Link eventKey="publications" className="main-tab">Publications</Nav.Link> }
                  { (bio.media) && <Nav.Link eventKey="media" className="main-tab">Media</Nav.Link> }
                  { (bio.blogPosts.length > 0) && <Nav.Link eventKey="blogs" className="main-tab">Articles</Nav.Link>}
                  { (firmNewsAndEventsArr.length > 0) && <Nav.Link eventKey="newsevents" className="main-tab">News &amp; Events</Nav.Link> }
                  { (bio.videos) && <Nav.Link eventKey="videos" className="main-tab">Videos</Nav.Link> }
                  {(tabs.tabHeader1 !== null) && <Nav.Link key={tabs.tabHeader1} eventKey={tabs.tabHeader1} className="main-tab">{tabs.tabHeader1}</Nav.Link>}
                  {(tabs.tabHeader2 !== null) && <Nav.Link key={tabs.tabHeader2} eventKey={tabs.tabHeader2} className="main-tab">{tabs.tabHeader2}</Nav.Link>}
                  {(tabs.tabHeader3 !== null) && <Nav.Link key={tabs.tabHeader3} eventKey={tabs.tabHeader3} className="main-tab">{tabs.tabHeader3}</Nav.Link>}
                  {(tabs.tabHeader4 !== null) && <Nav.Link key={tabs.tabHeader4} eventKey={tabs.tabHeader4} className="main-tab">{tabs.tabHeader4}</Nav.Link>}
                </Nav>
              </Col>
              <Col sm={12} md={9} className="mt-4">
                <TabContent>
                  <Biography tabTitle="biography" title="Biography" content={bio.biography} />
                </TabContent>
                {(bioT.attorneyRepresentativeMatters.repMatters !== null) && (
                  <TabContent>
                    <Matters
                      tabTitle="representative-matters"
                      title="Representative Matters"
                      content={bioT.attorneyRepresentativeMatters.repMatters}
                    />
                  </TabContent>
                )}
                {(bioT.attorneyRepresentativeClients.repClients !== null) && (
                  <TabContent>
                    <Matters
                      tabTitle="representative-clients"
                      title="Representative Clients"
                      content={bioT.attorneyRepresentativeClients.repClients}
                    />
                  </TabContent>
                )}
                {(bio.presentations) && (
                  <TabContent>
                    <TableTab
                      tabTitle="presentations"
                      title="Presentations"
                      content={bio.presentations}
                    />
                  </TabContent>
                )}
                {(bio.publications) && (
                  <TabContent>
                    <TableTab
                      tabTitle="publications"
                      title="Publications"
                      content={bio.publications}
                    />
                  </TabContent>
                )}
                {(bio.media) && (
                  <TabContent>
                    <TableTab
                      tabTitle="media"
                      title="Media"
                      content={bio.media}
                    />
                  </TabContent>
                )}
                {(bio.blogPosts.length > 0) && (
                  <Nav.Link
                    eventKey="blogs"
                    className="main-tab">
                      Articles
                  </Nav.Link>
                )}
                {(firmNewsAndEventsArr.length > 0) && (
                  <TabContent>
                    <Articles tabTitle="newsevents" title="News &amp; Events" content={firmNewsAndEventsArr} />
                  </TabContent>
                )}
                {(bioT.attorneyAwardsClientsBlogsVideos.attorneyVideos) && (
                  <TabContent>
                    <VideoTab
                      title="Videos"
                      content={bioT.attorneyAwardsClientsBlogsVideos.attorneyVideos}
                      tabTitle="videos"
                    />
                  </TabContent>
                )}
              {(tabs.tabContent1 !== null) && <BasicContent title={tabs.tabHeader1} content={tabs.tabContent1} tabTitle={tabs.tabHeader1} />} 
              {(tabs.tabContent2 !== null) && <BasicContent title={tabs.tabHeader2} content={tabs.tabContent2} tabTitle={tabs.tabHeader2} />} 
              {(tabs.tabContent3 !== null) && <BasicContent title={tabs.tabHeader3} content={tabs.tabContent3} tabTitle={tabs.tabHeader3} />} 
              {(tabs.tabContent1 !== null) && <BasicContent title={tabs.tabHeader4} content={tabs.tabContent4} tabTitle={tabs.tabHeader4} />} 

                {/* { (bio.clients) && (bio.clients.length > 0) && <FeaturedSlider content={bio.clients} title="Clients" />}
                { (bio.awards) && (bio.awards.length > 0) && <FeaturedSlider content={bio.awards} title="Awards" />} */}
                { (firmNewsAndEventsArr.length > 0) && <RelatedArticles title="News & Events" content={firmNewsAndEventsArr} /> }
                { (bio.blogPosts) && (bio.blogPosts.length > 0) && <NonGraphQLSlider title="Recent Articles" content={sortByDateKey(bio.blogPosts, 'date')} />}
              </Col>
              <Col sm={12} md={3} className="mt-4">
                <SidebarContent
                  title="Related Practices"
                  content={bio.relatedPractices}
                  itemKey={2}
                />
                <br />
                <SidebarContent
                  title="Additional Information"
                  content={bio.sidebar}
                  itemKey={1}
                />
              </Col>
            </Row>
          </Container>
        </TabContainer>
       </div>
      <Footer />