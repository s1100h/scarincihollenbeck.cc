import Image from 'next/legacy/image';
import { useEffect, useRef } from 'react';
import empty from 'is-empty';
import {
  Back,
  CardImageVideoContainer,
  Front,
} from '../../../styles/attorney-page/AttorneyProfile.style';

const ProfileImage = ({
  name,
  profileImage,
  isRotated,
  representativeVideo,
}) => {
  const videoRef = useRef(null);
  const stopVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  useEffect(() => {
    if (isRotated && videoRef) {
      videoRef.current.play();
    } else {
      stopVideo();
    }
  }, [isRotated]);

  const isRotateConvertToStr = isRotated ? 'true' : '';
  return (
    <CardImageVideoContainer isRotateProp={isRotateConvertToStr}>
      <Front isRotateProp={isRotateConvertToStr}>
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
      </Front>
      {!empty(representativeVideo) && (
        <Back isRotateProp={isRotateConvertToStr}>
          {isRotated && (
            /* eslint-disable-next-line jsx-a11y/media-has-caption */
            <video ref={videoRef} preload="metadata" controls>
              <source
                type={representativeVideo.mimeType}
                src={representativeVideo.link}
              />
            </video>
          )}
        </Back>
      )}
    </CardImageVideoContainer>
  );
};

export default ProfileImage;
