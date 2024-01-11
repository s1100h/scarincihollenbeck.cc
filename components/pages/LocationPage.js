import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { buildLocationSchema } from 'utils/json-ld-schemas';
import { ATTORNEYS_FAQ, locationInfoBlockArticles } from 'utils/constants';
import dynamic from 'next/dynamic';
import Map from 'components/molecules/location/Map';
import { BsDownload } from 'react-icons/bs';
import { useState } from 'react';
import { sanitizePracticesByChildren, sortByKey } from '../../utils/helpers';
import {
  DownloadTheMap,
  LinkMapBox,
  LocationPageContainer,
  MediaBr,
  OfficeLocationBoxTitle,
} from '../../styles/Locations.style';
import { LocationListPracticeArticle } from '../../utils/articles-content';
import DefaultSubHeaderNew from '../../layouts/SubHeader/DefaultSubHeaderNew';
import PracticeAnchors from '../organisms/practices/PracticeAnchors';
import GetInTouchForm from '../organisms/practices/GetInTouchForm';
import InfoBlockLocation from '../organisms/location/InfoBlockLocation';
import WhyChooseUs from '../organisms/practices/WhyChooseUs';

const PracticeAttorneys = dynamic(() => import('components/organisms/practices/PracticeAttorneys'));
const BlockListWrapper = dynamic(() => import('../organisms/practices/ListWrapper'));
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
}) => {
  const [anchorData] = useState(anchorLocationsData);
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
      <LocationPageContainer className="mb-5 mt-5">
        <OfficeLocationBoxTitle>
          {changeTitle(currentOffice.title)}
        </OfficeLocationBoxTitle>
        <Row>
          <Col sm={12} lg={9}>
            <Map
              title={currentOffice.title}
              map={currentOffice.mapLink}
              anchorIdMap={anchorData.map.id}
              height={600}
            />
            {(currentOffice.autoMap?.length > 0
              || currentOffice.trainStationsMap?.length > 0) && (
              <LinkMapBox>
                {currentOffice?.trainStationsMap.length > 0 && (
                  <DownloadTheMap
                    href={currentOffice.trainStationsMap}
                    target="_blank"
                    download
                  >
                    NJ Transit Rail System Map
                    <BsDownload />
                  </DownloadTheMap>
                )}
                {currentOffice?.autoMap.length > 0 && (
                  <DownloadTheMap
                    href={currentOffice.autoMap}
                    target="_blank"
                    download
                  >
                    Directions to the Overlook
                    {' '}
                    <MediaBr />
                    Corporate Center
                    <BsDownload />
                  </DownloadTheMap>
                )}
              </LinkMapBox>
            )}
            <FAQ faqArrContent={ATTORNEYS_FAQ} />
          </Col>
          <Col sm={12} lg={3}>
            <GetInTouchForm />
          </Col>
          <InfoBlockLocation
            articles={locationInfoBlockArticles}
            practices={practicesSorted}
          />
          {currentOffice?.attorneys.length > 0 && (
            <PracticeAttorneys
              attorneys={sortByKey(currentOffice.attorneys, 'lastName')}
            />
          )}
        </Row>
        <WhyChooseUs anchorId={anchorData.whyChooseUs.id} />
        {currentOffice?.officePractices.length > 0 && (
          <BlockListWrapper
            article={LocationListPracticeArticle}
            title="Services We Offer"
            list={currentOffice.officePractices}
            isSimple
          />
        )}
      </LocationPageContainer>
    </>
  );
};

export default LocationPage;
