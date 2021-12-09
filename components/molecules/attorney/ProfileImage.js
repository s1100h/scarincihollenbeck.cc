import Image from 'next/image';
import profileStyles from 'styles/ProfileImage.module.css';

const ProfileImage = ({ name, profileImage }) => (
  <Image
    src={profileImage}
    alt={name}
    width={743}
    height={795}
    layout="intrinsic"
    quality={100}
    className={`${profileStyles.whiteBorderTransparent} animate__animated animate__fadeInUp animate__fast my-5`}
    priority
    loading="eager"
  />
);

export default ProfileImage;
