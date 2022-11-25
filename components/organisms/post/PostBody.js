import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Col from 'react-bootstrap/Col';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import ContactForm from 'components/shared/ContactForm';
import PostBreadcrumbs from 'components/organisms/post/PostBreadcrumbs';
import AuthorBio from 'components/organisms/post/AuthorBio';
import { createMarkup, urlify } from 'utils/helpers';
import { SITE_URL } from 'utils/constants';
import { BigGrayTitle } from 'styles/BigGrayTitle.style';
import { ContentContainer } from 'styles/PageContant.style';

const DisplayListTags = dynamic(() => import('components/molecules/post/DisplayListTags'));

const PostBody = ({
  featuredImage, content, authors, title, subTitle, caption, categories,
}) => {
  const router = useRouter();
  const postUrl = `${SITE_URL}${router.asPath}`;

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
      <ContentContainer
        className="mt-3 d-print-block"
        dangerouslySetInnerHTML={createMarkup(content)}
      />
      <hr />
      {categories && (
        <DisplayListTags title="Categories">
          {categories.map((category, index) => (
            <li key={category.name} className="list-inline-item">
              <Link href={`/library/category/${urlify(category.name)}`}>
                <a className="text-dark underline">
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
      <div className="d-print-none">
        <AuthorBio authors={authors} />
        <BigGrayTitle className="my-5">Get In Touch</BigGrayTitle>
        <ContactForm />
      </div>
      <style jsx>{'.underline:hover { text-decoration: underline }'}</style>
    </Col>
  );
};

export default PostBody;
