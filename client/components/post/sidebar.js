import Image from 'next/image';
import Link from 'next/link';
import Search from 'components/search';
import TrendingStories from 'components/trending-stories';
import SubscriptionMessage from 'components/subscription-message';
import styles from 'styles/SidebarTitle.module.css';

export default function PostSidebar({ posts, attorneys }) {
  return (
    <div className="d-print-none">
      <Search />
      {/** TOP ARTICLES */}
      <TrendingStories title="Trending Stories" content={posts} />
      {/** MENTIONED ATTORNEYS */}
      {attorneys.length > 0 && (
        <div className="w-100 mt-4">
          <div className={styles.header}>Mentioned Attorneys</div>
          <div className="off-white">
            <ul className="list-unstyled px-1 mx-1">
              {attorneys.map((a) => (
                <li key={a.name} className="py-3">
                  <Link href={a.link}>
                    <a className="m-attorneys d-flex flex-row text-dark">
                      <div className="mx-2 d-block">
                        <Image
                          src={a.image}
                          alt={a.name}
                          width={49}
                          height={67}
                          layout="intrinsic"
                        />
                      </div>
                      <div className="ml-2">
                        <h5 className="mb-0">
                          <strong>{a.name}</strong>
                        </h5>
                        <p>{a.designation}</p>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/** GET THE LATEST FROM OUR ATTORNEYS */}
      <SubscriptionMessage />
    </div>
  );
}
