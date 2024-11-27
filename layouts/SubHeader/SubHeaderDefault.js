import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import PostBreadCrumbs from 'components/organisms/post/PostBreadcrumbs';
import Image from 'next/image';
import {
  SubHeaderContent,
  SubHeaderDescription,
  SubHeaderHolder,
} from 'styles/practices/SubHeader.style';
import { changeTitle } from 'utils/helpers';
import empty from 'is-empty';
import SubHeaderKeyContacts from './SubHeaderKeyContacts';
import SubHeaderLocations from './SubHeaderLocations';
import SubHeaderIndustriesSlider from './SubHeaderIndustriesSlider';

const SubHeaderDefault = ({
  title,
  subtitle,
  backgroundImage,
  keyContacts,
  officeInfo,
  locations,
  industries,
  customClass = '',
}) => (
  <SubHeaderHolder
    className={`${customClass} ${!backgroundImage ? 'without-image' : ''}`}
    data-testid="default-sub-header"
  >
    {backgroundImage && (
      <picture className="sub-header__image">
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

      <div className="sub-header__text">
        {title && <JSXWithDynamicLinks HTML={changeTitle(title, true)} />}

        {subtitle?.length > 0 && (
          <SubHeaderDescription className="animate__animated animate__fadeInUp animate__fast sub-title">
            <JSXWithDynamicLinks HTML={subtitle} />
          </SubHeaderDescription>
        )}
      </div>
    </SubHeaderContent>

    <SubHeaderKeyContacts keyContacts={keyContacts} />
    <SubHeaderLocations
      locations={locations}
      title={title}
      officeInfo={officeInfo}
    />
    {!empty(industries) && <SubHeaderIndustriesSlider slides={industries} />}
  </SubHeaderHolder>
);

export default SubHeaderDefault;
