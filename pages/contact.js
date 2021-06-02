import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleSubHeader from 'layouts/single-sub-header';
import SimpleSearch from 'components/simple-search';
import SubscriptionMessage from 'components/subscription-message';
import SidebarContent from 'components/singlepractice/sidebar';
import ContactForm from 'components/contact-form';
import textStyles from 'styles/Text.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function ContactPage() {
  const firmLibrary = [
    {
      id: '9TZ8Zz7xy95BVp',
      title: 'Firm News',
      slug: 'library?category=firm-news',
    },
    {
      id: 'RMtQjkqW3jAVvC',
      title: 'Firm Events',
      slug: 'library?category=firm-events',
    },
    {
      id: 'KNDpxvUhdm73hf',
      title: 'Firm Insights',
      slug: 'library?category=firm-insights',
    },
  ];

  const firmPages = [
    {
      id: 'WF7jMpVJP3PTnuP',
      title: 'Pro Bono',
      slug: 'pro-bono',
    },
    {
      id: 'vehm0rQb7cpMH92',
      title: 'Women Lead',
      slug: 'women-lead',
    },
    {
      id: 'SjveurE3BK1R1l2',
      title: 'Community Involvement',
      slug: 'community-involvement',
    },
    {
      id: 'SjveurE7BK1R1l2',
      title: 'Diversity Group',
      slug: 'diversity-group',
    },
  ];
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
        span={7}
        offset={0}
      />
      <Container>
        <Row>
          <Col sm={12} md={9}>
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
              please get in touch with
              your
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
              If you are looking to get in touch with an attorney under the
              terms as to becoming a new client please call
              {' '}
              <strong>201-896-4100.</strong>
            </p>
            <h4 className={`${grayTitleStyles.title} mb-5`}>
              All other inquires please fill out the form below.
            </h4>
            <ContactForm />
            <style jsx>
              {' p{ font-size: 1.15rem }; strong { font-size: 1.15rem }'}
            </style>
          </Col>
          <Col sm={12} md={3} style={{ marginTop: '-1.5em' }}>
            <SimpleSearch />
            <hr />
            <SubscriptionMessage />
            <hr />
            <SidebarContent
              title="Firm Library"
              content={firmLibrary}
              tabKey={2}
            />
            <hr />
            <SidebarContent title="Firm Pages" content={firmPages} tabKey={2} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
