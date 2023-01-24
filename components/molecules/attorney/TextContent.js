import { createMarkup } from 'utils/helpers';
import ContentTitle from 'components/atoms/ContentTitle';
import Surface from 'components/atoms/micro-templates/surface';
import { ArticleBody } from '../../../styles/Article.style';

const TextContent = ({ title, content }) => (
  <Surface>
    {title && <ContentTitle title={title} />}
    <ArticleBody dangerouslySetInnerHTML={createMarkup(content)} />
  </Surface>
);

export default TextContent;
