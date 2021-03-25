import Link from 'next/link';
import Error from 'next/error';
import AttorneyProfile from 'layouts/attorney-profile';
import AttorneyContactForm from 'components/singleattorney/attorney-contact-form';
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
                  Contact Information
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
                  <a href={contact.pdf} download>
                    <strong>
                      <u>Download profile</u>
                    </strong>
                  </a>
                </p>
                <p className="mb-0">
                  <a href={contact.vizibility} download>
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
                        <a>
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
      Contact form :)
    </>
  );
}

export async function getServerSideProps({ params, res }) {
  // modify single attorney endpoint to grab specific content
  // do some major refactoring on the single attorney bio API endpoint
  const [bio, contact] = await Promise.all([
    fetch(
      `http://localhost:8000/wp-json/attorney-profile/main/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
    fetch(
      `http://localhost:8000/wp-json/attorney-profile/contact/${params.slug}`,
      { headers },
    ).then((data) => data.json()),
  ]);

  if (!contact) {
    res.statusCode = 404;

    return {
      props: {
        contact,
        bio,
      },
    };
  }

  return {
    props: {
      contact,
      bio,
    },
  };
}
