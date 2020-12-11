import Link from 'next/link';
import styles from 'styles/SidebarTitle.module.css';

export default function AttorneyServices({ bio, practices }) {
  return (
    <div className="w-100 mt-5">
      <div className={styles.header}>
        {bio.map((b) => b.name)}
        {' '}
        Services
      </div>
      <div className="off-white">
        <ul className="p-4">
          {(practices) && practices.map((p) => (
            <li key={p.title} className="mb-2">
              <strong>
                <Link href={(p.link) ? p.link : p.slug}>
                  <a className="text-dark">
                    {p.title}
                  </a>
                </Link>
              </strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
