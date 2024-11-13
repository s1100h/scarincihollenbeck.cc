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
        <h2>Articles</h2>
        <LinkToCategory href="/library/category/cannabis-law">
          Read more
        </LinkToCategory>
      </TitleButtonBox>
      <PostsBox className="cannabis-law-posts">
        <PostList
          postsClassName="cannabis-law-news"
          content={paginationData}
          isProfile="true"
          isVertical="true"
        />
      </PostsBox>
    </FullHDContainer>
  </ArticlesContainer>
);

export default ArticlesBlock;
