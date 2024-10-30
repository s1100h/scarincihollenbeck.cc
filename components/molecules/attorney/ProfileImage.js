import { useEffect, useRef, useState } from 'react';
import empty from 'is-empty';
import ModalWindow from 'components/common/ModalWindow';
import Image from 'next/image';
import { videoRender } from 'utils/videoRender';
import {
  CardImageVideoContainer,
  CardImageWrapper,
  CardVideoWrapper,
} from '../../../styles/attorney-page/AttorneyProfile.style';
import VideoButton from './VideoButton';

const ProfileImage = ({ name, profileImage, representativeVideo }) => {
  const videoRef = useRef(null);
  const [isShowVideo, setIsShowVideo] = useState(false);
  const videoData = typeof representativeVideo === 'string'
    ? representativeVideo
    : {
      type: representativeVideo?.mimeType,
      src: representativeVideo?.mediaItemUrl,
    };

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (isShowVideo && videoRef.current) {
      videoRef.current.play();
    } else {
      stopVideo();
    }
  }, [isShowVideo]);

  const handleClickVideoOpener = () => {
    setIsShowVideo(true);
  };

  return (
    <CardImageVideoContainer>
      <CardImageWrapper>
        <Image
          src={profileImage}
          alt={name || 'Profile avatar'}
          width={500}
          height={535}
          quality={100}
          sizes="(max-width: 576px) 100vw, (max-width: 992px) 324px, (max-width: 1680px) 400px, 500px"
          className="animate__animated animate__fadeInUp animate__fast"
          priority
          loading="eager"
        />
      </CardImageWrapper>
      {!empty(representativeVideo) && (
        <ModalWindow isOpen={isShowVideo} setOpenModal={setIsShowVideo}>
          <CardVideoWrapper>
            {videoRender(videoData, videoRef)}
          </CardVideoWrapper>
        </ModalWindow>
      )}

      {!empty(representativeVideo) && (
        <div className="animate__animated animate__fadeInUp animate__slow">
          <VideoButton
            isShowVideo={isShowVideo}
            onButtonClick={handleClickVideoOpener}
          />
        </div>
      )}
    </CardImageVideoContainer>
  );
};

export default ProfileImage;
