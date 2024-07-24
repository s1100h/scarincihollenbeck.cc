import { useEffect, useRef, useState } from 'react';
import empty from 'is-empty';
import ModalWindow from 'components/common/ModalWindow';
import Image from 'next/image';
import {
  CardImageVideoContainer,
  CardImageWrapper,
  CardVideoWrapper,
} from '../../../styles/attorney-page/AttorneyProfile.style';
import VideoButton from './VideoButton';

const ProfileImage = ({ name, profileImage, representativeVideo }) => {
  const videoRef = useRef(null);
  const [isShowVideo, setIsShowVideo] = useState(false);

  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (isShowVideo && videoRef) {
      videoRef.current.play();
    } else {
      stopVideo();
    }
  }, [isShowVideo]);

  const handleClickVideoOpener = () => {
    setIsShowVideo(true);
  };

  // representativeVideo = {
  //   mimeType: 'video/mp4',
  //   link: 'https://res.cloudinary.com/scarinci-hollenbeck/video/upload/v1670960800/Holiday Video.mp4?_i=AA',
  // };

  return (
    <CardImageVideoContainer>
      <CardImageWrapper>
        <Image
          src={profileImage}
          alt={name}
          width={743}
          height={795}
          layout="intrinsic"
          quality={100}
          className="animate__animated animate__fadeInUp animate__fast"
          priority
          loading="eager"
        />
      </CardImageWrapper>
      {!empty(representativeVideo) && (
        <ModalWindow isOpen={isShowVideo} setOpenModal={setIsShowVideo}>
          <CardVideoWrapper>
            <video ref={videoRef} preload="metadata" controls>
              <source
                type={representativeVideo.mimeType}
                src={representativeVideo.link}
              />
              <track kind="captions" srcLang="en" label="English" />
              Your browser does not support the video tag.
            </video>
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
