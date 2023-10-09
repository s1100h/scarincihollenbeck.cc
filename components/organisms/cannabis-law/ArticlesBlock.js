import dynamic from 'next/dynamic';
import {
  ArticlesContainer,
  CannabisTabButton,
  LinkToCategory,
  NavBox,
  PostsBox,
} from '../../../styles/practices-special-style/ArticlesBlock.style';
import { FullHDContainer } from '../../../styles/practices-special-style/commonForSpecial.style';
import { CategoriesButtonsStructure } from '../../../utils/constants';

const PostList = dynamic(import('components/molecules/PostList'));

const ArticlesBlock = ({
  handleClickByTabCategory,
  activeTabLabel,
  categoryData,
  paginationData,
}) => (
  <ArticlesContainer>
    <FullHDContainer>
      <h3>Articles</h3>
      <NavBox>
        <ul>
          {CategoriesButtonsStructure.map(({ slug, label, databaseId }) => (
            <CannabisTabButton
              onClick={() => handleClickByTabCategory({ databaseId, label })}
              key={databaseId}
            >
              {label}
            </CannabisTabButton>
          ))}
        </ul>
        <LinkToCategory href="/">
          Read more
          {activeTabLabel}
        </LinkToCategory>
      </NavBox>
      <PostsBox>
        <PostList content={paginationData} isProfile="true" isVertical="true" />
      </PostsBox>
    </FullHDContainer>
  </ArticlesContainer>
);

export default ArticlesBlock;
