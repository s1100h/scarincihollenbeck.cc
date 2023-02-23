import Link from 'next/link';
import { OFFICE_LOCATIONS } from 'utils/constants';

export const HawCanIGet = () => (
  <>
    Call
    <a href="tel:201-806-3364"> 201-806-3364</a>
    , email
    {' '}
    <a href="mailto:info@sh-law.com">info@sh-law.com</a>
    {' '}
    or click
    <Link href="/contact" legacyBehavior>
      <a> here.</a>
    </Link>
  </>
);

export const HawDoIKnow = () => (
  <>
    Different kinds of legal matters require attention from specialized areas of law. You can
    discover the firm`s practice groups or click
    <Link href="/practices" legacyBehavior>
      <a> here </a>
    </Link>
    or if you have no idea where to begin, call
    {' '}
    <a href="tel:201-806-3364"> 201-806-3364</a>
    , email
    {' '}
    <a href="mailto:info@sh-law.com">info@sh-law.com</a>
    or click
    <Link href="/contact" legacyBehavior>
      <a> here.</a>
    </Link>
  </>
);

export const WhereIsYheFirmLocated = () => (
  <p className="d-flex gap-2">
    The firm has several office locations including
    {OFFICE_LOCATIONS.map(({ label, slug, id }) => (
      <Link key={id} href={slug} legacyBehavior>
        <a>{label}</a>
      </Link>
    ))}
  </p>
);

const corePracticesIncludeArr = [
  'Bankruptcy & Creditor`s Rights',
  'Commercial Real Estate',
  'Corporate Transactions & Business',
  'Education Law',
  'Environmental',
  'Government Strategies',
  'Intellectual Property',
  'Labor & Employment',
  'Litigation',
  'Public Law',
];

export const WhatAreTheFirms = () => (
  <>
    <ul className="p-0">
      <p className="mb-2">
        <strong>The firm`s core practices include:</strong>
      </p>
      {corePracticesIncludeArr.map((practice) => (
        <li key={practice} className="d-flex gap-2">
          <div>➢</div>
          <em>{practice}</em>
        </li>
      ))}
    </ul>
    <>
      In addition, Scarinci Hollenbeck offers a variety of niche, sub-practice groups you can learn
      more about
      <Link href="/practices" legacyBehavior>
        <a> here.</a>
      </Link>
    </>
  </>
);
