import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';
import { List } from 'react-virtualized';
import { formatDate } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

function Post(content, {
  key, index, isScrolling, isVisible, style,
}) {
  const post = content[index];

  return (
    <li key={key} className="my-3 pb-3 border-bottom">
      <Link href={post.node.link}>
      <a className="d-flex flex-row text-dark">
        <Image
          src={(post.node.image) ? post.node.image.node.sourceUrl : (post.node.featuredImage) ? post.node.featuredImage.node.sourceUrl : '/images/no-image-found-diamond.png'}
          alt={post.node.title}
          width={196}
          height={98}
          layout="intrinsic"
          className="mr-3"
        />
        <div>
          <h5 className="d-block w-100 mb-0 pt-0">
            <strong>{post.node.title}</strong>
          </h5>
          <p className="mt-0 pt-0">{formatDate(post.node.date)}</p>
        </div>
      </a>
      </Link>
    </li>
  );
}

export default function Articles({ tabTitle, title, content }) {
  
  return (
    <Tab.Pane eventKey={tabTitle} title={title}>
      <h4 className={grayTitleStyles.title}>{title}</h4>
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
