import { createMarkup } from 'utils/helpers';
import matterStyles from 'styles/Matters.module.css';
import ContentTitle from 'components/atoms/ContentTitle';

const TextContent = ({ title, content }) => (
  <>
    {title && <ContentTitle title={title} />}
    <div className={matterStyles.container} dangerouslySetInnerHTML={createMarkup(content)} />
    <style jsx>{' div {font-size: 1rem;} '}</style>
  </>
);

export default TextContent;
