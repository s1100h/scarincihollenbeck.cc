import Link from 'next/link';
import { OFFICE_LOCATIONS } from 'utils/constants';
import { useGetPracticesQuery } from '../../../redux/services/project-api';

export const HawCanIGet = () => (
  <>
    Call
    <a href="tel:201-806-3364"> 201-806-3364</a>
    , email
    <a href="mailto:info@sh-law.com"> info@sh-law.com</a>
    {' '}
    or click
    <Link href="/contact-us"> here.</Link>
  </>
);

export const HawDoIKnow = () => (
  <>
    Different kinds of legal matters require attention from specialized areas of
    law. You can discover the firm`s practice groups or click
    <Link href="/services"> here.</Link>
    or if you have no idea where to begin, call
    {' '}
    <a href="tel:201-806-3364"> 201-806-3364</a>
    , email
    {' '}
    <a href="mailto:info@sh-law.com"> info@sh-law.com </a>
    or click
    <Link href="/contact-us"> here.</Link>
  </>
);

export const WhereIsYheFirmLocated = () => (
  <p className="d-flex flex-wrap gap-2">
    The firm has several office locations including
    {OFFICE_LOCATIONS.map(({ label, slug, id }) => (
      <Link key={id} href={slug}>
        {label}
      </Link>
    ))}
  </p>
);

export const WhatAreTheFirms = () => {
  const { data: practices } = useGetPracticesQuery();
  return (
    <>
      <ul className="p-0">
        <p className="mb-2">
          <strong>The firm`s core practices include:</strong>
        </p>
        {practices?.data.map((practice) => (
          <li key={practice.databaseId}>
            <Link className="d-flex gap-2" href={practice.uri} passHref>
              <div>➢</div>
              <em>{practice.title}</em>
            </Link>
          </li>
        ))}
      </ul>
      <>
        In addition, Scarinci Hollenbeck, LLC offers a variety of niche,
        sub-practice groups you can learn more about
        <Link href="/services"> here.</Link>
      </>
    </>
  );
};
