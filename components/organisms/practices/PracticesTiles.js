import empty from 'is-empty';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { BsChevronDown } from 'react-icons/bs';
import { useRouter } from 'next/router';
import {
  PracticesTilesContainer,
  PracticeTile,
  ShowMoreBtn,
} from '../../../styles/Practices.style';
import {
  Back,
  Front,
} from '../../../styles/attorney-page/AttorneyProfile.style';
import useStateScreen from '../../../hooks/useStateScreen';

const renderPracticesList = (
  practices,
  title,
  uri,
  isShowMoreArg,
  handleShowMoreCallBack,
) => (
  <div className="practices-children-list">
    <h6>{title}</h6>
    <ul>
      <li>
        <Link href={uri}>{`${title} overview`}</Link>
      </li>
      {practices.map(({ databaseId, uri, title }) => (
        <li key={databaseId}>
          <Link href={uri}>
            {' '}
            {title}
          </Link>
        </li>
      ))}
    </ul>
    {practices.length > 7 && (
      <ShowMoreBtn
        isRotateChevron={isShowMoreArg ? 'true' : ''}
        onClick={handleShowMoreCallBack}
      >
        Show
        {isShowMoreArg ? ' less' : ' more'}
        <BsChevronDown />
      </ShowMoreBtn>
    )}
  </div>
);

const PracticesTiles = ({ practicesList }) => {
  const [isTileRotateId, setTileRotateId] = useState();
  const [isShowMore, setSowMore] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { isBigTabletScreen, isMobileScreen } = useStateScreen();
  const router = useRouter();
  const handleShowMore = (e) => {
    e.stopPropagation();
    setSowMore(!isShowMore);
  };

  const openList = (id) => {
    setTileRotateId(id);
    setIsDropDownOpen(true);
    setSowMore(false);
  };

  const handleClickByTile = (tileId) => {
    if (isDropDownOpen && isMobileScreen) {
      setIsDropDownOpen(false);
      setTileRotateId(undefined);
      return;
    }

    return isMobileScreen || isBigTabletScreen ? openList(tileId) : undefined;
  };

  const handleClickByFront = (url) => {
    router.push(url);
  };

  return (
    <PracticesTilesContainer>
      <ul>
        {practicesList.map(
          ({
            databaseId, childPractice, uri, title, practiceImage,
          }) => (
            <Fragment key={databaseId}>
              <PracticeTile
                isOpenListPractice={isDropDownOpen}
                isRotateCard={isTileRotateId === databaseId ? 'true' : ''}
                isSowMoreProp={
                  isShowMore && isTileRotateId === databaseId ? 'true' : ''
                }
              >
                {!empty(childPractice) ? (
                  <>
                    <Front
                      isRotateProp={
                        !isMobileScreen
                          ? isTileRotateId === databaseId
                            ? 'true'
                            : ''
                          : ''
                      }
                      onMouseEnter={
                        !isBigTabletScreen
                          ? () => setTileRotateId(databaseId)
                          : undefined
                      }
                      onClick={() => handleClickByTile(databaseId)}
                    >
                      <Image
                        src={
                          !empty(practiceImage?.sourceUrl)
                            ? practiceImage?.sourceUrl
                            : 'images/no-image-found-diamond-750x350.png'
                        }
                        alt={title}
                        width={395}
                        height={280}
                      />
                      <div className="light-title">
                        {title}
                        <BsChevronDown />
                      </div>
                      {renderPracticesList(
                        childPractice,
                        title,
                        uri,
                        isShowMore,
                        handleShowMore,
                      )}
                    </Front>
                    <Back
                      isRotateProp={isTileRotateId === databaseId ? 'true' : ''}
                      onMouseLeave={
                        !isBigTabletScreen
                          ? () => {
                            setTileRotateId(undefined);
                            setSowMore(false);
                          }
                          : undefined
                      }
                      onClick={
                        isBigTabletScreen
                          ? () => {
                            setTileRotateId(undefined);
                            setSowMore(false);
                          }
                          : undefined
                      }
                    >
                      {renderPracticesList(
                        childPractice,
                        title,
                        uri,
                        isShowMore,
                        handleShowMore,
                      )}
                    </Back>
                  </>
                ) : (
                  <>
                    <Front onClick={() => handleClickByFront(uri)}>
                      <Image
                        src={
                        !empty(practiceImage?.sourceUrl)
                          ? practiceImage?.sourceUrl
                          : 'images/no-image-found-diamond-750x350.png'
                      }
                        alt={title}
                        width={395}
                        height={280}
                      />
                      <div className="light-title">
                        {title}
                      </div>
                    </Front>
                    <Back />
                  </>
                )}
              </PracticeTile>
            </Fragment>
          ),
        )}
      </ul>
    </PracticesTilesContainer>
  );
};

export default PracticesTiles;
