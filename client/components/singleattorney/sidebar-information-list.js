import styles from 'styles/SidebarInformationLinks.module.css';
import lineStyles from 'styles/LineHeader.module.css';
import { createMarkup } from 'utils/helpers';

export default function SidebarInformationList({ content, title, id }) {
  return (
    <div id={id}>
      <div className={lineStyles.lineHeader}>
        <h3>{title}</h3>
      </div>
      <div
        className={styles.lists}
        dangerouslySetInnerHTML={createMarkup(content)}
      />
    </div>
  );
}
