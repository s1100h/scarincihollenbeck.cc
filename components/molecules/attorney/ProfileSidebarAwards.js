import renderAward from 'components/atoms/micro-templates/Award';
import useStateScreen from 'hooks/useStateScreen';
import Link from 'next/link';
import React from 'react';
import { AwardsBox, SidebarTile, TitleAndLikBox } from 'styles/attorney-page/ProfileSidebar.style';
import AwardSlider from './AwardSlider';

const renderAwardsOnConditions = (
  awardsArr,
  isBigTabletScreen,
  renderAwardResult,
  renderAwardCallBack,
  SliderComponent,
) => {
  if (awardsArr?.length === 1 && !isBigTabletScreen) {
    return renderAwardResult;
  }

  if (awardsArr?.length < 3 && isBigTabletScreen) {
    return (
      <div className="d-flex gap-4">
        {awardsArr.map(({ awardLink, awardImage, awardTitle }) => renderAwardCallBack(awardLink, awardImage.sourceUrl, awardTitle))}
      </div>
    );
  }

  return <SliderComponent awards={awardsArr} />;
};

export const ProfileSidebarAwards = ({ awards }) => {
  const { isBigTablet } = useStateScreen();

  return (
    <AwardsBox>
      <TitleAndLikBox>
        <SidebarTile>Awards</SidebarTile>
        <Link scroll={false} href="/awards">
          <a>Award Methodology</a>
        </Link>
      </TitleAndLikBox>
      {renderAwardsOnConditions(
        awards,
        isBigTablet,
        renderAward(awards[0].awardLink, awards[0].awardImage.sourceUrl, awards[0].awardTitle),
        renderAward,
        AwardSlider,
      )}
    </AwardsBox>
  );
};

export default ProfileSidebarAwards;
