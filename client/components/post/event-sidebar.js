import Link from 'next/link';
import Image from 'next/image';
import Search from 'components/search';
import SubscriptionMessage from 'components/subscription-message';
import { createMarkup } from 'utils/helpers';
import styles from 'styles/SidebarTitle.module.css';

export default function PostsEventSidebar({ attorneys, eventDetails }) {
  const eDetails = eventDetails[0];

  return (
    <div className="d-print-none">
      <Search />
      <div className="w-100 mt-4">
        <div className={styles.header}>Event Details</div>
        <div className="off-white">
          {eDetails && (
            <div className="p-3">
              <strong>
                <span
                  dangerouslySetInnerHTML={createMarkup(eDetails.address)}
                />
              </strong>
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
            </div>
          )}
        </div>
      </div>
      {/** MENTIONED ATTORNEYS */}
      {attorneys.length > 0 && (
        <div className="w-100 mt-4">
          <div className={styles.header}>Mentioned Attorneys</div>
          <div className="off-white">
            <ul className="list-unstyled px-1 mx-1">
              {attorneys.map((a) => (
                <li key={a.name} className="py-3">
                  <Link href={a.link}>
                    <a className="m-attorneys d-flex flex-row text-dark">
                      <div className="mx-2 d-block">
                        <Image
                          src={a.image}
                          alt={a.name}
                          width={49}
                          height={67}
                          layout="intrinsic"
                        />
                      </div>
                      <div className="ml-2">
                        <h5 className="mb-0">
                          <strong>{a.name}</strong>
                        </h5>
                        <p>{a.designation}</p>
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/** GET THE LATEST FROM OUR ATTORNEYS */}
      <SubscriptionMessage />
    </div>
  );
}
