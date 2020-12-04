import React from 'react';
import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';
import { List } from 'react-virtualized';
import { addRandomKey, formatDate } from 'utils/helpers';

function Post(content, {
  key, index, isScrolling, isVisible, style,
}) {
  const post = content[index];

  return (
    <li key={key} className="my-3 pb-3 border-bottom">
      <a href={post.node.link} className="d-flex flex-row">
        <Image
          src={post.node.featuredImage.node.sourceUrl || 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png'
          } 
          alt={post.node.title}
          width={300}
          height={150}
          layout="intrinsic"
          className="mr-3" />
        <div>
          <h5 className="d-block w-100 mb-0 pt-0">{post.node.title}</h5>
          <p className="mt-0 pt-0">{formatDate(post.node.date)}</p>
        </div>
      </a>
    </li>
  );
}

export default function Articles({ tabTitle, title, content }) {
  
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
