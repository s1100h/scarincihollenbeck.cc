import dynamic from 'next/dynamic';
import { ArticlesSection } from 'styles/practices-special-style/ent-adn-media/ArticlesBlock.style';
import { ContainerDefault } from 'styles/Containers.style';
import empty from 'is-empty';
import {
  LinkToCategory,
  PostsBox,
  TitleButtonBox,
} from '../../../styles/practices-special-style/ArticlesBlock.style';

const PostList = dynamic(import('components/molecules/PostList'));

const ArticlesBlock = ({ paginationData }) => {
  if (empty(paginationData?.posts?.edges) && !paginationData?.loading) return null;

  return (
    <ArticlesSection>
      <ContainerDefault>
        <TitleButtonBox>
          <h2>Related Articles</h2>
          <LinkToCategory href="/library/category/entertainment-and-sports">
            Read more
          </LinkToCategory>
        </TitleButtonBox>
        <PostsBox>
          <PostList
            postsClassName="entertainment-news"
            content={paginationData}
            isProfile="true"
            isVertical="true"
          />
        </PostsBox>
      </ContainerDefault>
    </ArticlesSection>
  );
};

export default ArticlesBlock;
