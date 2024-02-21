import empty from 'is-empty';
import { Fragment, useState } from 'react';
import {
  InfoContainer,
  PracticesLocationBox,
} from '../../../styles/InfoBlockLocation.style';
import ArticleWithContent from '../../molecules/location/ArticleWithContent';
import DropdownMenu from '../../common/DropdownMenu';
import MobileMenu from '../Navbar/MobileMenu/MobileMenu';
import useStateScreen from '../../../hooks/useStateScreen';

const InfoBlockLocation = ({ practices, articles, anchorData }) => {
  const [isSecondLvl, setIsSecondLvl] = useState(false);
  const [secondLvlData, setSecondLvlData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const { isMobileScreen } = useStateScreen();
  const handleClickFirstLvl = (data) => {
    if (!empty(data)) {
      setIsSecondLvl(true);
      setSecondLvlData(data);
    } else {
      setIsSecondLvl(false);
      setSecondLvlData([]);
    }
  };

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <InfoContainer id={anchorData} className="margin-scroll">
      {!empty(practices)
        && articles.map(
          ({
            id, article, image, reactComponent, isBackgroundImage,
          }) => (
            <Fragment key={id}>
              {typeof reactComponent === 'string'
              && reactComponent?.includes('custom') ? (
                <PracticesLocationBox>
                  {isMobileScreen ? (
                    <MobileMenu
                      title="How can we help?"
                      justPractice
                      show={showMenu}
                      handleClose={handleCloseMenu}
                      handleShow={handleShowMenu}
                      practices={practices}
                    />
                  ) : (
                    <DropdownMenu
                      title="How can we help?"
                      practices={practices}
                      handleClickOnMouseEnter={handleClickFirstLvl}
                      isSecondLvl={isSecondLvl}
                      secondLvlData={secondLvlData}
                    />
                  )}
                </PracticesLocationBox>
                ) : (
                  <ArticleWithContent
                    isBackgroundImage={isBackgroundImage}
                    article={article}
                    image={image}
                  >
                    {reactComponent}
                  </ArticleWithContent>
                )}
            </Fragment>
          ),
        )}
    </InfoContainer>
  );
};

export default InfoBlockLocation;
