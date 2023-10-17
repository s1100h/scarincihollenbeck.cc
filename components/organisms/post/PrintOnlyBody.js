import Image from 'next/image';
import { Container, Row } from 'react-bootstrap';
import empty from 'is-empty';
import React from 'react';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const PrintOnlyBody = ({
  title, featuredImage, authors, content,
}) => (
  <Container className="d-none d-print-flex flex-column min-vh-100">
    <Row sm={10}>
      <h3 className="mt-5">
        <strong>{title}</strong>
      </h3>
      {!empty(featuredImage) && (
        <div className="d-block w-100">
          <Image
            fill
            width={700}
            className="mt-2 mb-4"
            src={featuredImage}
            alt={title}
          />
        </div>
      )}
      <div className="d-block w-100 mb-3">
        <strong>Author: </strong>
        {authors.length > 0
          ? authors.map((a, i) => (i === 0 && authors.length > 1 ? (
            <span key={a.display_name} className="text-dark">
              {a.display_name}
              ,
              {' '}
            </span>
          ) : (
            <span key={a.display_name} className="text-dark">
              {a.display_name}
            </span>
          )))
          : null}
      </div>
      <JSXWithDynamicLinks print HTML={content} />
    </Row>
  </Container>
);

export default PrintOnlyBody;
