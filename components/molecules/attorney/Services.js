import Link from 'next/link';

const Services = ({ services }) => (
  <>
    <p className="fs-1_2rem">
      <strong>How I can help</strong>
    </p>
    <ul className="p-0">
      {services.map((service) => (
        <li key={service.title} className="list-unstyled mb-2">
          <Link href={service.link}>
            <a className="text-dark">{service.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default Services;
