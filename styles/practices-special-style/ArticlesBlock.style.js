import styled from 'styled-components';
import Link from 'next/link';

export const ArticlesContainer = styled.section``;

export const CannabisTabButton = styled.button``;

export const PostsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2%;

  article {
    width: 400px;
  }
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;
    width: 400px;
    gap: 2%;
  }
`;

export const LinkToCategory = styled(Link)``;
