import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Col from 'react-bootstrap/Col';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import PostBreadcrumbs from 'components/organisms/post/PostBreadcrumbs';
import { createMarkup } from 'utils/helpers';
import { SITE_URL } from 'utils/constants';
import { ContentContainer } from 'styles/PageContant.style';
import parse from 'html-react-parser';

const DisplayListTags = dynamic(() => import('components/molecules/post/DisplayListTags'));

const PostBody = ({
  featuredImage, content, title, subTitle, caption, categories,
}) => {
  const router = useRouter();
  const postUrl = `${SITE_URL}${router.asPath}`;

  const correctContent = parse(content, {
    replace: (domNode) => {
      if (
        domNode.type === 'tag'
        && domNode.name === 'a'
        && domNode.attribs.href.includes('https://scarincihollenbeck.com')
      ) {
        const uri = domNode.attribs.href.split('/');
        const uriSliced = `/${uri.slice(3).join('/')}`;
        return (
          <Link href={uriSliced}>
            <a>{domNode.children[0].data || domNode.children[0]?.children[0].data}</a>
          </Link>
        );
      }
    },
  });

  return (
    <Col sm={12} lg={9}>
      <PostBreadcrumbs />
      {featuredImage && (
        <Image src={featuredImage} width={750} height={350} alt={title} layout="intrinsic" />
      )}
      {caption && <div className="mt-0 mb-2" dangerouslySetInnerHTML={createMarkup(caption)} />}
      <div className="d-none d-print-block">
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
      </div>
      <ContentContainer className="mt-3 d-print-block">{correctContent}</ContentContainer>
      <hr />
      {categories && (
        <DisplayListTags title="Categories">
          {categories.map((category, index) => (
            <li key={category.databaseId} className="list-inline-item">
              <Link href={`/library/category/${category.slug}`}>
                <a>
                  {category.name}
                  {categories.length - 1 !== index && ', '}
                </a>
              </Link>
            </li>
          ))}
        </DisplayListTags>
      )}
      <DisplayListTags title="Share">
        <li className="list-inline-item">
          <FacebookShareButton url={postUrl} quote={title} style={{ textDecoration: 'underline' }}>
            Facebook
          </FacebookShareButton>
        </li>
        <li className="list-inline-item">
          <TwitterShareButton url={postUrl} quote={title} style={{ textDecoration: 'underline' }}>
            Twitter
          </TwitterShareButton>
        </li>
        <li className="list-inline-item">
          <LinkedinShareButton url={postUrl} quote={title} style={{ textDecoration: 'underline' }}>
            LinkedIn
          </LinkedinShareButton>
        </li>
      </DisplayListTags>
    </Col>
  );
};

export default PostBody;
