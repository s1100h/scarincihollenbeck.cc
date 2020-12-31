import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
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
        image="/images/Skyscrapers-up-1800x400-JPG.jpg"
        height="390px"
      />
      <FullWidth>
        <div className="w-100">
          <p className="lead">
            For media inquiries, please visit
            {' '}
            <Link href="/category/law-firm-insights">
              <a className={textStyles.blueTitle}>
                <strong>
                  <u>Firm Insights.</u>
                </strong>
              </a>
            </Link>
            {' '}
            For job opportunities please visit our
            {' '}
            <Link href="/careers">
              <a className={textStyles.blueTitle}>
                <strong>
                  <u>Careers page.</u>
                </strong>
              </a>
            </Link>
          </p>
          <p className="lead">
            {' '}
            If you are a client, please get in touch with your
            {' '}
            <Link href="/attorneys">
              <a className={textStyles.blueTitle}>
                <strong>
                  <u>Scarinci Hollenbeck attorney</u>
                </strong>
              </a>
            </Link>
            {' '}
            contact directly.
          </p>
          <p className="lead mb-5">
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
      </FullWidth>
      <Footer />
    </>
  );
}
