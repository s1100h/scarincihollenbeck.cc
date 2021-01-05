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
        link={bio.link}
        image={bio.image}
        name={bio.name}
        title=""
        number={bio.phone}
        email={bio.email}
        width={80}
        height={100}
        type="/attorneys/[slug]"
      />
      <br />
      <div className="w-100">
        <h4 className={`${styles.header} w-100 p-2 text-left text-white`}>
          {bio.name}
          &apos;s Legal Services
        </h4>
        <div className="off-white">
          <div className="px-2">
            <ul className="px-4 py-2">
              {practices.map((p) => (
                <li key={p.title} className="mb-2">
                  <Link href={p.link}>
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
