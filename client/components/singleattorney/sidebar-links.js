import { useRouter } from 'next/router';
import ListGroup from 'react-bootstrap/ListGroup';

export default function SidebarLinks({ links }) {
  const router = useRouter();

  return (
    <ul>
      {links.map((l) => (
        <li key={l.link} className="list-unstyled">
          <a className="text-dark" href={l.link.includes('/content/') ? `/attorney/${router.query.slug}${l.link}` : `#${l.link}`}>
            {l.label}
          </a>
        </li>
      ))}
      <style jsx>
        {`
          ul {
            margin-left: -2.48em;
            margin-top: -10px;
          }

          ul li {
            margin-bottom: 6px;
          }
        `}
      </style>
    </ul>
  );
}
