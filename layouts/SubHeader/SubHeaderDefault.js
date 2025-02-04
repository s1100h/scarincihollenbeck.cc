import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import PostBreadCrumbs from 'components/organisms/post/PostBreadcrumbs';
import Image from 'next/image';
import {
  SubHeaderContent,
  SubHeaderDescription,
  SubHeaderHolder,
} from 'styles/subheader/SubHeader.style';
import { changeTitle } from 'utils/helpers';

const SubHeaderDefault = ({
  title,
  subtitle,
  backgroundImage,
  isSubscription,
  RightContentComponent,
  rightContentProps = {},
}) => (
  <SubHeaderHolder
    className={`sub-header ${
      !backgroundImage ? 'sub-header--without-image' : ''
    } ${rightContentProps?.menu ? 'sub-header--menu' : ''} ${
      isSubscription ? 'sub-header--subscription' : ''
    }`}
    data-testid="default-sub-header"
  >
    {backgroundImage && (
      <picture className="sub-header__image" key={`${title}-subheader-image`}>
        <Image
          src={backgroundImage}
          alt={title || 'sub header image'}
          width={400}
          height={400}
          priority
          sizes="400px"
          loading="eager"
        />
      </picture>
    )}

    <SubHeaderContent className="sub-header__content">
      <PostBreadCrumbs />

      <div className="sub-header__text" key={`${title}-subheader-content`}>
        {title && <JSXWithDynamicLinks HTML={changeTitle(title, true)} />}

        {subtitle?.length > 0 && (
          <SubHeaderDescription className="animate__animated animate__fadeInUp animate__fast sub-title">
            <JSXWithDynamicLinks HTML={subtitle} />
          </SubHeaderDescription>
        )}
      </div>
    </SubHeaderContent>

    {/* Already exist components: SubHeaderKeyContacts, SubHeaderLocations, SubHeaderIndustriesSlider, SubHeaderMenu, SubHeaderSubscription */}
    {RightContentComponent && <RightContentComponent {...rightContentProps} />}
  </SubHeaderHolder>
);

export default SubHeaderDefault;
