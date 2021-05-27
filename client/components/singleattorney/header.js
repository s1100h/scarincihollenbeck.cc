import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsChatDots, BsCloudDownload, BsCardText } from 'react-icons/bs';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileDetails from 'components/singleattorney/profile-details';
import profileStyles from 'styles/ProfileImage.module.css';
import styles from 'styles/Banner.module.css';

import { useState, useEffect } from 'react';

export default function AttorneyProfileHeader({ image, profile, slug }) {
  const [designation, setDesiganation] = useState(profile.title);
  const {
    name,
    title,
    chair,
    coChair,
    offices,
    phoneNumber,
    email,
    pdf,
    vizibility,
    socialMedia,
  } = profile;

  const contact = { phoneNumber, email };

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
          <div className="text-white d-flex flex-column mx-3 mx-md-0 flex-md-row justify-content-start">
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
            <div className="ml-0 ml-md-5 profile mt-4">
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
              <Row className="ml-0 my-3">
                <Col
                  sm={12}
                  md={5}
                  className="credentials mx-0 px-0 mr-3"
                >
                  <ProfileDetails
                    offices={offices}
                    contact={contact}
                    chair={chair}
                    coChair={coChair}
                  />
                </Col>
                <Col sm={12} md={3} className="mx-0 px-0 pl-md-3 mt-1 mt-md-0">
                  <a
                    href={`/attorney/${slug}/contact`}
                    rel="noopener noreferrer"
                    style={{ height: '30px' }}
                    variant="link"
                    className="d-block mb-1 text-left text-white w-100"
                  >
                    <strong>
                      <BsChatDots style={{ marginTop: '-4px' }} />
                      <span className="ml-2 d-inline-block">Get In Touch</span>
                    </strong>
                  </a>
                  <a
                    href={(linkedIn) ? linkedIn.url : 'https://www.linkedin.com/company/scarinci-hollenbeck-llc/'}
                    size="sm"
                    rel="noopener noreferrer"
                    style={{ height: '30px' }}
                    variant="link"
                    className="d-block mb-1 text-left text-white w-100"
                  >
                    <strong>
                      <FaLinkedinIn style={{ marginTop: '-4px' }} />
                      <span className="ml-2 d-inline-block">LinkedIn</span>
                    </strong>
                  </a>
                  <a
                    href={pdf}
                    size="sm"
                    rel="noopener noreferrer"
                    style={{ height: '30px' }}
                    variant="link"
                    className="d-block mb-1 text-left text-white w-100"
                  >
                    <strong>
                      <BsCloudDownload style={{ marginTop: '-2px' }} />
                      <span className="ml-2 d-inline-block">Print Profile</span>
                    </strong>
                  </a>
                  <a
                    href={vizibility}
                    size="sm"
                    rel="noopener noreferrer"
                    style={{ height: '30px' }}
                    variant="link"
                    className="d-block mb-1 text-left text-white w-100"
                  >
                    <strong>
                      <BsCardText style={{ marginTop: '-4px' }} />
                      <span className="ml-2 d-inline-block">Contact Card</span>
                    </strong>
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
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

          div.profile {
            width: 100%;
          }
          .red-border {
            width: 100%;
          }

          a.button-size {
            width: 100px;
          }
          @media (min-width: 768px) {
            div.profile-image {
              min-width: 250px;
            }
            div.profile {
              min-width: 300px;
            }
          }

          @media (min-width: 992px) {
            div.profile {
              min-width: 550px;
            }
            div.red-border {
              width: 75%;
            }
          }
          @media (min-width: 1200px) {
            div.profile-image {
              min-width: 300px;
            }
            div.profile {
              min-width: 720px;
            }
          }
        `}
      </style>
    </>
  );
}
