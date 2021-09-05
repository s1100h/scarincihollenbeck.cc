import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import SiteLoader from 'components/shared/site-loader';
import FormScripts from 'components/shared/form-scripts';
import textStyles from 'styles/Text.module.css';
import { SITE_FORM_SLUGS, BASE_API_URL } from 'utils/constants';

function NewAttorneyNameForm({ attorney, setAttorney }) {
  return (
    <label htmlFor="attorney-name">
      <h3>
        <strong> Welcome to the firm! Please enter your name</strong>
      </h3>
      <input
        type="text"
        name="attorney-name"
        id="attorney-name"
        className="d-block p-2 mb-5 w-50"
        placeholder="Enter full name"
        value={attorney}
        onChange={(e) => setAttorney(e.target.value)}
      />
    </label>
  );
}

function OldAttorneyNameForm({ attorney, setAttorney, attorneys }) {
  return (
    <label htmlFor="attorney-selected">
      <h3>
        <strong>1. Please select your name?</strong>
      </h3>

      <select
        id="attorney-selected"
        onChange={(e) => setAttorney(e.target.value)}
        name="attorney-selected"
        className={attorney ? 'd-block p-2 mb-3' : 'd-block p-2 mb-5'}
        style={{ minWidth: '350px', borderRadius: '6px' }}
      >
        <option value="">Select attorney</option>
        <option value=" ">Name not listed</option>
        {attorneys.map((a) => (
          <option key={a.name} value={a.name}>
            {a.name}
          </option>
        ))}
      </select>
    </label>
  );
}
export default function SiteForms({ attorneys, practices, isNewAttorney }) {
  const [attorney, setAttorney] = useState('');
  const router = useRouter();
  if (router.isFallback) {
    return <SiteLoader />;
  }

  // set input form when attorney is not listed
  useEffect(() => {
    if (attorney === ' ') {
      setAttorney('');
    }
  }, [attorney]);

  return (
    <Container>
      <FormScripts />
      <NextSeo noindex title="Updating your website profile" />
      <Row>
        <Col sm={12} className="my-4">
          <h1 className={`border-bottom pb-1 mb-4 ${textStyles.redTitle}`}>
            <strong>Is Your Website Bio Updated?</strong>
          </h1>
          <p className="mt-3" style={{ fontSize: '1.8rem', lineHeight: '1.2' }}>
            <strong>
              Hello, we are seeking your input regarding your information displayed on
              Scarincihollenbeck.com.
            </strong>
          </p>
          <p>
            <em>Please take a moment to fill out the form below</em>
          </p>
          <p>
            1. Select up to five of your core practice groups that should be listed on your website
            profile
          </p>
          <p>
            2. Select any additional practices where you would like to be listed on that
            practices&apos; page
          </p>
          <div>
            <p>
              3. Your website profile will have a contact form. How do you want information
              submitted to that contact form be received?
            </p>

            <ol type="A">
              <li className="letter">By you</li>
              <li className="letter">Your secretary</li>
              <li className="letter">All the above</li>
            </ol>
          </div>
        </Col>
      </Row>
      <Row>
        <form
          className="mt-2 kwes-form"
          action="https://kwes.io/api/foreign/forms/JuFmpokXEypi5BKw2mXO"
          has-recaptcha-v3="true"
          recaptcha-site-key="6LeC96QZAAAAACJ64-6i0e-wibaQpwEpRPcnWNdY"
        >
          {isNewAttorney ? (
            <NewAttorneyNameForm attorney={attorney} setAttorney={setAttorney} />
          ) : (
            <OldAttorneyNameForm
              attorneys={attorneys}
              attorney={attorney}
              setAttorney={setAttorney}
            />
          )}

          {attorney && (
            <>
              <input
                type="hidden"
                id="attorney-emai"
                name="attorney-email"
                value={attorneys.filter((a) => a.name === attorney).map((b) => b.email)}
              />
              <p className="mb-4">
                <strong>Please follow this link to review your bio: </strong>
                {attorneys
                  .filter((a) => a.name === attorney)
                  .map((b) => (
                    <a key={b.link} href={b.link} target="_blank" rel="noopenner noreferrer">
                      {b.link}
                    </a>
                  ))}
              </p>
            </>
          )}
          <h3>
            <strong>
              2. What 5 core practices would you like to highlight on your attorney profile?
            </strong>
          </h3>
          <fieldset data-kw-group="true" rules="required">
            <ul className="col-list list-unstyled mx-0 px-0 mt-2">
              {practices.map((practice) => (
                <li key={practice} style={{ marginBottom: '5px' }}>
                  <input
                    type="checkbox"
                    id={practice
                      .replace(/\s/g, '-')
                      .replace(/[^\w\s]/gi, '')
                      .toLowerCase()}
                    name="practices-for-attorney-profiles"
                    label={practice}
                    value={practice}
                    style={{ marginBottom: '-20px' }}
                  />
                  <label htmlFor="practices-for-attorney-profiles">{practice}</label>
                </li>
              ))}
            </ul>
          </fieldset>
          <h3>
            <strong>3. What practice pages would you like to be listed on?</strong>
          </h3>
          <fieldset data-kw-group="true" rules="required">
            <ul className="col-list list-unstyled mx-0 px-0 mt-2">
              {practices.map((practice) => (
                <li key={practice} style={{ marginBottom: '5px' }}>
                  <input
                    type="checkbox"
                    id={practice
                      .replace(/\s/g, '-')
                      .replace(/[^\w\s]/gi, '')
                      .toLowerCase()}
                    name="practice-page-listing"
                    label={practice}
                    value={practice}
                  />
                  <label htmlFor="practice-page-listing">{practice}</label>
                </li>
              ))}
            </ul>
          </fieldset>
          <h3>
            <strong>
              4. Who would you like to receive contact inquiries from your attorney profile on the
              website?
            </strong>
          </h3>
          <fieldset data-kw-group data-kw-rules="required">
            <div className="mb-2">
              <input type="radio" name="recieve-profile-messages" value="You" />
              {' '}
              By you
            </div>
            <div className="mb-2">
              <input type="radio" name="recieve-profile-messages" value="Your secretary" />
              {' '}
              Your
              secretary
            </div>
            <div className="mb-2">
              <input type="radio" name="recieve-profile-messages" value="All the above" />
              {' '}
              All the
              above
            </div>
          </fieldset>
          <p style={{ fontSize: '18px' }}>
            <em>
              ** Contact forms on the website are action tags for cold leads. The marketing
              department will monitor all leads that come through the website.
            </em>
          </p>
          <h3 className="mt-3 mb-4">
            <strong>
              If there is any information that is missing or something you&apos;d like to add to
              your bio. Please provide that informations here.
            </strong>
          </h3>
          <textarea
            type="textarea"
            rows="20"
            cols="120"
            className="d-block p-2 mb-3"
            placeholder="Add your information here"
            name="more-bio-details"
          />
          <Button type="submit" className="px-4 mb-5" variant="danger">
            Submit
          </Button>
        </form>
      </Row>
      <style jsx>
        {`
          p {
            font-size: 1;
          }
          @media (min-width: 1200px) {
            .col-list {
              column-count: 3;
            }
          }
          input[type='checkbox'] {
            position: absolute;
          }
          input[type='checkbox'] ~ label {
            padding-left: 1.4em;
            display: inline-block;
          }
          ol {
            margin-top: -10px;
            margin-bottom: -11px;
          }
          .letter {
            font-size: 1.3rem;
          }
        `}
      </style>
    </Container>
  );
}

export async function getStaticPaths() {
  const urls = SITE_FORM_SLUGS.map((slug) => slug);

  return {
    paths: urls || [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const practiceRequest = await fetch(`${BASE_API_URL}/wp-json/wp/v2/practices?per_page=100`).then(
    (data) => data.json(),
  );
  const attorneyRequest = await fetch(`${BASE_API_URL}/wp-json/wp/v2/attorneys?per_page=100`).then(
    (data) => data.json(),
  );

  return {
    props: {
      isNewAttorney: params.slug.includes('new'),
      attorneys: attorneyRequest
        .map((attorney) => ({
          email: attorney.acf.email,
          name: attorney.title.rendered.replace(/&#8221;/g, '"').replace(/&#8220;/g, '"'),
          link: attorney.link.replace('wp.', ''),
        }))
        .sort((a, b) => {
          if (a.name > b.name) return 1;
          return -1;
        }),
      practices: practiceRequest
        .map((practice) => practice.title.rendered.replace(/&#038;/g, '&').replace(/&#8217;/g, "'"))
        .sort((a, b) => {
          if (a > b) return 1;
          return -1;
        }),
    },
    revalidate: 1,
  };
}
