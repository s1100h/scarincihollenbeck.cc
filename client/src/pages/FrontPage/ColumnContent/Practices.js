import React from 'react';

const Practices = () => (
<div>
<h5 className="red-title">Core Practices</h5>
  <hr />
  <ul className="ml-4">
    <li>
      <a href={`/practice/commercial-real-estate/`} className="blue-title proxima-bold">Commercial Real Estate</a>
    </li>
    <li>
      <a href={`/practice/corporate-transactions-business/`} className="blue-title proxima-bold">Corporate Transactions & Business</a>
    </li>
    <li>
      <a href={`/practice/environmental-and-land-use/`} className="blue-title proxima-bold">Environmental & Land Use</a>
    </li>
    <li>
      <a href={`/practice/intellectual-property/`} className="blue-title proxima-bold">Intellectual Property</a>
    </li>
    <li>
      <a href={`/practice/labor-employment/`} className="blue-title proxima-bold">Labor & Employment</a>
    </li>
    <li>
      <a href={`/practice/litigation/`} className="blue-title proxima-bold">Litigation</a>
    </li>
    <li>
      <a href={`/practice/tax-trusts-estates/`} className="blue-title proxima-bold">Tax, Trust & Estates</a>
    </li>
    <li>
      <a href={`/practice/public-law/`} className="blue-title proxima-bold">Government & Law</a>
    </li>
  </ul>
  <a href={`/practices`} className="red-title proxima-bold">
    <u>
      All Practices &gt;&gt;
    </u>
  </a>
</div>
);

export default Practices;
