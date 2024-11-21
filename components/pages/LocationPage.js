import Head from 'next/head';
import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { buildLocationSchema } from 'utils/json-ld-schemas';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import empty from 'is-empty';
import LocationContent from 'components/organisms/locations/LocationContent';
import { sortByKey } from '../../utils/helpers';
import SubHeaderDefault from '../../layouts/SubHeader/SubHeaderDefault';
import PracticeAnchors from '../organisms/practices/PracticeAnchors';

const PracticeAttorneys = dynamic(() => import('components/organisms/practices/PracticeAttorneys'));
const WhatWeDoSection = dynamic(() => import('../organisms/home/WhatWeDoSection'));
const WhyChooseUs = dynamic(() => import('../organisms/practices/WhyChooseUs'));
const GoogleReviews = dynamic(() => import('../organisms/common/GoogleReviews'));

const anchorLocationsData = {
  map: {
    id: 'map',
    title: 'Map',
  },
  faq: {
    id: 'faq-section',
    title: 'FAQs',
  },
  attorneys: {
    id: 'attorneys-section',
    title: 'Attorneys',
  },
  whatWeDo: {
    id: 'What-we-do',
    title: 'What we do',
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
      <LocationContent
        title={currentOffice.title}
        currentOffice={currentOffice}
        mapAddress={currentOffice?.mapAddress}
        anchorIdMap={anchorData.map.id}
        anchorIdFaq={anchorData.faq.id}
        faqData={currentOffice.faq}
      />
      {!empty(currentOffice?.attorneys) && (
        <PracticeAttorneys
          anchorId={anchorData.attorneys.id}
          attorneys={sortByKey(currentOffice.attorneys, 'lastName')}
        />
      )}
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
