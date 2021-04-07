import { NextSeo } from 'next-seo';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import SubscriptionBody from 'components/subscription-body';

export default function SubscriptionPage() {
  return (
    <>
      <NextSeo
        title="Subscribe To Firm Mailing List | Scarinci Hollenbeck"
        description="Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements."
        canonical="http://scarincihollenbeck.com/subscribe"
      />
      <SingleSubHeader
        title="Firm Mailing List"
        subtitle="Sign up now and get access to Scarinci Hollenbeck attorney's articles on cutting edge legal topics, their press releases, and firm announcements."
        image="/images/Skyscrapers-up-1800x400-JPG.jpg"
        height="390px"
      />
      <FullWidth>
        <SubscriptionBody />
      </FullWidth>
    </>
  );
}
