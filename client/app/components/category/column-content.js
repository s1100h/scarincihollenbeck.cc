import Link from 'next/link';
import SubscriptionFormColumn from '../subscription-form-column';

export default function ColumnContent({
  colOneTitle,
  colOneContent,
  colTwoTitle,
  colTwoContent,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-3 border-right">
          <h5 className="red-title">{colOneTitle}</h5>
          <hr />
          <ul className="ml-0 mh-75">
            {colOneContent.map((v) => (
              <li key={v.title || v.name} className="blue-title ml-3">
                <a href={v.link || v.slug} className="blue-title proxima-bold mb-0">
                  {v.title || v.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 border-right">
          <h5 className="red-title">{colTwoTitle}</h5>
          <hr />
          <ul className="ml-0 mh-75">
            {colTwoContent.map((v) => (
              <li key={v.name || v.title} className="blue-title ml-3">
                <a href={v.link || v.slug} className="blue-title proxima-bold mb-0">
                  {v.name || v.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-12 col-md-5">
          <h5 className="red-title">Join our mailing list!</h5>
          <hr />
          <div className="ModalForm-main">
            <p className="text-center text-muted small-excerpt mb-2">Enter your email and select a category(s) below.</p>
            <SubscriptionFormColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
