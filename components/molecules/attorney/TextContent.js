import { createMarkup } from 'utils/helpers';
import ContentTitle from 'components/atoms/ContentTitle';

const TextContent = ({ title, content }) => (
  <>
    {title && <ContentTitle title={title} />}
    <div dangerouslySetInnerHTML={createMarkup(content)} />
  </>
);

export default TextContent;
