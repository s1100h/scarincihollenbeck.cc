import Image from 'next/image';
import SubscriptionFormWithButton from './subscription-form-with-button';

export default function SubscriptionMessage() {
  return (
    <div className="w-100 mt-4">
      <div className="sidebar-title">Get the latest from our attorneys!</div>
      <div className="off-white mh-375">
        <Image
          src="/images/sh-mini-diamond-PNG.png"
          width={170}
          height={147}
          alt="Scarinci Hollenbeck diamond logo"
          layout="intrinsic"
        />
        <p className="proxima-bold text-center px-3">
          Please fill out our short form to get the latest articles from the
          Scarinci Hollenbeck attorneys weekly on the cutting-edge legal topics.
        </p>
        <SubscriptionFormWithButton />
      </div>
    </div>
  );
}
