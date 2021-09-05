import Link from 'next/link';
import fontStyles from 'styles/Fonts.module.css';
import SubscriptionMessage from 'components/shared/subscription-message';
import { createMarkup } from 'utils/helpers';

export default function PostsEventSidebar({ attorneys, eventDetails }) {
  const eDetails = eventDetails[0];

  return (
    <div className="d-print-none">
      {/** GET THE LATEST FROM OUR ATTORNEYS */}
      <SubscriptionMessage />
      <hr />
      <div className="w-100 mt-4">
        <p className={fontStyles.ft12rem}>
          <strong>Event Details</strong>
        </p>
        {eDetails && (
          <>
            <div style={{ marginTop: '-10px', marginBottom: '-15px' }}>
              <strong>
                <span dangerouslySetInnerHTML={createMarkup(eDetails.address)} />
              </strong>
            </div>
            <p>
              <strong>Date: </strong>
              {' '}
              {eDetails.date}
              <br />
              <strong>Start: </strong>
              {' '}
              {eDetails.start}
              <br />
              <strong>End: </strong>
              {' '}
              {eDetails.end}
            </p>
          </>
        )}
      </div>
      {/** MENTIONED ATTORNEYS */}
      {attorneys.length > 0 && (
        <>
          <hr />
          <div className="w-100 mt-4">
            <p className={fontStyles.ft12rem}>
              <strong>Mentioned Attorneys</strong>
            </p>
            <ul style={{ marginLeft: '-2.5em' }}>
              {attorneys.map((a) => (
                <li key={a.name} className="list-unstyled">
                  <Link href={a.link}>
                    <a className="text-dark">{a.name}</a>
                  </Link>
                  {a.designation && (
                    <div className="my-0 py-0 d-block">
                      <small>
                        <strong>Title: </strong>
                        {' '}
                        {a.designation}
                      </small>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
