import Image from 'next/image';
import PostBreadcrumbs from 'components/organisms/post/PostBreadcrumbs';
import { createMarkup } from 'utils/helpers';
import { ContentContainer } from 'styles/PageContant.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';
import CategoriesPost from './Categoryes';

const PostBody = ({
  featuredImage, content, title, subTitle, caption, categories,
}) => (
  <>
    <PostBreadcrumbs />
    {featuredImage && (
      <Image
        className="mb-2"
        src={featuredImage}
        width={750}
        height={350}
        alt={title}
        layout="intrinsic"
      />
    )}
    {caption && <div className="mt-0 mb-2" dangerouslySetInnerHTML={createMarkup(caption)} />}
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
