import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeader from 'layouts/SubHeader/SubHeader';
import { FaqBox, MainAttorneysContainer } from 'styles/Attornyes.style';
import { useEffect, useRef } from 'react';
import FAQ from 'components/atoms/FAQ';
import { ATTORNEYS_FAQ } from 'utils/constants';
import AttorneyFilters from 'components/organisms/attorneys/AttorneyFilters';
import { ContainerDefault } from 'styles/Containers.style';
import { useDispatch, useSelector } from 'react-redux';
import { setReferenceId } from '../../redux/slices/attorneys.slice';
import {
  useGetLocationsQuery,
  useGetPracticesQuery,
} from '../../redux/services/project-api';

const AttorneysPage = ({
  seo,
  site,
  canonicalUrl,
  attorneyArchives,
  seoAttorneys,
}) => {
  const containerRef = useRef();
  const dispatch = useDispatch();
  const { data: locations } = useGetLocationsQuery();
  const { data: practices } = useGetPracticesQuery();
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
      <SubHeader isFilter title={site.title} subtitle={site.description} />
      <MainAttorneysContainer
        ref={containerRef}
        $headerHeight={`${headerSize?.height}px`}
        id="attorneys-container"
      >
        <ContainerDefault>
          <AttorneyFilters
            practices={practices?.data}
            locations={locations?.data}
            attorneyArchives={attorneyArchives}
            seoAttorneys={seoAttorneys}
          />
        </ContainerDefault>

        <FaqBox data-testid="FAQ-container">
          <FAQ faqArrContent={ATTORNEYS_FAQ} />
        </FaqBox>
      </MainAttorneysContainer>
    </>
  );
};

export default AttorneysPage;
