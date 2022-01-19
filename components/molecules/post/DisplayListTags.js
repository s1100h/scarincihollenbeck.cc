const DisplayListTags = ({ title, children }) => (
  <div className="mb-0 d-print-none">
    <ul className="no-dots list-inline mb-1">
      <li className="list-inline-item">
        <strong>
          {title}
          :
          {' '}
        </strong>
      </li>
      {children}
    </ul>
  </div>
);

export default DisplayListTags;
