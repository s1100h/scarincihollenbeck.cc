import Image from 'next/image';
import styles from 'styles/ProfileImage.module.css';

export default function SingleAttorneyProfileImage({ image, name }) {
  return (
    <Image
      src={image}
      alt={name}
      width={743}
      height={795}
      layout="intrinsic"
      className={`${styles.whiteBorderTransparent} mb-3 animate__animated animate__fadeInUp animate__fast`}
      priority
      loading="eager"
    />
  );
}
