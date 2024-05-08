import renderAward from 'components/atoms/micro-templates/Award';
import useStateScreen from 'hooks/useStateScreen';
import Link from 'next/link';
import React from 'react';
import {
  AwardsBox,
  SidebarTile,
  TitleAndLikBox,
} from 'styles/attorney-page/ProfileSidebar.style';
import AwardSlider from './AwardSlider';

const renderAwardsOnConditions = (
  awardsArr,
  isBigTabletScreenArg,
  isDesktopOrLaptopArg,
  renderAwardResult,
  renderAwardCallBack,
  SliderComponent,
) => {
  if (awardsArr?.length === 1 && !isBigTabletScreenArg) {
    return renderAwardResult;
  }

  if (awardsArr?.length < 3 && (isBigTabletScreenArg || isDesktopOrLaptopArg)) {
    return (
      <div>
        <ul className="d-flex gap-4 overflow-auto">
          {awardsArr.map(({ awardLink, awardImage, awardTitle }) => (
            <li key={awardTitle}>
              {renderAwardCallBack(
                awardLink,
                awardImage.sourceUrl,
                awardTitle,
                false,
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <SliderComponent awards={awardsArr} />;
};

export const ProfileSidebarAwards = ({ awards }) => {
  const { isTabletScreen, isDesktopScreen } = useStateScreen();

  return (
    <AwardsBox>
      <TitleAndLikBox>
        <SidebarTile>Awards</SidebarTile>
        <Link scroll={false} href="/awards">
          Award Methodology
        </Link>
      </TitleAndLikBox>
      {renderAwardsOnConditions(
        awards,
        isTabletScreen,
        isDesktopScreen,
        renderAward(
          awards[0]?.awardLink,
          awards[0]?.awardImage?.sourceUrl,
          awards[0]?.awardTitle,
          true,
        ),
        renderAward,
        AwardSlider,
      )}
      <div className="additional-info">
        <p className="disclaimer-sidebar">
          &quot;No Aspect of the advertisement has been approved by the Supreme
          Court&quot;
        </p>
      </div>
    </AwardsBox>
  );
};

export default ProfileSidebarAwards;
