import Image from 'next/image';

const ProfileImage = ({ name, profileImage }) => (
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
);

export default ProfileImage;
