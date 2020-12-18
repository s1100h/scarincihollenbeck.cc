import Image from 'next/image';
import styles from 'styles/SidebarTitle.module.css';
import SubscriptionFormWithButton from './subscription-form-with-button';

export default function SubscriptionMessage() {
  return (
    <div className="mt-4">
      <div className={`${styles.header} p-2 text-left text-white`}>
        Get the latest from our attorneys!
      </div>
      <div className="off-white">
        <div className="text-center mt-2">
          <Image
            src="/images/sh-mini-diamond-PNG.png"
            width={170}
            height={147}
            alt="Scarinci Hollenbeck diamond logo"
            layout="intrinsic"
          />
        </div>
        <p className="px-3">
          <strong>
            Please fill out our short form to get the latest articles from the
            Scarinci Hollenbeck attorneys weekly on the cutting-edge legal
            topics.
          </strong>
        </p>
        <div className="mb-3 pb-3">
          <SubscriptionFormWithButton />
        </div>
      </div>
    </div>
  );
}
