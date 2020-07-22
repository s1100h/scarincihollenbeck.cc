import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { List } from 'react-virtualized';
import ContactForm from 'components/contact-form';
import { formatDate, createMarkup } from 'utils/helpers';

function Post(content, {
  key, index, isScrolling, isVisible, style,
}) {
  const post = content[index];

  return (
    <li key={key} className="my-3 pb-3 border-bottom">
      <a href={post.link} className="d-flex flex-row">
        <Image src={post.fimg_url} className="w-25 mr-3" rounded />
        <div>
          <h5 className="d-block w-100 mb-0 pt-0">{post.title.rendered}</h5>
          {(post.date !== undefined) && <p className="mt-0 pt-0">{formatDate(post.date)}</p>}
        </div>
      </a>
    </li>
  );
}

export default function LargeSidebarWithPosts(props) {
  const { content, sidebar, posts, postsTitle } = props;

  return (
    <Container>
      <Row>
        <Col sm={12} md={8}>
          <div className="post-content" dangerouslySetInnerHTML={createMarkup(content)} />
          <h3 className="mt-5">
            <strong style={{fontSize: "1.8rem"}}>{postsTitle}</strong>
          </h3>
          <hr />
          <ul className="mx-0 w-100">
            <List
              width={800}
              height={600}
              rowCount={posts.length}
              rowHeight={250}
              rowRenderer={(rowArgs) => Post(posts, rowArgs)}
            />
          </ul>
          <div className="mt-5 w-100">
            <h4 className="bg-light-gray">
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
  )
}