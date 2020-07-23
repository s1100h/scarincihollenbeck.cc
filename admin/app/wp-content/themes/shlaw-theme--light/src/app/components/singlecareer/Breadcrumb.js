import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';

export default function BreadCrumb(props) {
  const { title } = props;

  return (
    <>
      <a className="red-title proxima-bold h6" href="/">
          HOME
        </a>
      <strong className="text-black mt-2 mx-2 proxima-bold">
        <FontAwesomeIcon icon={faCaretRight} className="red-title icon-w8px-h20px" />
      </strong>
      <a className="red-title proxima-bold" href="/careers">
          CAREERS
        </a>
      <strong className="text-black mt-2 mx-2 proxima-bold">
        <FontAwesomeIcon icon={faCaretRight} className="red-title icon-w8px-h20px" />
      </strong>
      <a className="red-title proxima-bold text-uppercase" href="/">
        {title}
      </a>
    </>
  );
}