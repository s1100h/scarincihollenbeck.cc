import { ContentContainer } from 'styles/PageContant.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';
import CategoriesPost from './Categoryes';

const PostBody = ({
  content, title, subTitle, categories,
}) => (
  <>
    <div className="d-none d-print-block">
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
    </div>
    {categories && <CategoriesPost categories={categories} />}
    <ContentContainer className="mt-3 d-print-block">
      <JSXWithDynamicLinks HTML={content} />
    </ContentContainer>
  </>
);

export default PostBody;
