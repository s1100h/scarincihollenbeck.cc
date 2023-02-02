import dynamic from 'next/dynamic';
import {
  BoxTitle, CentralizedBox, ContainerXXL, RowSpecial,
} from 'styles/Containers.style';

const AttorneyCard = dynamic(() => import('components/shared/AttorneyCard'));

const renderTitle = (titleArg, slugPath) => {
  const theFirmManagePartner = 'Firm Managing Partner';

  if (slugPath === '/administration') {
    return '';
  }

  return titleArg === theFirmManagePartner ? 'Firm management' : titleArg;
};

const AttorneyCards = (title, content, offices, pathname) => {
  const theFirmManagePartner = 'Firm Managing Partner';

  return (
    <ContainerXXL key={title}>
      <CentralizedBox toColumn="true">
        {renderTitle(title, pathname).length > 0 && (
          <BoxTitle isBigBoss={title === theFirmManagePartner ? 'true' : 'false'}>
            <strong>{renderTitle(title, pathname)}</strong>
          </BoxTitle>
        )}
        <RowSpecial>
          {content.map((info) => (
            <AttorneyCard
              key={info.link || info.uri}
              link={info.link ? `/attorneys${info.link}` : info.uri}
              image={info.better_featured_image || info.featuredImage}
              name={info.title}
              designation={typeof info.designation !== 'string' ? null : info.designation}
              locations={info.location_array ? info.location_array : info.designation}
              number={info.phone}
              email={info.email}
              width={80}
              height={112}
              offices={offices}
            />
          ))}
        </RowSpecial>
      </CentralizedBox>
    </ContainerXXL>
  );
};

export default AttorneyCards;
