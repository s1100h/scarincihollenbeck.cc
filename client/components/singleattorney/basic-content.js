import Link from 'next/link';
import { createMarkup } from 'utils/helpers';
import styles from 'styles/BasicContent.module.css';
import lineStyles from 'styles/LineHeader.module.css';

export default function BasicContent({
  title, content, links, id,
}) {
  return (
    <>
      {title.length > 0 && (
        <div className={lineStyles.lineHeader}>
          <h3>{title}</h3>
        </div>
      )}
      <div
        id={id}
        className={styles.content}
        dangerouslySetInnerHTML={createMarkup(content)}
      />
      {Object.keys(links).length > 0 && (
        <Link href={links.link}>
          <a
            className="btn btn-danger px-3 mb-4"
            style={{ fontSize: '1.3rem' }}
          >
            {links.label}
          </a>
        </Link>
      )}
    </>
  );
}
