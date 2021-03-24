import Link from 'next/link';

export default function ContactBtn({ link }) {
  return (
    <Link href={link}>
      <a className="btn btn-danger w-75 py-3">
        <strong>Get in touch</strong>
        <style jsx>{' a { font-size: 1.5rem; } '}</style>
      </a>
    </Link>
  );
}
