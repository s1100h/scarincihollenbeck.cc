import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import AboutAuthorFormCard from 'components/organisms/post/AboutAuthorFormCard';
import PostBreadCrumbs from 'components/organisms/post/PostBreadcrumbs';
import AttorneyCard from 'components/shared/AttorneyCard';
import Image from 'next/image';
import {
  DefaultSubHeaderContent,
  DefaultSubHeaderDescription,
  DefaultSubHeaderHolder,
  DefaultSubHeaderKeyContacts,
  DefaultSubHeaderKeyContactsCards,
} from 'styles/practices/DefaultSubHeader.style';
import { changeTitle } from 'utils/helpers';
import empty from 'is-empty';
import CurrentOfficeCard from '../../components/molecules/location/CurrentOfficeCard';
import { globalColor } from '../../styles/global_styles/Global.styles';
import OfficesLinkTabs from '../../components/molecules/location/OfficesLinkTabs';

const DefaultSubHeaderNew = ({
  title,
  subtitle,
  isBlog,
  isHoliday,
  isFilter,
  backgroundImage,
  keyContacts,
  officeInfo,
  locations,
}) => (
  <DefaultSubHeaderHolder
    props={{
      isHoliday,
      isBlog,
      isFilter,
    }}
  >
    {/* изменить на данные которые будут приходить с бэка */}
    <div className="sub-header__image">
      <Image
        src={backgroundImage || '/images/no-image-found-diamond-750x350.png'}
        alt={title}
        width={1400}
        height={900}
      />
    </div>

    <DefaultSubHeaderContent>
      <PostBreadCrumbs />

      <div className="sub-header__text">
        <JSXWithDynamicLinks HTML={changeTitle(title, true)} />

        {subtitle?.length > 0 && (
        <DefaultSubHeaderDescription className="animate__animated animate__fadeInUp animate__fast sub-title">
          <JSXWithDynamicLinks HTML={subtitle} />
        </DefaultSubHeaderDescription>
        )}
      </div>
    </DefaultSubHeaderContent>

    <DefaultSubHeaderKeyContacts>
      {!empty(keyContacts) ? (
        <>
          <h3>Key Contacts</h3>
          <DefaultSubHeaderKeyContactsCards>
            {keyContacts?.slice(0, 2)?.map((keyContact, index) => (
              <AttorneyCard
                key={keyContact.databaseId}
                link={keyContact.uri || keyContact.link}
                name={keyContact.display_name || keyContact.title}
                designation={keyContact.designation}
                image={keyContact.profileImage}
                number={keyContact.phoneNumber}
                email={keyContact.email}
                width={300}
                height={300}
              />
            ))}
          </DefaultSubHeaderKeyContactsCards>
          <AboutAuthorFormCard blockName="subheader" />
        </>
      ) : (
        <div className="d-flex gap-4">
          <CurrentOfficeCard
            {...officeInfo}
            backgroundColor={globalColor.blue.darkUltramarine}
          >
            <h3 className="current-office-card-title">{title}</h3>
          </CurrentOfficeCard>
          {locations?.length > 0 && (
          <OfficesLinkTabs officesForTabs={locations} isBlueVariant />
          )}
        </div>
      )}
    </DefaultSubHeaderKeyContacts>
  </DefaultSubHeaderHolder>
);

export default DefaultSubHeaderNew;
