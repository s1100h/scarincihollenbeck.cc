import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeader from 'layouts/SubHeader/SubHeader';
import { FaqBox, MainAttorneysContainer } from 'styles/Attornyes.style';
import { useContext, useEffect, useRef } from 'react';
import { AttorneysContext } from 'contexts/AttorneysContext';
import FAQ from 'components/atoms/FAQ';
import { ATTORNEYS_FAQ } from 'utils/constants';
import { SizesContext } from 'contexts/SizesContext';
import AttorneyFilters from 'components/organisms/attorneys/AttorneyFilters';
import { PracticesContext } from 'contexts/PracticesContext';
import { LocationContext } from 'contexts/LocationContext';
import { ContainerDefault } from 'styles/Containers.style';

const AttorneysPage = ({
  seo, site, canonicalUrl, attorneyArchives,
}) => {
  const { setReference } = useContext(AttorneysContext);

  const containerRef = useRef();
  const { headerSize } = useContext(SizesContext);
  const { practices } = useContext(PracticesContext);
  const { locations } = useContext(LocationContext);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      setReference(containerRef.current);
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
            practices={practices}
            locations={locations}
            attorneyArchives={attorneyArchives}
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
