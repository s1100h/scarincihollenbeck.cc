import Link from 'next/link';
import Search from 'components/search';
import AttorneyCard from 'components/attorney-card';
import styles from 'styles/SidebarTitle.module.css';

export default function AuthorSideBar({ bio, practices }) {
  return (
    <div>
      <Search />
      <br />
      <AttorneyCard
        link={`/attorney/${bio.slug}`}
        image={bio.featuredImage.node.sourceUrl}
        name={bio.title}
        title={bio.attorneyMainInformation.designation}
        number={bio.attorneyMainInformation.phoneNumber}
        email={bio.attorneyMainInformation.email}
        width={80}
        height={100}
        type="/attorney/[slug]"
      />
      <br />
      <div className="w-100">
        <h4 className={`${styles.header} w-100 p-2 text-left text-white`}>
          {bio.title}
          &apos;s
          {' '}
          Legal Services
        </h4>
        <div className="off-white">
          <div className="px-2 pt-3">
            <ul className="px-4 py-2">
              {practices.relatedPractices.map((p) => (
                <li key={p.id}>
                  <Link href={p.uri}>
                    <a className={`${styles.lh22px} text-dark`}>
                      <strong>{p.title}</strong>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
