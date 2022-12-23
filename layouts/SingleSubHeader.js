import { createMarkup } from 'utils/helpers';
import { BackgroundContainer, Description, SubHeaderContent } from 'styles/SingleSubHeader.style';
import Link from 'next/link';

const SingleSubHeader = ({
  title,
  subtitle,
  isBlog,
  isHoliday,
  isTabs = false,
  isFilter = false,
  authors = [],
  date = '',
}) => (
  <BackgroundContainer
    props={{
      isHoliday,
      isTabs,
      isBlog,
      isFilter,
    }}
  >
    <SubHeaderContent props={{ isBlog }}>
      <h1 className="animate__animated animate__fadeInDown animate__fast">{title}</h1>
      {isBlog && (
        <p className="mb-2">
          <strong>Author: </strong>
          {authors.map((author, index) => (author.user_url === '' ? (
            <span key={author.display_name}>{author.display_name}</span>
          ) : (
            <Link key={author.display_name} href={`/attorneys/${author.user_url}`}>
              <a>
                {author.display_name}

                {index < authors.length - 1 && <>, </>}
              </a>
            </Link>
          )))}
          <span className="mx-3">|</span>
          {date}
        </p>
      )}
      <Description
        className="animate__animated animate__fadeInUp animate__fast sub-title"
        dangerouslySetInnerHTML={createMarkup(subtitle)}
      />
    </SubHeaderContent>
  </BackgroundContainer>
);

export default SingleSubHeader;
