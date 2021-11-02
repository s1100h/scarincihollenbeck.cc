import { useRouter } from 'next/router';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from 'styles/Tabs.module.css';
import { urlify } from 'utils/helpers';

export default function PracticeLinks({ links, practiceUrl }) {
  const router = useRouter();
  const tabLinks = links.content;
  const isArticlesPage = router.asPath.includes('articles');

  return (
    <>
      <div className="d-none d-md-block">
        <div className={`${styles.tabContainer} d-flex pl-0 mb-0`}>
          {tabLinks.map((desktopLink) => (
            <Link
              key={desktopLink[0].title}
              href={`/practice/${practiceUrl}/content/${urlify(desktopLink[0].title)}`}
            >
              <a
                className={`${styles.tab} ${styles.practice} text-white block`}
                style={{ padding: '.5rem 1rem' }}
              >
                {desktopLink[0].title}
              </a>
            </Link>
          ))}
          <Link
            href={isArticlesPage ? `/practice/${practiceUrl}` : `/practice/${practiceUrl}/articles`}
          >
            <a
              className={`${styles.tab} ${styles.practice} text-white block`}
              style={{ padding: '.5rem 1rem' }}
              style={{ display: 'block', padding: '.5rem 1rem', border: 0 }}
            >
              Related Updates
            </a>
          </Link>
        </div>
      </div>
      <div className=" my-3 d-block d-md-none mobile-menu">
        <Dropdown size="lg" className={styles.mobileTabContainer}>
          <Dropdown.Toggle variant="danger" id="dropdown-basic" className="px-5">
            <strong>Menu Options</strong>
            <style jsx>{'strong{ font-size: 1.25rem}'}</style>
          </Dropdown.Toggle>
          <Dropdown.Menu as="ul" className="w-100">
            {tabLinks.map((mobileLink) => (
              <Dropdown.Item key={mobileLink[0].title}>
                <Link href={`/practice/${practiceUrl}/content/${urlify(mobileLink[0].title)}`}>
                  <a className="block text-dark">{mobileLink[0].title}</a>
                </Link>
              </Dropdown.Item>
            ))}

            <Dropdown.Item
              className="text-dark"
              href={
                isArticlesPage ? `/practice/${practiceUrl}` : `/practice/${practiceUrl}/articles`
              }
            >
              Related Updates
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
