import ContactForm from '../../shared/ContactForm/ContactForm';
import { AboutAuthorFormCardContainer } from '../../../styles/AboutAuthorFormCard.style';

const AboutAuthorFormCard = () => (
  <AboutAuthorFormCardContainer className="d-print-none mt-4">
    <h4>Get In Touch</h4>
    <ContactForm />
  </AboutAuthorFormCardContainer>
);

export default AboutAuthorFormCard;
