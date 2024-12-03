import HeaderPrintVersion from 'components/shared/Header/HeaderPrintVersion';
import FooterPrintVersion from 'components/shared/Footer/FooterPrintVersion';
import {
  HeaderWrapperPrintVersion,
  PracticePrintPageContainer,
} from 'styles/practices/PracticePrintPage.style';
import FAQ from 'components/atoms/FAQ';
import { useImagesLoad } from 'hooks/useImagesLoad';
import { useRef } from 'react';
import { useGetLocationsQuery } from '../../../redux/services/project-api';
import SubHeaderPrintVersion from './SubHeaderPrintVersion';
import PracticeDescriptionPrint from './PracticeDescriptionPrint';
import WhyChooseUs from './WhyChooseUs';

const PracticePrintPage = ({
  title,
  subtitle,
  keyContacts,
  contentSection,
  whyChooseUsData,
  faqData,
  onReady,
}) => {
  const { data: locations } = useGetLocationsQuery();

  const containerRef = useRef();
  useImagesLoad(onReady, containerRef);

  return (
    <PracticePrintPageContainer ref={containerRef}>
      <HeaderWrapperPrintVersion>
        <HeaderPrintVersion locations={locations} />

        <SubHeaderPrintVersion
          title={title}
          subtitle={subtitle}
          keyContacts={keyContacts}
        />
      </HeaderWrapperPrintVersion>

      <PracticeDescriptionPrint contentSection={contentSection} />

      <WhyChooseUs data={whyChooseUsData} isPrint />

      <FAQ title={title} faqArrContent={faqData} allOpen />

      <FooterPrintVersion locations={locations} />
    </PracticePrintPageContainer>
  );
};

export default PracticePrintPage;
