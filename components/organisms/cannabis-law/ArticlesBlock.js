import dynamic from 'next/dynamic';
import empty from 'is-empty';
import {
  ArticlesContainer, CannabisTabButton, LinkToCategory, NavBox,
} from '../../../styles/practices-special-style/ArticlesBlock.style';
import { FullHDContainer } from '../../../styles/practices-special-style/commonForSpecial.style';
import { CategoriesButtonsStructure } from '../../../utils/constants';
import Loader from '../../atoms/Loader';

const PostList = dynamic(import('components/molecules/PostList'));

const ArticlesBlock = ({ handleClickByTabCategory, activeTabSlug, categoryData }) => (
  <ArticlesContainer>
    <FullHDContainer>
      <h3>Articles</h3>
      <NavBox>
        <ul>
          {CategoriesButtonsStructure.map(({ slug, label, databaseId }) => (
            <CannabisTabButton onClick={() => handleClickByTabCategory({ databaseId, label })} key={databaseId}>
              {label}
            </CannabisTabButton>
          ))}
        </ul>
        <LinkToCategory href="/">
          Read more
          {activeTabSlug}
        </LinkToCategory>
      </NavBox>
      {empty(categoryData) ? <Loader /> : <PostList content={{ data: categoryData }} isProfile />}
    </FullHDContainer>
  </ArticlesContainer>
);

export default ArticlesBlock;
