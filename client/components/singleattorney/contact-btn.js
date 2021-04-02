import Link from 'next/link';

export default function ContactBtn({ link }) {
  return (
    <Link href={link}>
      <a className="btn btn-danger py-2 w-100">
        <strong>Get in touch</strong>
        <style jsx>{' a { font-size: 1.84rem; } '}</style>
      </a>
    </Link>
  );
}
