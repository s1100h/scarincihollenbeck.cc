import VideoIcon from 'components/common/icons/VideoIcon';
import { VideoButtonStyled } from '../../../styles/attorney-page/AttorneyProfile.style';

const VideoButton = ({ isShowVideo, onButtonClick }) => (
  <VideoButtonStyled $isShowVideo={isShowVideo} onClick={onButtonClick}>
    <span className="button-label">My representative video</span>
    <span className="button-icon">
      <VideoIcon />
    </span>
  </VideoButtonStyled>
);

export default VideoButton;
