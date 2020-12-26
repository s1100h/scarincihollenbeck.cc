import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from 'utils/helpers';

export default function VirtualizedArticle(content, { key, index }) {
  const post = content[index];

  return (
    <li key={key} className="my-3 pb-3 border-bottom">
      <Link href={(post.node) ? post.node.link : post.link}>
        <a className="d-flex flex-row text-dark">
          <Image
            src={
              post.node
                ? post.node.image.node.sourceUrl
                : post.node.featuredImage
                  ? post.node.featuredImage.node.sourceUrl
                  : post.featuredImage
                    ? post.featuredImage.node.sourceUrl
                    : '/images/no-image-found-diamond.png'
            }
            alt={post.node.title || post.title}
            width={196}
            height={98}
            layout="intrinsic"
            className="mr-3"
          />
        </a>
      </Link>
      {/* <Link href={post.link || post.node.link}>
        <a className="d-flex flex-row text-dark">

          <div>
            <h5 className="d-block w-100 mb-0 pt-0">
              <strong>{post.node.title || post.title}</strong>
            </h5>
            <p className="mt-0 pt-0">{formatDate(post.node.date || post.date)}</p>
          </div>
        </a>
      </Link> */}
    </li>
  );
}
