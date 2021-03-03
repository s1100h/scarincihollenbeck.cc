import ListGroup from 'react-bootstrap/ListGroup';

export default function SidebarLinks({ links }) {
  return (
    <ListGroup className="mt-4" variant="flush">
      {links && links.map((link) => (
        <ListGroup.Item key={link.title}>
          <a className="text-dark" href={`#${link.title.toLowerCase().replace(/\s/g, '-')}`} style={{ fontSize: '1.3rem' }}>
            <strong>{link.title}</strong>
          </a>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
