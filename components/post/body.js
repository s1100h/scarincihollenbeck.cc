import Link from 'next/link';
import Image from 'next/image';
import ContactForm from 'components/contact-form';
import PostBreadcrumbs from 'components/post/post-breadcrumbs';
import SocialShareFooter from 'components/post/social-share-footer';
import AuthorBio from 'components/post/author-bio';
import { createMarkup, urlify } from 'utils/helpers';
import pageContentStyles from 'styles/PageContent.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

function DisplayListTags({ title, items, isTag }) {
  return (
    <div className="mb-0 d-print-none">
      <ul className="no-dots list-inline">
        <li className="list-inline-item">
          <strong>
            {title}
            :
            {' '}
          </strong>
        </li>
        {items.map((tag, index) => (
          <li key={tag.name} className="list-inline-item">
            <Link href={`/library/search?term=${urlify(tag.name)}`}>
              <a>
                {isTag ? tag.name.toLowerCase() : tag.name}
                {items.length - 1 !== index && ', '}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default function PostBody({
  featuredImage,
  content,
  authors,
  isEvent,
  title,
  tags,
  subTitle,
  caption,
  categories,
}) {
  return (
    <>
      <PostBreadcrumbs />
      {featuredImage && (
        <Image src={featuredImage} width={750} height={350} alt={title} layout="intrinsic" />
      )}
      {caption && <div className="mt-0 mb-2" dangerouslySetInnerHTML={createMarkup(caption)} />}
      {/* title and subtitle for print version only */}
      <div className="d-none d-print-block">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
      <div
        className={`${pageContentStyles.p} mt-3 d-print-block`}
        dangerouslySetInnerHTML={createMarkup(content)}
      />
      <hr />
      {categories && <DisplayListTags title="Categories" items={categories} isTag={false} />}
      {tags && <DisplayListTags title="Tags" items={tags} isTag />}

      <div className="d-print-none">
        <SocialShareFooter title={title} />
        <AuthorBio authors={authors} />
        <p className={`${grayTitleStyles.title} my-5`}>
          {isEvent
            ? 'Contact Us For More Information On This Event'
            : 'Contact Practice Representative'}
        </p>
        <ContactForm />
      </div>
    </>
  );
}
