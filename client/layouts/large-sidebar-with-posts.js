import Link from 'next/link';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from 'components/contact-form';
import { formatDate, createMarkup } from 'utils/helpers';
import styles from 'styles/BasicContent.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function LargeSidebarWithPosts({
  content,
  sidebar,
  posts,
  postsTitle,
}) {
  return (
    <Container>
      <Row>
        <Col sm={12} md={9}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={createMarkup(content)}
          />
          <h3 className="mt-5">
            <strong style={{ fontSize: '1.8rem' }}>{postsTitle}</strong>
          </h3>
          <hr />
          <ul className="my-0 py-0">
            {posts.length > 0
              && posts.map((post) => (
                <li
                  key={post.title.rendered}
                  className="my-3 pb-3 border-bottom"
                >
                  <Link href={post.link}>
                    <a className="d-flex flex-row text-dark">
                      <Image
                        src={
                          post.fimg_url || '/images/no-image-found-diamond.png'
                        }
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
              ))}
          </ul>
          <div className="mt-5 w-100">
            <h4 className={grayTitleStyles.title}>
              Contact A Firm Reprepresentative
            </h4>
            <ContactForm />
          </div>
        </Col>
        <Col sm={12} md={3}>
          {sidebar}
        </Col>
      </Row>
    </Container>
  );
}
