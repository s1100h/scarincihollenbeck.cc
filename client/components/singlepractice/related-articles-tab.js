import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';
import { List } from 'react-virtualized';
import { formatDate } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

function Post(content, { index }) {
  const post = content[index];

  return (
    <li key={post.title} className="my-3 pb-3 border-bottom">
      <Link href={post.link}>
        <a className="d-flex flex-row text-dark">
          <Image
            src={post.featuredImage ? post.featuredImage.node.sourceUrl : '/images/no-image-found-diamond.png'}
            width={196}
            height={98}
            layout="intrinsic"
            className="mr-3"
          />
          <div>
            <h5 className="d-block w-100 mb-0 pt-0">
              <strong>
                {post.title}
              </strong>
            </h5>
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
      <h4 className={grayTitleStyles.title}>{title}</h4>
      <ul className="mx-0 px-0">
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
