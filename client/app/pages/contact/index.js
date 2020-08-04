import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Footer from 'components/footer';
import SingleSubHeader from 'layouts/single-sub-header';
import FullWidth from 'layouts/full-width';
import ContactForm from 'components/contact-form';
import { headers } from 'utils/helpers';

export default function Contact() {
  const seo = {
    title: 'Contact | Scarinci Hollenbeck',
    metaDescription: 'Contact an attorney at Scarinci Hollenbeck, business law firm, at their offices in Lyndhurst NJ, New York City, Red Bank, Washington D.C.',
    canonicalLink: 'contact',
  };

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.metaDescription}
        canonical={`http://scarincihollenbeck.com/${seo.canonicalLink}`}
      />
      <div id="contact">
        <SingleSubHeader
          title="Contact Us"
          subtitle="Looking To Get In Touch With Someone At Scarinci Hollenbeck? Feel free to navigate to any one of our directory pages or fill out the form below."
          image="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/05/Skyscrapers-up-1800x400-JPG.jpg"
          height="325px"
        />
        <FullWidth>
          <div className="w-100">
            <p className="lead">
              For media inquiries, please visit
              {' '}
              <Link href="/category/[slug]" as="/category/law-firm-insights">
                <a className="blue-title">
                  <u>Firm Insights.</u>
                </a>
              </Link>
              {' '}
              For job opportunities please visit our
              {' '}
              <Link href="/careers">
                <a className="blue-title">
                  <u>Careers page.</u>
                </a>
              </Link>
            </p>
            <p className="lead">
              {' '}
              If you are a client, please get in touch with your
              {' '}
              <Link href="/attorneys">
                <a className="blue-title">
                  <u>Scarinci Hollenbeck attorney</u>
                </a>
              </Link>
              {' '}
              contact directly.
            </p>
            <p className="lead">
              If you are looking to get in touch with an attorney under the terms as to becoming a new client please call 201-896-4100.
            </p>
            <h4 className="bg-light-gray">All other inquires please fill out the form below.</h4>
            <div className="w-75 mt-6">
              <ContactForm />
            </div>
          </div>
        </FullWidth>
      </div>
      <Footer />
    </>
  );
}

