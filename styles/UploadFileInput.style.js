import styled from 'styled-components';

export const UploadContainer = styled.label`
  width: 100%;
  display: block !important;
`;

export const UploadRow = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  * {
    cursor: pointer;
  }

  input[disabled] {
    background-color: #fff;
  }
`;

export const UploadTitle = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 700;

  span {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const UploadIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%) rotate(45deg);
`;
