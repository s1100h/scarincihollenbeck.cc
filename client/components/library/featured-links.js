import { useRouter } from 'next/router';
import Col from 'react-bootstrap/Col';
import styles from 'styles/FeaturedLinks.module.css';

export default function FeaturedLinks() {
  const router = useRouter();
  const isEvents = router.asPath.includes('firm-events');
  const isInsights = router.asPath.includes('firm-insights');
  const isNews = router.asPath.includes('firm-news');
  const isNone = !isEvents && !isInsights && !isNews;

  return (
    <Col sm={12} className={`${styles.linksContainer} px-0 mx-0`}>
      <ul className="list-unstyled list-inline text-center my-3">
        <li className="list-inline-item">
          <a
            href="/library?category=firm-news"
            className={`${styles.link} text-dark`}
            style={{
              color: isNews || isNone ? '#ad1616 !important' : null,
            }}
          >
            <strong>
              <u>Firm News</u>
            </strong>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="/library?category=firm-events"
            className={`${styles.link} text-dark`}
            style={{
              color: isEvents ? '#ad1616 !important' : null,
            }}
          >
            <strong>
              <u>Firm Events</u>
            </strong>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="/library?category=law-firm-insights"
            className={`${styles.link} text-dark`}
            style={{
              color: isInsights ? '#ad1616 !important' : null,
            }}
          >
            <strong>
              <u>Firm Insights</u>
            </strong>
          </a>
        </li>
      </ul>
      <style jsx>
        {`
          div {
            background-color: #e9e9e9;
          }
        `}
      </style>
    </Col>
  );
}
