import Link from 'next/link';
import {
  BackgroundContainer,
  Description,
  GradientWrapper,
  SubHeaderContent,
} from '../../styles/SingleSubHeader.style';
import PostBreadcrumbs from '../../components/organisms/post/PostBreadcrumbs';
import { changeTitle, formatDate } from '../../utils/helpers';
import { JSXWithDynamicLinks } from '../../components/atoms/micro-templates/JSXWithDynamicLinks';

const DefaultSubHeader = ({
  title,
  subtitle,
  isBlog,
  isHoliday,
  isFilter,
  authors,
  date,
  setActiveTab,
  activeTab,
  backgroundImage,
}) => (
  <BackgroundContainer
    props={{
      isHoliday,
      isBlog,
      isFilter,
      backgroundImage,
    }}
    data-testid="default-sub-header"
  >
    {backgroundImage?.length > 0 && <GradientWrapper />}
    <SubHeaderContent>
      <PostBreadcrumbs data={{ title }} />
      <JSXWithDynamicLinks HTML={changeTitle(title, true)} />
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
              href={
                  author.display_name !== 'Scarinci Hollenbeck'
                    ? author.uri
                    : '/attorneys'
                }
            >
              {author.display_name}
              {authors.length > 1 && index !== authors.length - 1 && <>, </>}
            </Link>
          )))}
          <span className="mx-3">|</span>
          {formatDate(date)}
        </p>
      )}
      {subtitle?.length > 0 && (
        <Description className="animate__animated animate__fadeInUp animate__fast sub-title">
          <JSXWithDynamicLinks HTML={subtitle} />
        </Description>
      )}
    </SubHeaderContent>
  </BackgroundContainer>
);

export default DefaultSubHeader;
