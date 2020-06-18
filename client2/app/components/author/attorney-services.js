import Link from 'next/link';

export default function AttorneyServices(props) {
  const { bio, practices } = props;

  return (
    <div className="w-100 mt-5">
      <div className="sidebar-title">
        {bio.map((b) => b.name)}
        {' '}
        Services
      </div>
      <div className="off-white">
        <ul className="p-1 pt-3 sidebar-content-page">
          {
          (practices) && practices.map((p) => (
            <li key={p.title}>
              <Link href={(p.link) ? p.link : p.slug}>
                <a className="proxima-bold">
                  {p.title}
                </a>
              </Link>              
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
}