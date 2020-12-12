import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { createMarkup } from 'utils/helpers';
import styles from 'styles/SidebarTitle.module.css';
import textStyles from 'styles/Text.module.css';

export default function AuthorAbout({ bio }) {
  console.log(bio);
  return (
    <div className="w-100 mt-5">Re-think this maybe use attorney cards ??</div>
  );
}
