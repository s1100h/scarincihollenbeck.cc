import { Description } from '../../styles/SingleSubHeader.style';
import PostBreadcrumbs from '../../components/organisms/post/PostBreadcrumbs';
import { changeTitle } from '../../utils/helpers';
import { JSXWithDynamicLinks } from '../../components/atoms/micro-templates/JSXWithDynamicLinks';
import { MiddleContainer, SpecialSubHeaderContainer } from '../../styles/practices-special-style/SpecialSubHeader.style';
import ScrollDownArrow from '../../components/common/ScrollDownArrow';
import DescriptionPlusBtn from '../../components/organisms/cannabis-law/DescriptionPlusBtn';

const article = `
  While the number of states legalizing cannabis 
  for medical and adult use continues to grow, businesses 
  operating in the cannabis industry still face legal uncertainty 
  due to the ongoing dichotomy between state and federal cannabis law. 
`;
const SpecialSubHeader = ({ title, subtitle, backgroundImage = '/images/smoke.png' }) => (
  <SpecialSubHeaderContainer backgroundImage={backgroundImage}>
    <PostBreadcrumbs />
    <h1 className="animate__animated animate__fadeInDown animate__fast">{changeTitle(title)}</h1>
    {subtitle && (
      <Description whiteVariant="true" className="animate__animated animate__fadeInUp animate__fast sub-title">
        {subtitle?.length > 0 && <JSXWithDynamicLinks HTML={subtitle} />}
      </Description>
    )}
    <MiddleContainer>
      <ScrollDownArrow text="Learn more?" />
      <DescriptionPlusBtn labelForBtn="See attorneys" text={article} />
    </MiddleContainer>
  </SpecialSubHeaderContainer>
);

export default SpecialSubHeader;
