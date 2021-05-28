import Link from 'next/link';
import { NextSeo } from 'next-seo';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import ContactForm from 'components/contact-form';
import textStyles from 'styles/Text.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function ContactPage() {
  return (
    <>
      <NextSeo
        title="Contact | Scarinci Hollenbeck"
        description="Contact an attorney at Scarinci Hollenbeck, business law firm, at their offices in Lyndhurst NJ, New York City, Red Bank, Washington D.C."
        canonical="http://scarincihollenbeck.com/contact"
      />
      <SingleSubHeader
        title="Contact Us"
        subtitle="Looking To Get In Touch With Someone At Scarinci Hollenbeck? Feel free to navigate to any one of our directory pages or fill out the form below."
        span={8}
        offset={2}
      />
      <FullWidth>
        <div className="w-100">
          <p>
            <strong>For media inquiries,</strong>
            {' '}
            please visit
            {' '}
            <Link href="/library?category=law-firm-insights">
              <a className={textStyles.redTitle}>
                <u>Firm Insights.</u>
              </a>
            </Link>
            {' '}
            <strong>For job opportunities,</strong>
            {' '}
            please visit our
            {' '}
            <Link href="/careers">
              <a className={textStyles.redTitle}>
                <u>Careers page.</u>
              </a>
            </Link>
          </p>
          <p>
            <strong>If you are a client,</strong>
            {' '}
            please get in touch with your
            <Link href="/attorneys">
              <a className={textStyles.redTitle}>
                {' '}
                <u>Scarinci Hollenbeck attorney</u>
              </a>
            </Link>
            {' '}
            contact directly.
          </p>
          <p className="mb-4">
            If you are looking to get in touch with an attorney under the terms
            as to becoming a new client please call
            {' '}
            <strong>201-896-4100.</strong>
          </p>
          <h4 className={`${grayTitleStyles.title} mb-5`}>
            All other inquires please fill out the form below.
          </h4>
          <ContactForm />
        </div>
        <style jsx>{'p { font-size: 1.3rem }; strong { font-size: 1.3rem }'}</style>
      </FullWidth>
    </>
  );
}
