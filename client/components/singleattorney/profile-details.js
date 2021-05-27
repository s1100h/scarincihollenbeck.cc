import Link from 'next/link';

export default function ProfileDetails({
  chair, coChair, contact, offices,
}) {
  const { phoneNumber, email } = contact;

  return (
    <div className="d-flex flex-column">
      <div>
        {chair.length > 0 && (
          <p className="my-1">
            <strong>Chair:</strong>
            {' '}
            {chair.map((c, i) => (
              <Link href={c.link} key={c.title}>
                <a className="text-white">
                  {c.title}
                  {i < chair.length - 1 && ', '}
                </a>
              </Link>
            ))}
          </p>
        )}
      </div>
      <div>
        {coChair.map((c) => (
          <p className="my-1" key={c.title}>
            <strong>Co-Chair:</strong>
            {' '}
            <Link href={c.link} key={c.title}>
              <a className="text-white">
                {c.title}
                {' '}
                Section
              </a>
            </Link>
          </p>
        ))}
      </div>
      <div>
        <p className="my-1">
          <strong>Phone:</strong>
          {' '}
          {phoneNumber}
        </p>
        <p className="my-1">
          <strong>Email:</strong>
          {' '}
          {email}
        </p>
      </div>
      <div>
        <p className="my-1">
          <strong>Offices:</strong>
          {' '}
          {offices.map((o, i) => (
            <Link href={o.link} key={o.ID}>
              <a className="text-white">
                {o.name}
                {i !== offices.length - 1 && ', '}
              </a>
            </Link>
          ))}
        </p>
      </div>
      <style jsx>{'strong{font-size: 1.1rem}'}</style>
    </div>
  );
}
