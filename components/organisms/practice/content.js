import pageContentStyles from 'styles/PageContent.module.css';
import { createMarkup } from 'utils/helpers';

export default function SinglePracticeContent({ content }) {
  return (
    <div
      className={`${pageContentStyles.p} mt-3`}
      dangerouslySetInnerHTML={createMarkup(content)}
    />
  );
}
