import ContactForm from '../../shared/ContactForm/ContactForm';
import { AboutAuthorFormCardContainer } from '../../../styles/AboutAuthorFormCard.style';
import AboutAuthorCard from '../../common/AboutAuthorCard';
import { BigGrayTitle } from '../../../styles/BigGrayTitle.style';

const AboutAuthorFormCard = ({ authors }) => (
  <AboutAuthorFormCardContainer className="d-print-none  mt-5">
    <AboutAuthorCard authors={authors} />
    <div>
      <BigGrayTitle>Get In Touch</BigGrayTitle>
      <ContactForm />
    </div>
  </AboutAuthorFormCardContainer>
);

export default AboutAuthorFormCard;
