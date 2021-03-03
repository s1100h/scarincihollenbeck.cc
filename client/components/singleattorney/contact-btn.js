import Link from 'next/link';

export default function ContactBtn({ link, name }) {
  return (
    <Link href={link}>
      <a className="btn btn-danger p-3" style={{ fontSize: '1.5rem' }}>
        <strong>
          Contact
          {' '}
          {name}
        </strong>
      </a>
    </Link>
  );
}
