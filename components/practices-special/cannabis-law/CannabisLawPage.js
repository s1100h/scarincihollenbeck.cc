import dynamic from 'next/dynamic';
import empty from 'is-empty';
import { useEffect, useState } from 'react';
import BasicSiteHead from '../../shared/head/BasicSiteHead';
import SubHeader from '../../../layouts/SubHeader/SubHeader';
import useApolloQuery from '../../../hooks/useApolloQuery';
import { categoryPostsByIdQuery } from '../../../requests/graphql-queries';
import ArticlesBlock from '../../organisms/cannabis-law/ArticlesBlock';

const PhotoBlock = dynamic(() => import('../../organisms/cannabis-law/PhotoBlock'));
const CardsBlock = dynamic(() => import('../../organisms/cannabis-law/CardsBlock'));
const AttorneysBlock = dynamic(() => import('../../organisms/cannabis-law/AttorneysBlock'));
const KeyContactsBlock = dynamic(() => import('../../organisms/cannabis-law/KeyContactsBlock'));
const HelpArticleBlock = dynamic(() => import('../../organisms/cannabis-law/HelpArticleBlock'));
const NewsPaperBlock = dynamic(() => import('../../organisms/cannabis-law/NewsPaperBlock'));
const PracticesListBlock = dynamic(() => import('../../organisms/cannabis-law/PracticesListBlock'));

const CannabisLawPage = ({
  practice, canonicalUrl, attorneysSchemaData, corePractices, chairPractice, attorneyListPractice, keyContactsList, cannabisLawData,
}) => {
  const [hrefToId, setHref] = useState('');
  const anchorIdBlock = 'photoBlock';
  const [blogFields, setBlogId] = useState({
    label: 'News',
    databaseId: 98,
    slug: 'firm-news',
  });
  const handleClickByAnchor = () => setHref(anchorIdBlock);

  useEffect(() => {
    const clearId = setTimeout(() => {
      setHref('');
    }, 100);
    return () => clearTimeout(clearId);
  }, [hrefToId]);

  const {
    handleNextPagination, handlePrevPagination, data, loading, error,
  } = useApolloQuery(
    categoryPostsByIdQuery,
    {
      first: 3,
      last: null,
      after: null,
      before: null,
      categoryId: blogFields.databaseId,
      parent: blogFields.slug,
    },
    // skipOrGo,
  );

  return (
    <>
      <BasicSiteHead title={practice.seo.title} metaDescription={practice.seo.metaDescription} canonicalUrl={canonicalUrl} personDataForSchema={attorneysSchemaData} />
      <SubHeader handleClickAnchor={handleClickByAnchor} backgroundVideo={cannabisLawData.subheaderBackgroundVideo.link} anchorId={anchorIdBlock} title={practice.title} subtitle={cannabisLawData.subTitle} article={cannabisLawData.descriptionSubheader} />
      <PhotoBlock anchorIdBlock={hrefToId} photoBlockData={cannabisLawData.photoBlock} />
      <CardsBlock cardsBlockData={cannabisLawData.cardsInfo.cards} />
      <AttorneysBlock attorneysBlockArticle={cannabisLawData.attorneysArticleBlock} attorneyListPractice={attorneyListPractice} chairPractice={chairPractice} />
      <KeyContactsBlock keyContactsData={cannabisLawData.keycontactsblock} keyContacts={keyContactsList} />
      {(!empty(cannabisLawData.helpArticleBlock.title) || !empty(cannabisLawData.helpArticleBlock.paragraphs)) && <HelpArticleBlock helpArticleBlockData={cannabisLawData.helpArticleBlock} />}
      <NewsPaperBlock article={cannabisLawData.newspaperBlock.article} newsPepperArticle={cannabisLawData.newspaperBlock.newspaperBox} />
      <ArticlesBlock categoryData={data} handleClickByTabCategory={setBlogId} activeTabSlug={blogFields.databaseId} />
      <PracticesListBlock practiceList={corePractices} />
    </>
  );
};

export default CannabisLawPage;
