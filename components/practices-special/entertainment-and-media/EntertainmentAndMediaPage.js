import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { getPaginationData } from 'requests/getPaginationData';
import SubHeaderSlider from 'layouts/SubHeader/SubHeaderSlider';
import BasicSiteHead from '../../shared/head/BasicSiteHead';
import {
  getClientsQuery,
  postsForPaginationByCategoryIdQuery,
} from '../../../requests/graphql-queries';
import useAnchorLink from '../../../hooks/useAnchorLink';

const AttorneysBlock = dynamic(() => import('../../organisms/ent-and-media/AttorneysBlock'));
const EntertainmentInfoBlock = dynamic(() => import('../../organisms/ent-and-media/EntertainmentInfoBlock'));
const EntertainmentClientsBlock = dynamic(() => import('../../organisms/ent-and-media/EntertainmentClientsBlock'));
const ArticlesBlock = dynamic(() => import('../../organisms/ent-and-media/ArticlesBlock'));
const PracticesLinksBlock = dynamic(() => import('../../organisms/ent-and-media/PracticesLinksBlock'));

const EntertainmentAndMediaPage = ({
  industry,
  canonicalUrl,
  attorneysSchemaData,
  chairIndustry,
  attorneyListIndustry,
  entertainmentAndMediaData,
  practices,
}) => {
  const { setHref, hrefToId } = useAnchorLink();
  const anchorIdToAttorneys = 'practiceAttorneys';
  const handleClickByAnchorToAttorneys = () => setHref(anchorIdToAttorneys);
  const { query } = useRouter();

  const params = {
    categoryId: 1066,
    currentPage: query?.page || 1,
    itemsPerPage: 3,
  };

  const paginationData = getPaginationData(
    postsForPaginationByCategoryIdQuery,
    params,
  );

  const clientsPaginationData = getPaginationData(getClientsQuery, {
    currentPage: query?.['client-page'] || 1,
    itemsPerPage: 10,
  });

  const sliderCfg = {
    isSlidesAutoPlay: true,
    autoPlaySpeed: 10000,
  };

  return (
    <>
      <BasicSiteHead
        title={industry.seo.title}
        metaDescription={industry.seo.metaDesc}
        canonicalUrl={canonicalUrl}
        personDataForSchema={attorneysSchemaData}
      />

      <SubHeaderSlider
        slidesData={entertainmentAndMediaData.sliderBackgrounds}
        subtitle={entertainmentAndMediaData.subTitle}
        title={industry.title}
        sliderCfg={sliderCfg}
        handleClickAnchor={handleClickByAnchorToAttorneys}
        anchorId={anchorIdToAttorneys}
      />
      <AttorneysBlock
        attorneyListPractice={attorneyListIndustry}
        chairPractice={chairIndustry}
        title={entertainmentAndMediaData.attorneysTitleBox}
        anchorLinkToAttorneys={hrefToId}
      />
      <EntertainmentInfoBlock
        handleClickForAnchor={handleClickByAnchorToAttorneys}
        anchorToAttorneysBlock={anchorIdToAttorneys}
        tabs={entertainmentAndMediaData.entertainmentInfoBlock.tabs}
      />
      <EntertainmentClientsBlock
        title={entertainmentAndMediaData.clientsBlock.title}
        description={entertainmentAndMediaData.clientsBlock.description}
        clientsPaginationData={clientsPaginationData}
      />
      <ArticlesBlock paginationData={paginationData} />
      <PracticesLinksBlock
        practicesListTitle={entertainmentAndMediaData.practicesList.title}
        practices={practices}
        practicesFooterImage={
          entertainmentAndMediaData.practicesList.imageUnderTitle
        }
      />
    </>
  );
};

export default EntertainmentAndMediaPage;
