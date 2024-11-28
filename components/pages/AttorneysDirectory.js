import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { MainAttorneysContainer } from 'styles/Attornyes.style';
import { useEffect, useRef } from 'react';
import AttorneyFilters from 'components/organisms/attorneys/AttorneyFilters';
import { useDispatch, useSelector } from 'react-redux';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import { ScarinciHollenbeckKeyContact } from 'utils/constants';
import { ContainerDefault } from 'styles/Containers.style';
import dynamic from 'next/dynamic';
import { setReferenceId } from '../../redux/slices/attorneys.slice';
import { useGetLocationsQuery } from '../../redux/services/project-api';

const FAQ = dynamic(() => import('components/atoms/FAQ'));
const WhatWeDoSection = dynamic(() => import('components/organisms/home/WhatWeDoSection'));
const WhyChooseUs = dynamic(() => import('components/organisms/practices/WhyChooseUs'));

const AttorneysPage = ({
  seo,
  site,
  canonicalUrl,
  attorneyArchives,
  seoAttorneys,
  practices,
}) => {
  const containerRef = useRef();
  const dispatch = useDispatch();
  const { data: locations } = useGetLocationsQuery();
  const { headerSize } = useSelector((state) => state.sizes);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      dispatch(setReferenceId(containerRef.current.id));
    }
  }, [containerRef.current]);

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDesc}
        canonicalUrl={canonicalUrl}
      />
      <SubHeaderDefault
        title={site.title}
        subtitle={site.description}
        keyContacts={[ScarinciHollenbeckKeyContact]}
      />
      <MainAttorneysContainer
        $headerHeight={`${headerSize?.height + 8}px`}
        ref={containerRef}
        id="attorneys-container"
      >
        <AttorneyFilters
          practices={practices}
          locations={locations?.data}
          attorneyArchives={attorneyArchives}
          seoAttorneys={seoAttorneys}
        />

        <ContainerDefault>
          <FAQ isTwoColumns />
        </ContainerDefault>

        <WhatWeDoSection practices={practices} />
        <WhyChooseUs />
      </MainAttorneysContainer>
    </>
  );
};

export default AttorneysPage;
