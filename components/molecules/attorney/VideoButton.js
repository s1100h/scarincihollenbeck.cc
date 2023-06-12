import { BsFillPlayFill, BsFillStopFill } from 'react-icons/bs';
import { VideoButtonStyled } from '../../../styles/attorney-page/AttorneyProfile.style';

const VideoButton = ({ onVideoClick, isRotated }) => (
  <VideoButtonStyled onClick={onVideoClick} isRotatedCard={isRotated ? 'true' : ''}>
    {isRotated ? <BsFillStopFill /> : <BsFillPlayFill />}
  </VideoButtonStyled>
);

export default VideoButton;
