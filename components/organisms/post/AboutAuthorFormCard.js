import {
  AboutAuthorFormCardContainer,
  ContactNowBtn,
} from 'styles/AboutAuthorFormCard.style';
import { useDispatch } from 'react-redux';
import { handleModalOpener } from '../../../redux/slices/modals.slice';

const AboutAuthorFormCard = ({ modalClassName = '' }) => {
  const dispatch = useDispatch();

  return (
    <AboutAuthorFormCardContainer className="d-print-none mt-4">
      <ContactNowBtn
        className="contact-now-btn"
        onClick={() => dispatch(
          handleModalOpener({
            active: true,
            className: modalClassName,
          }),
        )}
      >
        <span>Contact now</span>
      </ContactNowBtn>
    </AboutAuthorFormCardContainer>
  );
};

export default AboutAuthorFormCard;
