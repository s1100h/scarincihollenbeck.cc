import Link from 'next/link';
import SubscriptionFormColumn from '../../components/subscription-form-column';

export default function ColumnContent(props) {
  const {
    colOneTitle, colOneContent, colTwoTitle, colTwoContent,
  } = props;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-4 border-right">
          <h5 className="red-title">{colOneTitle}</h5>
          <hr />
          <ul className="ml-0 mh-75">
            {colOneContent.map((v) => (
              <li key={v.name} className="blue-title ml-3">
                <Link href="/author/[slug]" as={v.link}>
                  <a className="blue-title proxima-bold mb-0">
                    {v.name}
                  </a>
                </Link>                
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-12 col-md-4 border-right">
          <h5 className="red-title">{colTwoTitle}</h5>
          <hr />
          <ul className="ml-0 mh-75">
            {colTwoContent.map((v) => (
              <li key={v.name} className="blue-title ml-3">
                <Link href="/category/[slug]" as={v.link}>
                  <a className="blue-title proxima-bold mb-0">
                    {v.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-12 col-md-4">
          <h5 className="red-title">Join our mailing list!</h5>
          <hr />
          <div className="ModalForm-main">
            <p className="text-center text-muted small-excerpt">Enter your email and select a category(s) below.</p>
            <SubscriptionFormColumn />
          </div>
        </div>
      </div>
    </div>
  );
}