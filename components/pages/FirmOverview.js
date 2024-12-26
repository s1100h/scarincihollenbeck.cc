import BasicSiteHead from 'components/shared/head/BasicSiteHead';
import NonFiltered from 'components/molecules/attorneys/NonFiltered';
import { ContainerDefault } from 'styles/Containers.style';
import SubHeaderDefault from 'layouts/SubHeader/SubHeaderDefault';
import { FIRM_PAGES } from 'utils/constants';
import empty from 'is-empty';
import { FirmOverviewlWrapper } from 'styles/FirmOverview.style';
import WhyChooseUs from 'components/organisms/practices/WhyChooseUs';
import KeyPoints from 'components/molecules/firm/KeyPoints';
import { FirmOverviewContentSection } from 'styles/KeyPoints.style';
import ContentSection from 'components/molecules/ContentSection';

const FirmOverviewPage = ({
  title,
  seo,
  canonicalUrl,
  sections,
  subTitle,
  firmOverviewTabs,
  firmMembers,
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
      subtitle={subTitle}
      backgroundImage={subHeaderImage}
      menu={FIRM_PAGES}
    />
    <FirmOverviewlWrapper>
      <ContainerDefault>
        <FirmOverviewContentSection>
          {!empty(sections)
            && sections?.map(({ title, content, link }) => (
              <ContentSection
                key={title}
                title={title}
                content={content}
                link={link}
                isSmaller
                isTwoColumns
              />
            ))}
          <KeyPoints items={firmOverviewTabs.mainTabs} />
        </FirmOverviewContentSection>
      </ContainerDefault>

      <ContainerDefault>
        <NonFiltered attorneys={firmMembers} isVertical />
      </ContainerDefault>

      {!empty(firmOverviewTabs) && (
        <WhyChooseUs
          data={firmOverviewTabs.additionalContent}
          withImage={false}
          isSectionTitle={false}
        />
      )}
    </FirmOverviewlWrapper>
  </>
);

export default FirmOverviewPage;
