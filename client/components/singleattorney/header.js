import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsChatDots, BsCloudDownload, BsCardText } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
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
        <Container className={styles.multiBackBanner}>
          <Row>
            <Col sm={12} md={8}>
              <div className="text-white d-flex flex-column flex-md-row">
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
                    className="animate__animated animate__fadeInDown animate__fast"
                    style={{
                      height: '3px',
                      backgroundColor: '#db2220',
                      maxWidth: '65%'
                    }}
                  />
                  <Row className="ml-0 my-3">
                    <Col sm={12} className="credentials mx-0 px-0 mr-3">
                      <ProfileDetails
                        offices={offices}
                        contact={contact}
                        chair={chair}
                        coChair={coChair}
                      />
                      <div className="d-flex flex-column flex-md-row">
                        <ul className="list-unstyled mt-2 mr-0 mr-md-4">
                          <li>
                            <a
                              href={`/attorney/${slug}/contact`}
                              rel="noopener noreferrer"
                              style={{ height: '30px' }}
                              variant="link"
                              className="d-block mb-1 text-left text-white w-100"
                            >
                              <strong className="pr-1">
                                <BsChatDots style={{ marginTop: '-4px' }} />
                                <span className="ml-2 d-inline-block">
                                  Get In Touch
                                </span>
                              </strong>
                            </a>
                          </li>
                          <li>
                            <a
                              href={
                                linkedIn
                                  ? linkedIn.url
                                  : 'https://www.linkedin.com/company/scarinci-hollenbeck-llc/'
                              }
                              size="sm"
                              rel="noopener noreferrer"
                              style={{ height: '30px' }}
                              variant="link"
                              className="d-block mb-1 text-left text-white w-100"
                            >
                              <strong className="pr-1">
                                <FaLinkedinIn style={{ marginTop: '-4px' }} />
                                <span className="ml-2 d-inline-block">
                                  LinkedIn Profile
                                </span>
                              </strong>
                            </a>
                          </li>
                        </ul>
                        <ul className="list-unstyled mt-2">
                          <li>
                            <a
                              href={pdf}
                              size="sm"
                              rel="noopener noreferrer"
                              style={{ height: '30px' }}
                              variant="link"
                              className="d-block mb-1 text-left text-white w-100"
                            >
                              <strong className="">
                                <BsCloudDownload
                                  style={{ marginTop: '-2px' }}
                                />
                                <span className="ml-2 d-inline-block">
                                  Print Bio
                                </span>
                              </strong>
                            </a>
                          </li>
                          <li>
                            <a
                              href={vizibility}
                              size="sm"
                              rel="noopener noreferrer"
                              style={{ height: '30px' }}
                              variant="link"
                              className="d-block mb-1 text-left text-white w-100"
                            >
                              <strong className="pl-1">
                                <BsCardText style={{ marginTop: '-4px' }} />
                                <span className="ml-2 d-inline-block">
                                  Business Card
                                </span>
                              </strong>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          strong.name {
            font-size: 2.5rem;
          }
          strong.cred-title {
            font-size: 1rem;
          }
          p.title {
            font-size: 1.3rem;
            margin-top: -5px;
            margin-bottom: 6px;
          }

          div.profile {
            width: 100%;
          }
          // .red-border {
          //   max-width: 100%;
          // }

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
            // div.red-border {
            //   max-width: 75%;
            // }
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
