import HeaderPrintVersion from 'components/shared/Header/HeaderPrintVersion';
import FooterPrintVersion from 'components/shared/Footer/FooterPrintVersion';
import {
  HeaderWrapperPrintVersion,
  PracticePrintPageContainer,
} from 'styles/practices/PracticePrintPage.style';
import FAQ from 'components/atoms/FAQ';
import { useImagesLoad } from 'hooks/useImagesLoad';
import { useRef } from 'react';
import { PrintContainer } from 'styles/common/PrintStyles.style';
import { useGetLocationsQuery } from '../../../redux/services/project-api';
import SubHeaderPrintVersion from './SubHeaderPrintVersion';
import PracticeDescriptionPrint from './PracticeDescriptionPrint';
import WhyChooseUs from './WhyChooseUs';
import AwardsPrint from './AwardsPrint';

const PracticePrintPage = ({
  title,
  subtitle,
  keyContacts,
  contentSection,
  whyChooseUsData,
  faqData,
  awards,
  onReady,
}) => {
  const { data: locations } = useGetLocationsQuery();

  const containerRef = useRef();
  useImagesLoad(onReady, containerRef);

  return (
    <PrintContainer ref={containerRef}>
      <PracticePrintPageContainer>
        <HeaderWrapperPrintVersion>
          <HeaderPrintVersion locations={locations} />

          <SubHeaderPrintVersion
            title={title}
            subtitle={subtitle}
            keyContacts={keyContacts}
          />
        </HeaderWrapperPrintVersion>

        <AwardsPrint awards={awards} />

        <PracticeDescriptionPrint contentSection={contentSection} />

        <WhyChooseUs data={whyChooseUsData} isPrint />

        <FAQ title={title} faqArrContent={faqData} allOpen />

        <FooterPrintVersion locations={locations} />
      </PracticePrintPageContainer>
    </PrintContainer>
  );
};

export default PracticePrintPage;
