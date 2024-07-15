import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { buildLocationSchema } from 'utils/json-ld-schemas';
import { ATTORNEYS_FAQ, locationInfoBlockArticles } from 'utils/constants';
import dynamic from 'next/dynamic';
import Map from 'components/molecules/location/Map';
import { useEffect, useMemo, useState } from 'react';
import empty from 'is-empty';
import { sanitizePracticesByChildren, sortByKey } from '../../utils/helpers';
import {
  LocationPageContainer,
  OfficeLocationBoxTitle,
} from '../../styles/Locations.style';
import DefaultSubHeaderNew from '../../layouts/SubHeader/DefaultSubHeaderNew';
import PracticeAnchors from '../organisms/practices/PracticeAnchors';
import GetInTouchForm from '../organisms/practices/GetInTouchForm';
import InfoBlockLocation from '../organisms/location/InfoBlockLocation';
import WhyChooseUs from '../organisms/practices/WhyChooseUs';
import GoogleReviews from '../organisms/common/GoogleReviews';
import DirectionsFilesLink from '../common/DirectionsFilesLink';

const PracticeAttorneys = dynamic(() => import('components/organisms/practices/PracticeAttorneys'));
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
  howCanWeHelp: {
    id: 'how-can-we-help',
    title: 'How can we help?',
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

  const [articles, setArticles] = useState();
  const practicesSorted = sanitizePracticesByChildren(
    currentOffice.officePractices,
  );

  const addressInfo = {
    phone: currentOffice.phone,
    fax: currentOffice.fax,
    streetAddress: currentOffice.streetAddress,
    floor: currentOffice.floor,
    addressRegion: currentOffice.addressRegion,
    postCode: currentOffice.postCode,
    addressLocality: currentOffice.addressLocality,
  };

  useEffect(() => {
    const clearId = setTimeout(() => {
      setArticles(locationInfoBlockArticles);
    }, 100);
    return () => clearTimeout(clearId);
  }, []);

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
            __html: JSON.stringify(
              buildLocationSchema(seo, currentOffice.mapLink),
            ),
          }}
        />
      </Head>
      <DefaultSubHeaderNew
        title={currentOffice.title}
        subtitle={seo.metaDesc}
        backgroundImage={currentOffice.featuredImage}
        officeInfo={addressInfo}
        locations={locations}
      />
      <PracticeAnchors anchorData={anchorData} title={currentOffice.title} />
      <LocationPageContainer className="mt-5">
        <Row className="row-content">
          <Col xs={11} sm={11} md={11} lg={8} xl={8}>
            <OfficeLocationBoxTitle>
              {changeTitle(currentOffice.title)}
            </OfficeLocationBoxTitle>
            <Map
              title={currentOffice.title}
              map={currentOffice.mapLink}
              anchorIdMap={anchorData.map.id}
              height={600}
            />
            <DirectionsFilesLink currentOffice={currentOffice} />
            <FAQ
              anchorId={anchorData.faq.id}
              faqArrContent={ATTORNEYS_FAQ}
              faqData={currentOffice.faq}
            />
          </Col>
          <Col className="form-column" xs={1} sm={1} md={1} lg={4} xl={4}>
            <GetInTouchForm />
          </Col>
        </Row>
        {!empty(articles) && (
          <InfoBlockLocation
            anchorData={anchorData.howCanWeHelp.id}
            articles={articles}
            practices={practicesSorted}
          />
        )}
      </LocationPageContainer>
      {!empty(currentOffice?.attorneys) && (
        <PracticeAttorneys
          anchorId={anchorData.attorneys.id}
          attorneys={sortByKey(currentOffice.attorneys, 'lastName')}
        />
      )}
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
