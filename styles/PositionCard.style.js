import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  padding: 8px;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  position: relative;

  transition: 0.8s;
  :hover {
    cursor: pointer;
    background-color: whitesmoke;
  }
`;

export const TitlePosition = styled.p`
  font-weight: 600;
  color: #b50000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-bottom: 1px solid #dee2e6;
`;
