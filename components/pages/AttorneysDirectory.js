import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeader from 'layouts/SubHeader/SubHeader';
import { FaqBox, MainAttorneysContainer } from 'styles/Attornyes.style';
import { useContext, useEffect, useRef } from 'react';
import FAQ from 'components/atoms/FAQ';
import { ATTORNEYS_FAQ } from 'utils/constants';
import { SizesContext } from 'contexts/SizesContext';
import AttorneyFilters from 'components/organisms/attorneys/AttorneyFilters';
import { ContainerDefault } from 'styles/Containers.style';
import { useDispatch } from 'react-redux';
import {
  useGetLocationsQuery,
  useGetPracticesQuery,
} from '../../redux/services/project-api';
import { setReference } from '../../redux/slices/attorneys.slice';

const AttorneysPage = ({
  seo,
  site,
  canonicalUrl,
  attorneyArchives,
  seoAttorneys,
}) => {
  const containerRef = useRef();
  const { headerSize } = useContext(SizesContext);
  const dispatch = useDispatch();
  const { data: locations } = useGetLocationsQuery();
  const { data: practices } = useGetPracticesQuery();

  useEffect(() => {
    if (containerRef && containerRef.current) {
      dispatch(setReference(containerRef.current));
    }
  }, [containerRef.current]);

  return (
    <>
      <BasicSiteHead
        title={seo.title}
        metaDescription={seo.metaDesc}
        canonicalUrl={canonicalUrl}
      />
      <SubHeader isFilter title={site.title} subtitle={site.description} />
      <MainAttorneysContainer
        ref={containerRef}
        $headerHeight={`${headerSize?.height}px`}
      >
        <ContainerDefault>
          <AttorneyFilters
            practices={practices?.data}
            locations={locations?.data}
            attorneyArchives={attorneyArchives}
            seoAttorneys={seoAttorneys}
          />
        </ContainerDefault>

        <FaqBox>
          <FAQ faqArrContent={ATTORNEYS_FAQ} />
        </FaqBox>
      </MainAttorneysContainer>
    </>
  );
};

export default AttorneysPage;
