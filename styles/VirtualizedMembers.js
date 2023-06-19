import styled from 'styled-components';

export const VirtualListContainer = styled.div`
  height: 450px;
  width: 100%;
  overflow: auto;

  ul {
    width: 100%;
    position: relative;
    height: ${({ listHight }) => `${listHight}px`};
  }
`;

export const ItemVirtual = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 205px;
  transform: ${({ itemTransform }) => `translateY(${itemTransform}px)`};
`;
