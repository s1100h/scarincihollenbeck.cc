import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import Link from 'next/link';
import Image from 'next/image'
import styles from 'styles/AttorneyCard.module.css'
import fontStyles from 'styles/Fonts.module.css'
import textStyles from 'styles/Text.module.css'

export default function AttorneyCard({
  link,
  image,
  name,
  title,
  number,
  email,
  type,
}) {
  return (
    <div className={`d-flex flex-row ${styles.attorneyCard}`}>
      <Link href={type} as={link}>
        <a>          
          <Image
            src={image}
            alt={name}
            width={108}
            height={148}
            fill="responsive"
          />
        </a>
      </Link>
      <div className="mt-3 ml-3">
        <Link href={type} as={link}>
          <a>
            <p className={`text-uppercase ${textStyles.redTitle} ${fontStyles.smallExcerpt}`}>
              <strong>{name}</strong>
            </p>
            <p className={`mb-1 ${fontStyles.smallExcerpt}`}>
              <strong>
                {title}
              </strong>
            </p>
          </a>
        </Link>
        <div className={fontStyles.smallExcerpt}>
          <FontAwesomeIcon icon={faPhone} className={styles.iconW8pxH20px} />
          {' '}
          {number}
          <br />
          <FontAwesomeIcon icon={faEnvelope} className={styles.iconW8pxH20px} />
          {' '}
          {email}
        </div>
      </div>
    </div>
  );
}
