import { changeTitle, createMarkup, formatDate } from 'utils/helpers';
import { BackgroundContainer, Description, SubHeaderContent } from 'styles/SingleSubHeader.style';
import Link from 'next/link';
import ButtonsMenu from 'components/organisms/practice/ButtonsMenu';
import PostBreadcrumbs from '../components/organisms/post/PostBreadcrumbs';

const SingleSubHeader = ({
  title,
  subtitle,
  isBlog,
  isHoliday,
  isFilter = false,
  authors = [],
  date = '',
  tabs,
  setActiveTab,
  activeTab,
}) => (
  <BackgroundContainer
    props={{
      isHoliday,
      isTabs: tabs?.length > 0 && 'true',
      isBlog,
      isFilter,
    }}
  >
    <SubHeaderContent props={{ isBlog }}>
      <PostBreadcrumbs />
      <h1 className="animate__animated animate__fadeInDown animate__fast">{changeTitle(title)}</h1>
      {isBlog && (
        <p className="mt-4 mb-2">
          <strong>Author: </strong>
          {authors.map((author, index) => (author.user_url === '' || author.statusProfile === null ? (
            <span key={author.display_name}>
              {author.display_name}
              {authors.length > 1 && index !== authors.length - 1 && <>, </>}
            </span>
          ) : (
            <Link
              key={author.display_name}
              href={author.display_name !== 'Scarinci Hollenbeck' ? author.uri : '/attorneys'}
            >
              {author.display_name}
              {authors.length > 1 && index !== authors.length - 1 && <>, </>}
            </Link>
          )))}
          <span className="mx-3">|</span>
          {formatDate(date)}
        </p>
      )}
      <Description
        className="animate__animated animate__fadeInUp animate__fast sub-title"
        dangerouslySetInnerHTML={createMarkup(subtitle)}
      />
      {tabs?.length > 0 && (
        <ButtonsMenu marTop="0" tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
      )}
    </SubHeaderContent>
  </BackgroundContainer>
);

export default SingleSubHeader;
