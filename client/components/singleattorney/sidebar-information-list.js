import styles from 'styles/SidebarInformationLinks.module.css';
import lineStyles from 'styles/LineHeader.module.css';
import { createMarkup } from 'utils/helpers';

export default function SidebarInformationList({
  content,
}) {
  const filteredSideBarItems = content.filter((a) => JSON.stringify(a) !== '[]');

  return (
    <>
      {filteredSideBarItems.map((item) => (
        <div key={item} id={item.title.toLowerCase().replace(/\s/g, '-')}>
          <div className={lineStyles.lineHeader}>
            <h3>{item.title}</h3>
          </div>
          {typeof item.content === 'string' && <div className={styles.lists} dangerouslySetInnerHTML={createMarkup(item.content)} />}
          {typeof item.content === 'object' && item.content.map((subItem) => (
            <>
              <p className={styles.title}><strong>{subItem.title}</strong></p>
              <div className={styles.lists} dangerouslySetInnerHTML={createMarkup(subItem.content)} />
            </>
          ))}
        </div>
      ))}
    </>
  );
}
