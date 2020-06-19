import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { createMarkup } from '../../utils/helpers';

export default function AboutAuthor(props) {
  const { bio } = props;

  return (
    <div className="w-100 mt-5">
      <div className="sidebar-title">
        About
        {' '}
        {bio.map((b) => b.name)}
      </div>
      <div className="off-white">
        { bio.map((b) => (
            <span className="py-2 mx-3 d-block" key={b.name}>
              <img src={b.image} alt={b.name} className="img-thumbnail" />
              <p className="mt-1 mb-0">
                <FontAwesomeIcon icon={faPhone} className="mw-12"/>
                {' '}
                <a href={`mailto:${b.email}`} className="proxima-bold text-dark">{b.email}</a>
              </p>
              <p className="my-0">
                <FontAwesomeIcon icon={faEnvelope} className="mw-12"/>
                {' '}
                {b.phone}
              </p>
              <div dangerouslySetInnerHTML={createMarkup(b.bioContent)} className="mt-2" />
              <Link href={b.link}>
                <a className="red-title proxima-bold mt-2">Full Bio &gt;&gt;</a>
              </Link>              
            </span>
        ))}
      </div>
    </div>
  );
}