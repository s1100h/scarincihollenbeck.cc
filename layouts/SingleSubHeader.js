import { createMarkup } from 'utils/helpers';
import { BackgroundContainer, Description, SubHeaderContent } from 'styles/SingleSubHeader.style';
import Link from 'next/link';
import ButtonsMenu from 'components/organisms/practice/ButtonsMenu';

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
      <h1 className="animate__animated animate__fadeInDown animate__fast">
        {title.replace(/&#8220;/gi, '"').replace(/&#8221;/gi, '"')}
      </h1>
      {isBlog && (
        <p className="mt-4 mb-2">
          <strong>Author: </strong>
          {authors.map((author, index) => (author.user_url === '' || author.statusProfile === null ? (
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
      {tabs?.length > 0 && (
        <ButtonsMenu marTop="0" tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
      )}
    </SubHeaderContent>
  </BackgroundContainer>
);

export default SingleSubHeader;
