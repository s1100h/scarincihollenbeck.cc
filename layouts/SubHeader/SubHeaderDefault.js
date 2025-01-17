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
import dynamic from 'next/dynamic';
import Socials from 'components/atoms/Socials';

const SubHeaderKeyContacts = dynamic(() => import('./SubHeaderKeyContacts'));
const SubHeaderLocations = dynamic(() => import('./SubHeaderLocations'));
const SubHeaderCardsSlider = dynamic(() => import('./SubHeaderCardsSlider'));
const SubHeaderMenu = dynamic(() => import('./SubHeaderMenu'));
const SubHeaderSubscription = dynamic(() => import('./SubHeaderSubscription'));

const SubHeaderDefault = ({
  title,
  subtitle,
  backgroundImage,
  keyContacts,
  officeInfo,
  locations,
  slides,
  slidesLabel,
  isContactButtonInCardsSlider,
  menu,
  isSubscription,
  isLocationTabs = false,
  handlePrint,
  isSocials,
}) => (
  <SubHeaderHolder
    className={`sub-header ${
      !backgroundImage ? 'sub-header--without-image' : ''
    } ${menu ? 'sub-header--menu' : ''} ${
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

      {isSocials && (
        <div className="sub-header__socials">
          <Socials />
        </div>
      )}
    </SubHeaderContent>

    {!empty(keyContacts) && (
      <SubHeaderKeyContacts
        keyContacts={keyContacts}
        handlePrint={handlePrint}
      />
    )}
    {!empty(locations) && (
      <SubHeaderLocations
        locations={locations}
        title={title}
        officeInfo={officeInfo}
        isLocationTabs={isLocationTabs}
      />
    )}
    {!empty(slides) && (
      <SubHeaderCardsSlider
        slides={slides}
        slidesLabel={slidesLabel}
        isContact={isContactButtonInCardsSlider}
      />
    )}
    {!empty(menu) && <SubHeaderMenu menu={menu} />}

    {isSubscription && <SubHeaderSubscription />}
  </SubHeaderHolder>
);

export default SubHeaderDefault;
