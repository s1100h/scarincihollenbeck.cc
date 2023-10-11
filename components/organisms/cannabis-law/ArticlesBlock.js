import dynamic from 'next/dynamic';
import {
  ArticlesContainer,
  LinkToCategory,
  PostsBox,
  TitleButtonBox,
} from '../../../styles/practices-special-style/ArticlesBlock.style';
import { FullHDContainer } from '../../../styles/practices-special-style/commonForSpecial.style';

const PostList = dynamic(import('components/molecules/PostList'));

const ArticlesBlock = ({ paginationData }) => (
  <ArticlesContainer>
    <FullHDContainer>
      <TitleButtonBox>
        <h3>Articles</h3>
        <LinkToCategory href="/library/category/cannabis-law">
          Read more
        </LinkToCategory>
      </TitleButtonBox>
      <PostsBox>
        <PostList
          classNameForCard="cannabis-law-news"
          content={paginationData}
          isProfile="true"
          isVertical="true"
          justArrow
        />
      </PostsBox>
    </FullHDContainer>
  </ArticlesContainer>
);

export default ArticlesBlock;
