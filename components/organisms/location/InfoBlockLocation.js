import empty from 'is-empty';
import { Fragment, useState } from 'react';
import {
  InfoContainer,
  PracticesLocationBox,
} from '../../../styles/InfoBlockLocation.style';
import ArticleWithContent from '../../molecules/location/ArticleWithContent';
import DropdownMenu from '../../common/DropdownMenu';

const InfoBlockLocation = ({ practices, articles }) => {
  const [isSecondLvl, setIsSecondLvl] = useState(false);
  const [secondLvlData, setSecondLvlData] = useState([]);

  const handleClickFirstLvl = (data) => {
    if (!empty(data)) {
      setIsSecondLvl(true);
      setSecondLvlData(data);
    } else {
      setIsSecondLvl(false);
      setSecondLvlData([]);
    }
  };
  return (
    <InfoContainer>
      {!empty(practices)
        && articles.map(
          ({
            id, article, image, reactComponent, isBackgroundImage,
          }) => (
            <>
              {typeof reactComponent === 'string'
              && reactComponent?.includes('custom') ? (
                <PracticesLocationBox>
                  <DropdownMenu
                    practices={practices}
                    handleClickOnMouseEnter={handleClickFirstLvl}
                    isSecondLvl={isSecondLvl}
                    secondLvlData={secondLvlData}
                  />
                </PracticesLocationBox>
                ) : (
                  <Fragment key={id}>
                    <ArticleWithContent
                      isBackgroundImage={isBackgroundImage}
                      article={article}
                      image={image}
                    >
                      {reactComponent}
                    </ArticleWithContent>
                  </Fragment>
                )}
            </>
          ),
        )}
    </InfoContainer>
  );
};

export default InfoBlockLocation;
