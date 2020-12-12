import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Tab from 'react-bootstrap/Tab';
import { List } from 'react-virtualized';
import { formatDate } from 'utils/helpers';
import grayTitleStyles from 'components/singlepractice/node_modules/styles/BigGrayTitle.module.css';

function Post(content, { key, index }) {
  const post = content[index];

  return (
    <li key={key} className="my-5 pb-4 border-bottom">
      <Link href={post.link}>
        <a className="d-flex flex-row text-dark">
          <Image
            src={post.featuredImg || '/images/no-image-found-diamond.png'}
            alt={post.title}
            width={196}
            height={98}
            className="mr-3"
          />
          <div>
            <h5 className="d-block w-100 mb-0 pt-0">
              <strong>{post.title}</strong>
            </h5>
            {post.date !== undefined && (
              <p className="mt-0 pt-0">{formatDate(post.date)}</p>
            )}
          </div>
        </a>
      </Link>
    </li>
  );
}

export default function SingleAttorneyNonGraphQlArticles({ tabTitle, title, content }) {
  return (
    <Tab.Pane eventKey={tabTitle} title={title}>
      <h4 className={grayTitleStyles.title}>{title}</h4>
      <ul className="mx-0 px-0">
        <List
          width={800}
          height={650}
          rowCount={content.length}
          rowHeight={250}
          rowRenderer={(rowArgs) => Post(content, rowArgs)}
        />
      </ul>
    </Tab.Pane>
  );
}
