import Link from 'next/link';
import Error from 'next/error';
import AttorneyProfile from 'layouts/attorney-profile';
import AttorneyContactForm from 'components/singleattorney/attorney-contact-form';
import textStyles from 'styles/Text.module.css';
import { headers } from 'utils/helpers';

export default function Contact({ contact, bio }) {
  if (!contact) {
    return <Error status={404} />;
  }

  return (
    <>
      <AttorneyProfile
        bio={bio}
        content={(
          <div>
            <div className="border-bottom pb-4">
            <h3 className="mt-3">
                <strong>
                  {bio.headerContent.name}
                  {' '}
                  contact information
                </strong>
              </h3>
              <div style={{ fontSize: '1.3rem' }} className="border p-3 mt-4">
                <p className="mb-0">
                  <strong>Phone: </strong>
                  {' '}
                  {contact.phoneNumber}
                </p>
                <p className="mb-0">
                  <strong>Email: </strong>
                  {' '}
                  {contact.email}
                </p>
                <p className="mb-0">
                  <a href={contact.pdf} className={textStyles.redTitle} download>
                    <strong>
                      <u>Download profile</u>
                    </strong>
                  </a>
                </p>
                <p className="mb-0">
                  <a href={contact.vizibility} className={textStyles.redTitle} download>
                    <strong>
                      <u>Download contact</u>
                    </strong>
                  </a>
                </p>
                <p className="mb-0">
                  <strong>Social media: </strong>
                  {contact.socialMedia.length > 0
                    && contact.socialMedia.map((item, index) => (
                      <Link href={item.url} key={item.channel}>
                        <a className={textStyles.redTitle}>
                          <u>{item.channel}</u>
                          {index < contact.socialMedia.length - 1 && ', '}
                        </a>
                      </Link>
                    ))}
                </p>
              </div>
            </div>
            <div className="border-bottom mt-4 mb-5">
              <h3>
                <strong>
                  Get in touch with
                  {' '}
                  {bio.headerContent.name}
                </strong>
              </h3>
              <AttorneyContactForm attorneyEmail={contact.email} />
            </div>
          </div>
        )}
      />
    </>
  );
}
export async function getStaticPaths() {
  const [res] = await Promise.all([
    fetch(
      'https://wp.scarincihollenbeck.com/wp-json/attorney-search/attorneys',
      { headers },
    ).then((data) => data.json()),
  ]);

  return {
    paths: res.map((a) => `/attorney${a.link}/contact`) || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // modify single attorney endpoint to grab specific content
  // do some major refactoring on the single attorney bio API endpoint
  const [bio, contact] = await Promise.all([
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/main/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `https://wp.scarincihollenbeck.com/wp-json/attorney-profile/contact/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  if (!contact) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contact,
      bio,
    },
  };
}
