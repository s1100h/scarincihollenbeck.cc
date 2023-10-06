import styled from 'styled-components';
import { globalColor, successMessage } from './global_styles/Global.styles';
import { Row } from 'react-bootstrap';

export const CareersBlock = styled(Row)`
  margin-bottom: 80px;
`;
export const CareerBlockTitle = styled.h2`
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 500;
`;

export const CareerBlockSubtitle = styled.p`
  color: ${globalColor.gray.gray80};
  margin-bottom: 40px;
`;
export const CareerFormContainer = styled.div`
  padding: 20px 0;
  position: relative;

  .kw-alert-success {
    ${successMessage}
    :after {
      content: 'Thank you for applying! We have received your application 
      for the job vacancy. Our team will review it and get back to you soon.';
    }
  }
`;
