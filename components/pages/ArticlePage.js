import dynamic from 'next/dynamic';
import PostSiteHead from 'components/shared/head/PostSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import SubHeaderKeyContacts from 'layouts/SubHeader/SubHeaderKeyContacts';
import { printScreen } from 'utils/helpers';
import PostBody from 'components/organisms/post/PostBody';
import empty from 'is-empty';
import { ArticleSecondaryContent } from 'styles/Article.style';
import { ContainerDefault } from 'styles/Containers.style';

const PracticeAttorneys = dynamic(() => import('components/organisms/practices/PracticeAttorneys'));
const PrintOnlyBody = dynamic(() => import('components/organisms/post/PrintOnlyBody'));
const LogoSeparator = dynamic(() => import('components/common/LogoSeparator'));
const RelatedPosts = dynamic(() => import('components/organisms/post/RelatedPosts'));
const SubscriptionBanner = dynamic(() => import('components/organisms/common/SubscriptionBanner'));

const ArticlePage = ({
  post,
  seo,
  authors,
  relatedPosts,
  mainCategory,
  keyContacts,
  selectedHeroes,
}) => (
  <>
    <PostSiteHead
      seo={seo}
      canonicalUrl={seo?.canonicalUrl}
      post={post}
      authors={authors}
    />
    <SubHeaderDefault
      title={post.title}
      authors={authors}
      date={post.date}
      category={mainCategory}
      isSocials
      isSocialsPrint
      RightContentComponent={SubHeaderKeyContacts}
      rightContentProps={{
        keyContacts,
        isPrint: true,
        handlePrint: () => printScreen(),
      }}
    />

    <PostBody
      backLink={`/library${mainCategory?.uri}`}
      content={post.content}
      tags={post.tags}
    />

    <ArticleSecondaryContent>
      {!empty(selectedHeroes) && (
        <>
          <ContainerDefault>
            <LogoSeparator direction="row" isBig />
          </ContainerDefault>

          <PracticeAttorneys
            attorneys={selectedHeroes}
            title="Lawyers mentioned in this article"
            isBackground={false}
          />
        </>
      )}

      {!empty(relatedPosts) && (
        <>
          <ContainerDefault>
            <LogoSeparator direction="row" isBig />
          </ContainerDefault>

          <RelatedPosts posts={relatedPosts} />
        </>
      )}

      <SubscriptionBanner />
    </ArticleSecondaryContent>

    <PrintOnlyBody
      featuredImage={post.featuredImage}
      content={post.content}
      title={post.title}
      authors={authors}
    />
  </>
);

export default ArticlePage;
