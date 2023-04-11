import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import SingleSubHeader from 'layouts/SingleSubHeader';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { buildLocationSchema } from 'utils/json-ld-schemas';
import { ATTORNEYS_FAQ, PRODUCTION_URL } from 'utils/constants';
import { useContext } from 'react';
import dynamic from 'next/dynamic';
import Map from 'components/molecules/location/Map';
import { BsDownload } from 'react-icons/bs';
import OfficesLinkTabs from '../molecules/location/OfficesLinkTabs';
import { LocationContext } from '../../contexts/LocationContext';
import { sortByKey } from '../../utils/helpers';
import AttorneysOfficeList from '../molecules/location/AttorneysOfficeList';
import CurrentOfficeCard from '../molecules/location/CurrentOfficeCard';
import {
  DownloadTheMap,
  LinkMapBox,
  MediaBr,
  OfficeLocationBoxTitle,
} from '../../styles/Locations.style';
import { LocationListPracticeArticle } from '../../utils/articles-content';

const BlockListWrapper = dynamic(() => import('../organisms/practices/ListWrapper'));
const FAQ = dynamic(() => import('../atoms/FAQ'));

const changeTitle = (title) => title.replace(/(^|\s+)Lawyers(\s+|$)/g, ' ');

const LocationPage = ({ seo, currentOffice, attorneysSchemaData }) => {
  const { locations } = useContext(LocationContext);
  const canonicalUrl = `${PRODUCTION_URL}/location/little-falls`;

  const addressInfo = {
    phone: currentOffice.phone,
    fax: currentOffice.fax,
    streetAddress: currentOffice.streetAddress,
    floor: currentOffice.floor,
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
            __html: JSON.stringify(buildLocationSchema(seo, currentOffice.mapLink)),
          }}
        />
      </Head>
      <SingleSubHeader
        title={currentOffice.title}
        subtitle={seo.metaDesc}
        backgroundImage={currentOffice.featuredImage}
      />
      <Container className="mb-5">
        {locations?.length > 0 && <OfficesLinkTabs officesForTabs={locations} />}
        <Row>
          <OfficeLocationBoxTitle>{changeTitle(currentOffice.title)}</OfficeLocationBoxTitle>
          <Col sm={12} lg={7}>
            <Map title={currentOffice.title} map={currentOffice.mapLink} />
          </Col>
          <Col sm={12} lg={5}>
            <CurrentOfficeCard {...addressInfo} />
            {(currentOffice.autoMap?.length > 0 || currentOffice.trainStationsMap?.length > 0) && (
              <LinkMapBox>
                {currentOffice?.trainStationsMap.length > 0 && (
                  <DownloadTheMap href={currentOffice.trainStationsMap} target="_blank" download>
                    NJ Transit Rail System Map
                    <BsDownload />
                  </DownloadTheMap>
                )}
                {currentOffice?.autoMap.length > 0 && (
                  <DownloadTheMap href={currentOffice.autoMap} target="_blank" download>
                    Directions to the Overlook
                    {' '}
                    <MediaBr />
                    Corporate Center
                    <BsDownload />
                  </DownloadTheMap>
                )}
              </LinkMapBox>
            )}
          </Col>
          {currentOffice?.attorneys.length > 0 && (
            <AttorneysOfficeList attorneys={sortByKey(currentOffice.attorneys, 'lastName')} />
          )}
        </Row>
        {currentOffice?.officePractices.length > 0 && (
          <BlockListWrapper
            article={LocationListPracticeArticle}
            title="Services We Offer"
            list={currentOffice.officePractices}
            isSimple
          />
        )}
        <FAQ faqArrContent={ATTORNEYS_FAQ} />
      </Container>
    </>
  );
};

export default LocationPage;
