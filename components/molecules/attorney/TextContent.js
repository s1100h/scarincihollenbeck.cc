import { createMarkup } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import matterStyles from 'styles/Matters.module.css';

const TextContent = ({ title, content }) => (
  <>
    {title && <p className={`${grayTitleStyles.title} text-capitalize w-100`}>{title}</p>}
    <div className={matterStyles.container} dangerouslySetInnerHTML={createMarkup(content)} />
    <style jsx>{' div {font-size: 1rem;} '}</style>
  </>
);

export default TextContent;
