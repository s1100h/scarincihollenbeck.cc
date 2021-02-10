import Link from 'next/link';

export default function HomePageLink({ link, title, margins = 'my-5' }) {
  return (
    <div className={`mx-auto d-block w-100 text-center ${margins}`}>
      <Link href={link}>
        <a>
          <strong><u>{title}</u></strong>
        </a>
      </Link>
      <style jsx>
        {`
        a {
          color: #db2220;
          font-size: 1.5rem;
        }
      `}
      </style>
    </div>
  );
}
