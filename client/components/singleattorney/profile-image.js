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
      quality={100}
      className={`${styles.whiteBorderTransparent} animate__animated animate__fadeInUp animate__fast my-5`}
      priority
      loading="eager"
    />
  );
}
