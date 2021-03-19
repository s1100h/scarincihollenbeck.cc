import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { List } from 'react-virtualized';
import ContactForm from 'components/contact-form';
import { formatDate, createMarkup } from 'utils/helpers';
import styles from 'styles/BasicContent.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

function Post(content, { key, index }) {
  const post = content[index];

  return (
    <li key={key} className="my-3 pb-3 border-bottom">
      <Link href={post.link}>
        <a className="d-flex flex-row text-dark">
          <Image
            src={post.fimg_url || '/images/no-image-found-diamond.png'}
            alt={post.title.rendered}
            width={196}
            height={98}
            layout="intrinsic"
            className="mr-3"
          />
          <div>
            <h5 className="d-block w-100 mb-0 pt-0">
              <strong>{post.title.rendered}</strong>
            </h5>
            <p className="mt-0 pt-0">{formatDate(post.date)}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default function LargeSidebarWithPosts({
  content,
  sidebar,
  posts,
  postsTitle,
}) {
  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={createMarkup(content)}
          />
          <h3 className="mt-5">
            <strong style={{ fontSize: '1.8rem' }}>{postsTitle}</strong>
          </h3>
          <hr />
          <ul className="my-0 py-0">
            <List
              width={800}
              height={600}
              rowCount={posts.length}
              rowHeight={250}
              rowRenderer={(rowArgs) => Post(posts, rowArgs)}
            />
          </ul>
          <div className="mt-5 w-100">
            <h4 className={grayTitleStyles.title}>
              Contact A Firm Reprepresentative
            </h4>
            <ContactForm />
          </div>
        </Col>
        <Col sm={12} md={4}>
          {sidebar}
        </Col>
      </Row>
    </Container>
  );
}
