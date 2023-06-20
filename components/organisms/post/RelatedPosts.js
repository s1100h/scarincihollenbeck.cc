import Image from 'next/image';
import Link from 'next/link';
import empty from 'is-empty';
import { RelatedPostItem, RelatedPostsContainer, RelatedPostsList } from '../../../styles/Post/RelatedPosts.style';
import { PRODUCTION_URL } from '../../../utils/constants';

const RelatedPosts = ({ posts, title }) => (
  <RelatedPostsContainer>
    <h5>{!empty(title) ? title : 'Related Posts'}</h5>
    <RelatedPostsList>
      {posts.map((post) => (
        <RelatedPostItem key={post.databaseId}>
          <Link href={post.uri.replace(PRODUCTION_URL, '')} passHref>
            <Image src={post.featuredImage} width={160} height={80} alt={post.title} />
            <h6>{post.title}</h6>
          </Link>
        </RelatedPostItem>
      ))}
    </RelatedPostsList>
  </RelatedPostsContainer>
);

export default RelatedPosts;
