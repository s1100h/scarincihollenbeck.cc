import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import { BASIC_PAGES, FIRM_PAGES } from 'utils/constants';
import { ContainerDefault } from 'styles/Containers.style';
import empty from 'is-empty';
import ContentSection from 'components/molecules/ContentSection';
import { ArticleContent } from 'styles/Article.style';
import { BasicPageContentHolder } from 'styles/BasicPage.style';

const BasicPageContent = ({
  seo,
  site,
  canonicalUrl,
  sections,
  subHeaderImage,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDesc}
      canonicalUrl={canonicalUrl}
    />
    <SubHeaderDefault
      title={site.title}
      subtitle={site.description}
      backgroundImage={subHeaderImage}
      menu={
        canonicalUrl.includes('work-life-balance') ? FIRM_PAGES : BASIC_PAGES
      }
    />
    <ContainerDefault>
      <ArticleContent>
        <BasicPageContentHolder>
          {!empty(sections)
            && sections?.map(({ title, content, link }, index) => (
              <ContentSection
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                title={title}
                content={content}
                link={link}
                isSmaller
              />
            ))}
        </BasicPageContentHolder>
      </ArticleContent>
    </ContainerDefault>
  </>
);

export default BasicPageContent;
