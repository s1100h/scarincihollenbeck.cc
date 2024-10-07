import Image from 'next/image';
import Link from 'next/link';
import empty from 'is-empty';
import {
  RelatedPostItem,
  RelatedPostsContainer,
  RelatedPostsList,
} from '../../../styles/Post/RelatedPosts.style';
import { ALT_PREFIX, PRODUCTION_URL } from '../../../utils/constants';

const RelatedPosts = ({ posts, title }) => {
  if (empty(posts)) return null;
  return (
    <RelatedPostsContainer data-testid="related-posts">
      <h3>{!empty(title) ? title : 'Related Posts'}</h3>
      <RelatedPostsList>
        {posts?.map((post) => (
          <RelatedPostItem key={post.databaseId}>
            <Link href={post.uri.replace(PRODUCTION_URL, '')} passHref>
              <Image
                src={post.featuredImage}
                width={160}
                height={80}
                alt={`${ALT_PREFIX}${post.title}`}
              />
              <h4>{post.title}</h4>
            </Link>
          </RelatedPostItem>
        ))}
      </RelatedPostsList>
    </RelatedPostsContainer>
  );
};

export default RelatedPosts;
