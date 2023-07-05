import styled from 'styled-components';
import { successMessage } from './global_styles/Global.styles';

export const CareerFormContainer = styled.div`
  padding: 20px 40px;
  position: relative;

  .kw-alert-success {
    ${successMessage}
    :after {
      content: 'Thank you for applying! We have received your application 
      for the job vacancy. Our team will review it and get back to you soon.';
    }
  }
`;
