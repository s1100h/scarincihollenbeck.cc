import { ButtonLinkToAttorneys, DescrBtnContainer } from '../../../styles/practices-special-style/DescriptionPlusBtn.style';

const DescriptionPlusBtn = ({ text, labelForBtn }) => (
  <DescrBtnContainer>
    <p>{text}</p>
    <ButtonLinkToAttorneys href="/attorneys">{labelForBtn}</ButtonLinkToAttorneys>
  </DescrBtnContainer>
);

export default DescriptionPlusBtn;
