import empty from 'is-empty';
import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';
import PostBreadcrumbs from '../../components/organisms/post/PostBreadcrumbs';
import { changeTitle } from '../../utils/helpers';
import {
  MiddleContainer,
  SpecialSubHeaderContainer,
} from '../../styles/practices-special-style/SpecialSubHeader.style';
import ScrollDownArrow from '../../components/common/ScrollDownArrow';
import DescriptionPlusBtn from '../../components/organisms/cannabis-law/DescriptionPlusBtn';
import { CannabisTitles } from '../../styles/practices-special-style/canabis-law/CannabisSubHeader';
import { FullHDContainer } from '../../styles/practices-special-style/commonForSpecial.style';

const SubHeaderSpecial = ({
  title,
  subtitle,
  backgroundImage = '/images/smoke.png',
  anchorId,
  article,
  backgroundVideo,
  handleClickAnchor,
}) => (
  <SpecialSubHeaderContainer
    backgroundImage={!empty(backgroundVideo) ? backgroundImage : ''}
  >
    <FullHDContainer>
      {!empty(backgroundVideo) && (
        <video autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      <PostBreadcrumbs />
      <MiddleContainer>
        <ScrollDownArrow
          handleOnClick={handleClickAnchor}
          anchorId={anchorId}
          text="Learn more?"
        />
        <DescriptionPlusBtn modalClassName="cannabis-modal" text={article} />
      </MiddleContainer>

      <CannabisTitles>
        <JSXWithDynamicLinks HTML={changeTitle(title, true)} />
        {!empty(subtitle) && <p>{subtitle}</p>}
      </CannabisTitles>
    </FullHDContainer>
  </SpecialSubHeaderContainer>
);

export default SubHeaderSpecial;
