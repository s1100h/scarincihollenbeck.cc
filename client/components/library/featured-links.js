import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import styles from 'styles/FeaturedLinks.module.css';

export default function FeaturedLinks() {
  return (
    <Col sm={12} className={`${styles.linksContainer} px-0 mx-0`}>
      <ul className="list-unstyled list-inline text-center my-3">
        <li className="list-inline-item">
          <Link href="/library?category=firm-news">
            <a className={`${styles.link} text-dark`}>
              <strong>
                <u>Firm News</u>
              </strong>
            </a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/library?category=firm-events">
            <a className={`${styles.link} text-dark`}>
              <strong>
                <u>Firm Events</u>
              </strong>
            </a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="/library?category=law-firm-insights">
            <a className={`${styles.link} text-dark`}>
              <strong>
                <u>Firm Insights</u>
              </strong>
            </a>
          </Link>
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
