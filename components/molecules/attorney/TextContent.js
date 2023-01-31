import ContentTitle from 'components/atoms/ContentTitle';
import Surface from 'components/atoms/micro-templates/surface';
import { ArticleBody } from '../../../styles/Article.style';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const TextContent = ({ title, content }) => (
  <Surface>
    {title && <ContentTitle title={title} />}
    <ArticleBody>
      <JSXWithDynamicLinks HTML={content} />
    </ArticleBody>
  </Surface>
);

export default TextContent;
