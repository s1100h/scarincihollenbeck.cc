import { useRouter } from 'next/router';
import ListGroup from 'react-bootstrap/ListGroup';

export default function SidebarLinks({ links }) {
  const router = useRouter();
  console.log(router);

  return (
    <ListGroup className="mt-4" variant="flush" style={{ minWidth: '300px' }}>
      {links && links.map((l) => (
        <ListGroup.Item key={l.link}>
          <a className="text-dark" href={l.link.includes('/content/') ? `/attorney/${router.query.slug}${l.link}` : `#${l.link}`} style={{ fontSize: '1.3rem' }}>
            <strong>{l.label}</strong>
          </a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
