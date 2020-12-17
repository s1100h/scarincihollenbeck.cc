import Link from 'next/link';

export default function Practices({ corePractices }) {
  return (
    <div>
      <h4 className="red-title h5">Core Practices</h4>
      <hr />
      <ul className="ml-4" role="navigation">
        { corePractices.map((p) => (
          <li key={p.title} className="blue-title">
            <Link href="/practices/[slug]" as={p.slug}>
              <a className="blue-title proxima-bold">
                {p.title}
              </a>
            </Link>
          </li>
        )) }
      </ul>
      <Link href="/practices">
        <a className="red-title proxima-bold">
          <u>
            All Practices &gt;&gt;
          </u>
        </a>
      </Link>
    </div>
  );
}
