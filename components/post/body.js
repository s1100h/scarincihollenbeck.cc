import Link from 'next/link';
import Image from 'next/image';
import ContactForm from 'components/contact-form';
import PostBreadcrumbs from 'components/post/post-breadcrumbs';
import ArticleDetails from 'components/post/article-details';
import SocialShareFooter from 'components/post/social-share-footer';
import AuthorBio from 'components/post/author-bio';
import { createMarkup } from 'utils/helpers';
import pageContentStyles from 'styles/PageContent.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function PostBody({
  featuredImage,
  content,
  author,
  eventCat,
  date,
  title,
  tags,
  subTitle,
  caption,
}) {
  return (
    <>
      <PostBreadcrumbs />
      {featuredImage && (
        <Image
          src={featuredImage}
          width={750}
          height={350}
          alt={title}
          layout="intrinsic"
        />
      )}
      {caption && (
        <div
          className="mt-0 mb-2"
          dangerouslySetInnerHTML={createMarkup(caption)}
        />
      )}
      {/* title and subtitle for print version only */}
      <div className="d-none d-print-block">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
      {/* Author & date & Category */}
      <ArticleDetails author={author} date={date} />
      <hr />
      <div
        className={`${pageContentStyles.p} mt-3 d-print-block`}
        dangerouslySetInnerHTML={createMarkup(content)}
      />
      {tags && (
        <div className="small-excerpt ml--21px mb-0 d-print-none">
          <ul className="no-dots list-inline">
            <li className="list-inline-item">
              <strong>Tags: </strong>
            </li>
            {tags.map((tag, index) => (
              <li key={tag.name} className="list-inline-item">
                <Link href={`/library?term=${tag.name}`}>
                  <a>
                    {tag.name.toLowerCase()}
                    {tags.length - 1 !== index && ', '}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="d-print-none">
        <SocialShareFooter title={title} />
        <AuthorBio author={author} />
        <h4 className={`${grayTitleStyles.title} my-5`}>
          {eventCat
            ? 'Contact Us For More Information On This Event'
            : 'Contact Practice Representative'}
        </h4>
        <ContactForm />
      </div>
    </>
  );
}
