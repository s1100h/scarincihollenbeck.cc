import React from 'react';
import Link from 'next/link';
import Tab from 'react-bootstrap/Tab';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import { List } from 'react-virtualized';
import { addRandomKey, formatDate } from '../../utils/helpers';

function Post(content, {
  key, index, isScrolling, isVisible, style,
}) {
  const post = content[index];

  return (
    <li key={key} className="my-3 pb-3 border-bottom">
      <a href={post.link} className="d-flex flex-row">
        <Image src={post.featuredImg} className="w-25 mr-3" rounded />
        <div>
          <h5 className="d-block w-100 mb-0 pt-0">{post.title}</h5>
          {(post.date !== undefined) && <p className="mt-0 pt-0">{formatDate(post.date)}</p>}
        </div>
      </a>
    </li>
  );
}

export default function Articles(props) {
  const { tabTitle, title, content } = props;

  return (
    <Tab.Pane eventKey={tabTitle} title={title}>
      <h4 className="bg-light-gray">{title}</h4>
      <ul>
        <List
          width={800}
          height={600}
          rowCount={content.length}
          rowHeight={250}
          rowRenderer={(rowArgs) => Post(content, rowArgs)}
        />
      </ul>
    </Tab.Pane>
  );
}
