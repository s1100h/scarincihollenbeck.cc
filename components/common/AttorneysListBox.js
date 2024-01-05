import { AttorneysContainer } from 'styles/AttorneysListBox.style';
import {
  Fragment, useEffect, useRef, useState,
} from 'react';
import AttorneyEntAndMediaCard from 'components/molecules/ent-and-media/AttorneyEntAndMediaCard';
import AttorneyPracticeCard from '../molecules/practice/AttorneyPracticeCard';
import useStateScreen from '../../hooks/useStateScreen';
import AttorneyCard from '../shared/AttorneyCard';
import AttorneyCannabisCard from '../molecules/cannabis-law/AttorneyCannabisCard';

const CardVariantsMap = {
  default: AttorneyPracticeCard,
  cannabis: AttorneyCannabisCard,
  entandmedia: AttorneyEntAndMediaCard,
};
const renderCardsByVariants = (variant, propsCard, cardsMap) => {
  const AttorneysCardVariable = cardsMap[variant];
  return <AttorneysCardVariable {...propsCard} />;
};

const AttorneysListBox = ({
  attorneys,
  variant = 'default',
  handleCardParams,
  handleCardGap,
}) => {
  const { chairs, attorneysList } = attorneys;
  const { isMobileScreen } = useStateScreen();
  const [cardIdHovered, setCardIdHovered] = useState();
  const isDefault = variant.includes('default') ? 'true' : '';
  const contRef = useRef();

  useEffect(() => {
    if (handleCardGap && contRef.current) {
      const compStyle = getComputedStyle(contRef.current);
      const gap = compStyle.getPropertyValue('gap');
      handleCardGap(parseInt(gap, 10));
    }
  }, [handleCardGap]);

  return (
    <AttorneysContainer isNotDefault={isDefault} ref={contRef}>
      {chairs?.length > 0 && (
        <div className="chair-box">
          <h3>Chair</h3>
          <div>
            {isMobileScreen && !isDefault
              ? chairs?.map((chair) => (
                <AttorneyCard
                  key={chair.databaseId}
                  link={`${chair.link}`}
                  image={chair.profileImage}
                  name={chair.title}
                  designation={chair.designation}
                  officeLocations={chair.officeLocation}
                  number={chair.phoneNumber}
                  email={chair.email}
                  width={80}
                  height={112}
                  type="/attorneys/[slug]"
                />
              ))
              : chairs?.map(
                ({
                  databaseId,
                  link,
                  profileImage,
                  title,
                  designation,
                  officeLocation,
                  phoneNumber,
                  email,
                }) => (
                  <Fragment key={databaseId}>
                    {renderCardsByVariants(
                      variant,
                      {
                        classNameProp: 'vertical-attorney-card',
                        key: databaseId,
                        link,
                        image: profileImage,
                        name: title,
                        designation,
                        officeLocations: officeLocation,
                        number: phoneNumber,
                        email,
                        width: 180,
                        height: 210,
                        setterId: setCardIdHovered,
                        cardIdHovered,
                        databaseId,
                        handleCardParams,
                      },
                      CardVariantsMap,
                    )}
                  </Fragment>
                ),
              )}
          </div>
        </div>
      )}

      {attorneysList?.length > 0 && (
        <div className="attorneys-list-box">
          <h3>Attorneys</h3>
          <div>
            {isMobileScreen && !isDefault
              ? attorneysList.map((attorney) => (
                <AttorneyCard
                  key={attorney.databaseId}
                  link={`${attorney.link}`}
                  image={attorney.profileImage}
                  name={attorney.title}
                  designation={attorney.designation}
                  officeLocations={attorney.officeLocation}
                  number={attorney.phoneNumber}
                  email={attorney.email}
                  width={80}
                  height={112}
                  type="/attorneys/[slug]"
                />
              ))
              : attorneysList.map(
                ({
                  databaseId,
                  link,
                  profileImage,
                  title,
                  designation,
                  officeLocation,
                  phoneNumber,
                  email,
                }) => (
                  <Fragment key={databaseId}>
                    {renderCardsByVariants(
                      variant,
                      {
                        classNameProp: 'vertical-attorney-card',
                        key: databaseId,
                        link,
                        image: profileImage,
                        name: title,
                        designation,
                        officeLocations: officeLocation,
                        number: phoneNumber,
                        email,
                        width: 180,
                        height: 210,
                        setterId: setCardIdHovered,
                        cardIdHovered,
                        databaseId,
                        handleCardParams,
                      },
                      CardVariantsMap,
                    )}
                  </Fragment>
                ),
              )}
          </div>
        </div>
      )}
    </AttorneysContainer>
  );
};

export default AttorneysListBox;
