import { createMarkup } from 'utils/helpers';
import ContentTitle from 'components/atoms/ContentTitle';
import Surface from 'components/atoms/micro-templates/surface';

const TextContent = ({ title, content }) => (
  <Surface>
    {title && <ContentTitle title={title} />}
    <div dangerouslySetInnerHTML={createMarkup(content)} />
  </Surface>
);

export default TextContent;
