import React from 'react';
import Link from 'next/link';
import Image from 'next/images';
import Tab from 'react-bootstrap/Tab';
import { List } from 'react-virtualized';
import BigGrayTitle from 'layouts/big-gray-titles';
import { formatDate } from 'utils/helpers';

function Post(content, { index }) {
  const post = content[index];

  return (
    <li key={post.title} className="my-3 pb-3 border-bottom">
      <Link href={post.link}>
        <a className="d-flex flex-row">
          <Image
            src={post.image ? post.image : '/images/no-image-found-diamond.png'}
            width={300}
            height={150}
            layout="intristic"
          />
          <div>
            <h5 className="d-block w-100 mb-0 pt-0">{post.title}</h5>
            <p className="mt-0 pt-0">{formatDate(post.date)}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default function PracticeRelatedArticlesTab({
  tabTitle,
  title,
  content,
}) {
  return (
    <Tab.Pane eventKey={tabTitle} title={title}>
      <BigGrayTitle title={title} />
      <ul>
        <List
          width={800}
          height={600}
          rowCount={content.length}
          rowHeight={350}
          rowRenderer={(rowArgs) => Post(content, rowArgs)}
        />
      </ul>
    </Tab.Pane>
  );
}
