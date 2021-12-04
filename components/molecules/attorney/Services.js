import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';

const Services = ({ services }) => (
  <>
    <p className={fontStyles.ft12rem}>
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
