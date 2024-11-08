import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { buildLocationSchema } from 'utils/json-ld-schemas';
import dynamic from 'next/dynamic';
import Map from 'components/molecules/location/Map';
import { useMemo } from 'react';
import empty from 'is-empty';
import { ContainerDefault } from 'styles/Containers.style';
import SplitInfo from 'components/common/SplitInfo';
import { sortByKey } from '../../utils/helpers';
import {
  LocationPageContainer,
  OfficeLocationBoxTitle,
} from '../../styles/Locations.style';
import SubHeaderDefault from '../../layouts/SubHeader/SubHeaderDefault';
import PracticeAnchors from '../organisms/practices/PracticeAnchors';

const PracticeAttorneys = dynamic(() => import('components/organisms/practices/PracticeAttorneys'));
const GetInTouchForm = dynamic(() => import('../organisms/practices/GetInTouchForm'));
const DirectionsFilesLink = dynamic(() => import('../common/DirectionsFilesLink'));
const WhatWeDoSection = dynamic(() => import('../organisms/home/WhatWeDoSection'));
const WhyChooseUs = dynamic(() => import('../organisms/practices/WhyChooseUs'));
const GoogleReviews = dynamic(() => import('../organisms/common/GoogleReviews'));
const FAQ = dynamic(() => import('../atoms/FAQ'));

const changeTitle = (title) => title.replace(/(^|\s+)Lawyers(\s+|$)/g, ' ');

const anchorLocationsData = {
  map: {
    id: 'map',
    title: 'Map',
  },
  faq: {
    id: 'faq-section',
    title: 'FAQs',
  },
  whatWeDo: {
    id: 'What-we-do',
    title: 'What we do',
  },
  attorneys: {
    id: 'attorneys-section',
    title: 'Attorneys',
  },
  whyChooseUs: {
    id: 'why-choose-us-section',
    title: 'Why choose us',
  },
  reviews: {
    id: 'reviews',
    title: 'Reviews',
  },
};

const LocationPage = ({
  seo,
  currentOffice,
  attorneysSchemaData,
  canonicalUrl,
  locations,
  googleReviews,
}) => {
  const anchorData = useMemo(() => {
    if (empty(googleReviews)) {
      delete anchorLocationsData.reviews;
    }
    return anchorLocationsData;
  }, [googleReviews]);

  const addressInfo = {
    phone: currentOffice.phone,
    fax: currentOffice.fax,
    streetAddress: currentOffice.streetAddress,
    floor: currentOffice.floor,
    addressRegion: currentOffice.addressRegion,
    postCode: currentOffice.postCode,
    addressLocality: currentOffice.addressLocality,
  };

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDesc}
        canonicalUrl={canonicalUrl}
        personDataForSchema={attorneysSchemaData}
      />
      <Head>
        <script
          key={currentOffice.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildLocationSchema(seo)),
          }}
        />
      </Head>
      <SubHeaderDefault
        title={currentOffice.title}
        subtitle={seo.metaDesc}
        backgroundImage={currentOffice.featuredImage}
        officeInfo={addressInfo}
        locations={locations}
      />
      <PracticeAnchors anchorData={anchorData} title={currentOffice.title} />
      <LocationPageContainer className="mt-5">
        <ContainerDefault>
          <Row className="row-content">
            <Col className="map-column" xs={11} sm={11} md={11} lg={8} xl={8}>
              <OfficeLocationBoxTitle>
                {changeTitle(currentOffice.title)}
              </OfficeLocationBoxTitle>
              <Map
                title={currentOffice.title}
                map={currentOffice?.mapAddress}
                anchorIdMap={anchorData.map.id}
                height={600}
              />
              <DirectionsFilesLink currentOffice={currentOffice} />
              <FAQ
                anchorId={anchorData.faq.id}
                faqArrContent={currentOffice.faq}
              />
            </Col>
            <Col className="form-column" xs={1} sm={1} md={1} lg={4} xl={4}>
              <GetInTouchForm />
            </Col>
          </Row>
        </ContainerDefault>
      </LocationPageContainer>
      {!empty(currentOffice?.attorneys) && (
        <PracticeAttorneys
          anchorId={anchorData.attorneys.id}
          attorneys={sortByKey(currentOffice.attorneys, 'lastName')}
        />
      )}
      <SplitInfo />
      <WhatWeDoSection anchorId={anchorLocationsData.whatWeDo.id} />
      <WhyChooseUs anchorId={anchorData.whyChooseUs.id} />
      {!empty(googleReviews) && (
        <GoogleReviews
          reviews={googleReviews}
          anchorId={anchorData?.reviews?.id}
        />
      )}
    </>
  );
};

export default LocationPage;
