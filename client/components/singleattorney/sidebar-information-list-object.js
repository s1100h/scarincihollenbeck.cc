import styles from 'styles/SidebarInformationLinks.module.css';
import lineStyles from 'styles/LineHeader.module.css';
import { createMarkup } from 'utils/helpers';

export default function SidebarInformationListObject({ content, title, id }) {
  return (
    <div id={id}>
      <div className={lineStyles.lineHeader}>
        <h3>{title}</h3>
      </div>
      {content
        && content.map((item) => (
          <div key={item.content}>
            {item.title && (
              <p
                style={{
                  margin: 0,
                  padding: 0,
                  fontSize: '1.4rem',
                  marginBottom: '-29px',
                  marginTop: '35px',
                }}
              >
                <strong>{item.title}</strong>
              </p>
            )}
            <div
              className={styles.lists}
              dangerouslySetInnerHTML={createMarkup(item.content)}
            />
          </div>
        ))}
    </div>
  );
}
