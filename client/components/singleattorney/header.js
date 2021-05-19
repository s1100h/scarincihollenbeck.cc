import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import profileStyles from 'styles/ProfileImage.module.css';
import styles from 'styles/Banner.module.css';

import { useState, useEffect } from 'react';

export default function AttorneyProfileHeader({ image, profile }) {
  const [designation, setDesiganation] = useState(profile.title);
  const {
    name, title, chair, coChair, offices, phoneNumber, email, pdf, vizibility, socialMedia,
  } = profile;
  const router = useRouter();

  const linkedIn = socialMedia.filter((a) => a.channel === 'LinkedIn')[0];

  useEffect(() => {
    if (title === 'Red Bank, NJ Managing Partner') {
      setDesiganation('Red Bank, NJ  Office Managing Partner');
    }

    if (title === 'NYC Managing Partner') {
      setDesiganation('NYC Office Managing Partner');
    }

    if (title === 'Managing Partner') {
      setDesiganation('Firm Managing Partner');
    }

    if (title === 'Washington, D.C. Managing Partner') {
      setDesiganation('Washington, D.C. Office Managing Partner');
    }
  });

  return (
    <>
      <div className={styles.backPageBanner}>
        <div className={styles.multiBackBanner}>
          <div className="text-white d-flex flex-column flex-md-row justify-content-start">
            <div className="profile-image">
              <Image
                src={image}
                alt={profile.name}
                width={294}
                height={315}
                layout="intrinsic"
                quality={100}
                className={`${profileStyles.whiteBorderTransparent} animate__animated animate__fadeInUp animate__fast my-5`}
                priority
                loading="eager"
              />
            </div>
            <div className="ml-0 ml-md-5 profile">
              <h2 className="animate__animated animate__fadeInDown animate__slow mb-0">
                <strong className="name">{name}</strong>
              </h2>
              <p className="title">{designation}</p>
              <div
                className="red-border d-block animate__animated animate__fadeInDown animate__fast"
                style={{
                  height: '3px',
                  backgroundColor: '#db2220',
                }}
              />
              <div className="my-4 credentials">
                {chair.length > 0 && (
                  <>
                    <p className="mb-2">
                      <strong className="cred-title">Chair: </strong>
                      {chair.map((c, i) => (
                        <Link key={c.title} href={c.link.replace('https://wp.scarincihollenbeck.com/', '')}>
                          <a className="text-white">
                            {c.title}
                            {i < chair.length - 1 && <strong className="mx-2">|</strong>}
                          </a>
                        </Link>
                      ))}
                    </p>
                  </>
                )}
                {coChair.length > 0 && (
                  <>
                    <p className="mb-2">
                      <strong className="cred-title">Co-Chair: </strong>
                      {coChair.map((c, i) => (
                        <Link key={c.title} href={c.link.replace('https://wp.scarincihollenbeck.com/', '')}>
                          <a className="text-white">
                            {c.title}
                            {i < chair.length - 1 && <strong className="mx-2">|</strong>}
                          </a>
                        </Link>
                      ))}
                    </p>
                  </>
                )}
                <p className="mb-2">
                  <strong className="cred-title">Contact: </strong>
                  {phoneNumber}
                  <strong className="mx-2">|</strong>
                  {email}
                </p>
                {offices.length > 0 && (
                <>
                  <p className="mb-2">
                    <strong className="cred-title">Offices: </strong>
                    {offices.map((o, i) => (
                      <Link key={o.ID} href={o.link}>
                        <a className="text-white">
                          {o.name}
                          {i < offices.length - 1 && <strong className="mx-2">|</strong>}
                        </a>
                      </Link>
                    ))}
                  </p>
                </>
                )}
              </div>
              <div className="my-3 d-flex flex-row flex-wrap">
                <Button
                  href={`${router.asPath}/contact`}
                  size="sm"
                  variant="danger"
                  style={{ width: '100px' }}
                  className="mr-1 mb-2  mr-md-2"
                >
                  <strong>Get In Touch</strong>
                </Button>
                <Button
                  href={linkedIn.url}
                  size="sm"
                  variant="danger"
                  style={{ width: '100px' }}
                  className="mr-1 mb-2  mr-md-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>LinkedIn</strong>
                </Button>
                <Button
                  href={pdf}
                  size="sm"
                  variant="danger"
                  style={{ width: '100px' }}
                  className="mr-1 mb-2  mr-md-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>PDF Bio</strong>
                </Button>
                <Button
                  href={vizibility}
                  size="sm"
                  variant="danger"
                  style={{ width: '100px' }}
                  className="mr-1 mb-2  mr-md-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>V-Card</strong>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {
        `
          strong.name {
            font-size: 2.5rem;
          }
          strong.cred-title {
            font-size: 1.2rem;
          }
          p.title {
            font-size: 1.45rem;
            margin-top: -5px;
            margin-bottom: 6px;
          }

          div.credentials {
            font-size: 1.1rem;
          }
          div.profile {
            width: 100%;
          }
          .red-border {
            width: 100%;
          }

          a.button-size {
            width: 100px;
          }
          @media (min-width: 768px){
            div.profile-image {
              min-width: 250px;
            }
            div.profile {
              min-width: 300px;
            }
          }

          @media (min-width: 992px){
            div.profile {
              min-width: 550px;
            }
            div.red-border {
              width: 75%;
            }
          }
          @media (min-width: 1200px){
            div.profile-image {
              min-width: 300px;
            }
            div.profile {
              min-width: 720px;
            }
          }
        `
      }
      </style>
    </>
  );
}
