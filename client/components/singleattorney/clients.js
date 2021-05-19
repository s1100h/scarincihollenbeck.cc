import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';

export default function AttorneyProfileClients({ clients }) {
  return (
    <Row>
      {clients.map((client) => (
        <Col sm={12} md={4} className="my-4" key={client.title}>
          <Image
            alt={client.title}
            src={client.featuredImg || '/images/no-image-found-diamond.png'}
            width={200}
            height={200}
            className="rounded"
          />
        </Col>
      ))}
    </Row>
  );
}
