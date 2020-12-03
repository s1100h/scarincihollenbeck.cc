import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { createMarkup } from 'utils/helpers';
import styles from 'styles/utils/SidebarTitle.module.css';
import textStyles from 'styles/Text.module.css';

export default function AboutAuthor({ bio }) {
  return (
    <div className="w-100 mt-5">
      <div className={styles.header}>
        About
        {' '}
        {bio.map((b) => b.name)}
      </div>
      <div className="off-white">
        { bio.map((b) => (
          <span className="py-2 mx-3 d-block" key={b.name}>
            <Image
              src={b.image}
              alt={b.name}
              width={108}
              height={151}
              layout="intrinsic"
            />
            <p className="mt-1 mb-0">
              <FontAwesomeIcon icon={faPhone} className="mw-12" />
              {' '}
              <a href={`mailto:${b.email}`} className="text-dark">{b.email}</a>
            </p>
            <p className="my-0">
              <FontAwesomeIcon icon={faEnvelope} className="mw-12" />
              {' '}
              {b.phone}
            </p>
            <div dangerouslySetInnerHTML={createMarkup(b.bioContent)} className="mt-2" />
            <strong>
              <Link href={b.link}>
                <a className={`${textStyles.redTitle} my-4`}>
                  Full Bio &gt;&gt;
                </a>
              </Link>
            </strong>
          </span>
        ))}
      </div>
    </div>
  );
}
