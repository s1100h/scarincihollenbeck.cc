import { createMarkup } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import styles from 'styles/Matters.module.css';

export default function SingleAttorneyMatters({ content }) {
  return (
    <div>
      {content.length > 0 && content.map((c) => (
        <div key={c.content}>
          {c.title.length > 0 && <h4 className={grayTitleStyles.title}>{c.title}</h4>}
          <div className={styles.container} dangerouslySetInnerHTML={createMarkup(c.content)} />
        </div>
      ))}
    </div>
  );
}
