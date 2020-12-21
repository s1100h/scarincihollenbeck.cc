import ContactForm from 'components/contact-form';
import Breadcrumbs from 'components/breadcrumbs';
import ArticleDetails from 'components/post/article-details';
import SocialShareFooter from 'components/post/social-share-footer';
import AuthorBio from 'components/post/author-bio';
import { createMarkup, urlify } from 'utils/helpers';

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
      <Breadcrumbs />
      <img
        src={
          featuredImage
          || '/images/no-image-found-diamond.png'
        }
        className="w-100 d-print-none"
        alt={title}
      />
      {caption &&  <div className="mt-0 mb-2" dangerouslySetInnerHTML={createMarkup(caption[1])} /> } 
      {/* title and subtitle for print version only */}
       <div className="d-none d-print-block">
         <h1>{title}</h1>
         <h2>{subTitle}</h2>
       </div>   
     
      {/* Author & date & Category */}
      <ArticleDetails author={author} date={date} />
      <hr />
      <div
        className="post-content mt-3 d-print-block"
        dangerouslySetInnerHTML={createMarkup(content)}
      />
      {/* {tags.length > 0 && (
        <div className="small-excerpt ml--21px mb-0 d-print-none">
          <ul className="no-dots list-inline">
            <li className="list-inline-item">
              <strong>Tag: </strong>
            </li>
            {tags.map((tag, index) => (
              <li key={tag.term_id || tag.ID} className="list-inline-item">
                <a
                  href={`/archives?q=${urlify(tag.name)}&page=1`}
                  className="blue-link"
                >
                  <u>{tag.name}</u>
                </a>
                {index !== tags.length - 1 && ','}
              </li>
            ))}
          </ul>
        </div> */}

      {/* <SocialShareFooter title={title} /> */}
      {/* Author bios */}
      {/* <AuthorBio author={author} /> */}
      {/* Contact form */}
      {/* <div className="w-100 mt-5 d-print-none">
        <h4 className="bg-light-gray d-print-none">
          {eventCat
            ? 'Contact Us For More Information On This Event'
            : 'Contact Practice Representative'}
        </h4>
        <div className="mt-5 d-print-none">
          <ContactForm />
        </div>
      </div> */}
    </>
  );
}
