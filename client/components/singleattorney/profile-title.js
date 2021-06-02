import Link from 'next/link';

export default function ProfileTitle({
  name, designation, chair, coChair,
}) {
  return (
    <>
      <h2 className="animate__animated animate__fadeInDown animate__slow mb-0">
        <strong className="name">{name}</strong>
      </h2>
      <p className="bottom">
        {designation}
        {chair.length > 0 && (
          <>
            <span className="mx-1">
              <strong>|</strong>
            </span>
            Chair:
            {' '}
            {chair.map((c, i) => (
              <Link href={c.link} key={c.title}>
                <a className="text-white">
                  {c.title}
                  {i < chair.length - 1 && ', '}
                </a>
              </Link>
            ))}
          </>
        )}
        {coChair.length > 0 && (
          <>
            <strong className="px-2">|</strong>
            {coChair.map((c) => (
              <span className="my-1" key={c.title}>
                <strong>Co-Chair:</strong>
                {' '}
                <Link href={c.link} key={c.title}>
                  <a className="text-white">{c.title}</a>
                </Link>
              </span>
            ))}
          </>
        )}
      </p>
      <style jsx>
        {`
          p.bottom {
            margin-top: 0px;
            padding-bottom: 5px;
            border-bottom: 3.5px solid #db2220;
            font-size: 15px;
          }
        `}
      </style>
    </>
  );
}
