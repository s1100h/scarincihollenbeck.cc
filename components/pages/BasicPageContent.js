import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import { FIRM_PAGES, SIDEBAR_POLITIC_LINKS } from 'utils/constants';
import { ContainerDefault } from 'styles/Containers.style';
import empty from 'is-empty';
import ContentSection from 'components/molecules/ContentSection';
import { BasicPageContentHolder } from 'styles/BasicPage.style';

const BasicPageContent = ({
  sections,
  canonicalUrl,
  seo,
  title,
  description,
  subHeaderImage,
}) => (
  <>
    <BasicSiteHead
      title={seo.title}
      metaDescription={seo.metaDesc}
      canonicalUrl={canonicalUrl}
    />
    <SubHeaderDefault
      title={title}
      subtitle={description}
      backgroundImage={subHeaderImage}
      menu={
        canonicalUrl.includes('work-life-balance')
          ? FIRM_PAGES
          : SIDEBAR_POLITIC_LINKS
      }
    />
    <ContainerDefault as="section">
      <BasicPageContentHolder as="div">
        {!empty(sections)
          && sections?.map(({ title, content, link }, index) => (
            <ContentSection
              key={`${index + 1}-basic-page-section`}
              title={title}
              content={content}
              link={link}
              isSmaller
            />
          ))}
      </BasicPageContentHolder>
    </ContainerDefault>
  </>
);

export default BasicPageContent;
