import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import { makeTitle } from '../../utils/helpers';

export default function Breadcrumbs({title}) {

  return (
    <div className="mt-0 mb-3 d-print-none">
      <h6>
        <>
          <a href="https://scarincihollenbeck.com" className="red-title proxima-bold">
            HOME
          </a>
          <strong className="text-black mt-2 mx-2 proxima-bold">
            <FontAwesomeIcon icon={faCaretRight} className="red-title icon-w8px-h20px" />
          </strong>
        </>
        {[].map((url) => (
          <span key={url}>
            <a className="red-title proxima-bold" href={`/category/${url}`}>
                {makeTitle(url)}
              </a>
            <strong className="text-black mt-2 mx-2 proxima-bold">
              <FontAwesomeIcon icon={faCaretRight} className="red-title icon-w8px-h20px" />
            </strong>
          </span>
        ))}
        <>
        <a className="red-title proxima-bold text-uppercase" href="/category/psts">
            <u>{title}</u>
        </a>
        </>
      </h6>
    </div>
  );
}