import Image from 'next/image'
import styles from 'styles/ProfileImage.module.css'

const ProfileImage = ({ image, name, width, height }) => (
  <Image
    src={image}
    alt={name}
    width={width}
    height={height}
    layout="intrinsic"
    className={`${styles.whiteBorderTransparent} mb-3 animate__animated animate__fadeInUp animate__fast`}
  />
);

export default ProfileImage;
