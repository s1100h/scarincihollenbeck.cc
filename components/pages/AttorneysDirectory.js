import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import { MainAttorneysContainer } from 'styles/Attornyes.style';
import { useEffect, useRef } from 'react';
import FAQ from 'components/atoms/FAQ';
import AttorneyFilters from 'components/organisms/attorneys/AttorneyFilters';
import { useDispatch, useSelector } from 'react-redux';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import { ScarinciHollenbeckKeyContact } from 'utils/constants';
import { ContainerDefault } from 'styles/Containers.style';
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
          practices={practices?.data}
          locations={locations?.data}
          attorneyArchives={attorneyArchives}
          seoAttorneys={seoAttorneys}
        />

        <ContainerDefault>
          <FAQ />
        </ContainerDefault>
      </MainAttorneysContainer>
    </>
  );
};

export default AttorneysPage;
