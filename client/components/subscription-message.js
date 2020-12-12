import SubscriptionFormWithButton from './subscription-form-with-button';

export default function SubscriptionMessage() {
  return (
    <div className="w-100 mt-4">
      <div className="sidebar-title">Get the latest from our attorneys!</div>
      <div className="off-white mh-375">
        <img
          src="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/sh-mini-diamond-PNG.png"
          alt="Subscribe Scarinci Hollenbeck attorneys"
          className="mx-auto d-block py-4 w-50"
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
