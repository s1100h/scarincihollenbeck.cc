import Link from 'next/link';

export default function ContactBtn({ link }) {
  return (
    <Link href={link}>
      <a className="btn btn-danger p-1 my-3">
        <strong>Get in touch</strong>
        <style jsx>{' a { font-size: 1.2rem; width: 150px;} '}</style>
      </a>
    </Link>
  );
}
