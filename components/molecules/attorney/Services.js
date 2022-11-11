import Link from 'next/link';

const Services = ({ services }) => (
  <>
    <p className="fs-1_2rem">
      <strong>How I can help</strong>
    </p>
    <ul>
      {services.map((service) => (
        <li key={service.title} className="list-unstyled">
          <Link href={service.link}>
            <a className="text-dark">{service.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        ul {
          margin-left: -2.48em;
          margin-top: -10px;
        }

        ul li {
          margin-bottom: 7px;
        }
      `}
    </style>
  </>
);

export default Services;
