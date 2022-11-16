import Link from 'next/link';

const CovidResourcesBox = ({ message, title, link }) => (
  <div>
    <p className={`${fontStyles.ft12rem} mb-1`}>
      <strong>{title}</strong>
    </p>
    <p>{message}</p>
    <h5>
      <Link href={link}>
        <a className="redTitle">
          <strong>
            <u>Resources</u>
          </strong>
        </a>
      </Link>
    </h5>
  </div>
);

export default CovidResourcesBox;
