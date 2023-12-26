/* eslint-disable */
// file has strange eslint error. Without any problems
import React, { useState } from 'react';
import Link from 'next/link';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import { SITE_NAVIGATION } from 'utils/constants';
import {
  AccordionStyled,
  BurgerBtn,
  ButtonLinkBox,
  CommunicationLinks,
  NavList,
  OffcanvasBody,
  OffcanvasContainer,
} from 'styles/MobileMenu.style';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import ButtonGrayLink from './ButtonGrayLink';
import LinkButtons from '../LinkButtons';
import {
  cannabisLawColors,
  globalColor,
} from '../../../../styles/global_styles/Global.styles';
import { useRouter } from 'next/router';
import { getSlugFromUrl } from '../../../../utils/helpers';
import empty from 'is-empty';
import useStateScreen from 'hooks/useStateScreen';
import SubscriptionModal from 'components/molecules/subscription/SubscriptionModal';
import { BsFillEnvelopePlusFill } from 'react-icons/bs';

const specialPageClass = {
  'new-jersey-cannabis-law': 'menu-cannabis',
  // 'entertainment-and-media': 'menu-entertainment', // page ready for deploy in prod but paused, commit 26.12.2023
};

const MobileMenu = ({ show, handleClose, handleShow }) => {
  const [isSecondLvl, setIsSecondLvl] = useState(false);
  const [secondLvlData, setSecondLvlData] = useState([]);
  const [activeItemId, setActiveItemId] = useState(null);
  const { isTabletScreen } = useStateScreen();

  const handleClickFirstLvl = (data) => {
    setIsSecondLvl(true);
    setSecondLvlData(data);
  };

  const hideSecondLvl = () => {
    setIsSecondLvl(false);
    setSecondLvlData([]);
    setActiveItemId(null);
  };

  const handleMobileItemClick = (id) => {
    setActiveItemId(id);
  };

  const { pathname, query } = useRouter();
  const slug = getSlugFromUrl(pathname);
  const fullPath = pathname.replace('[slug]', query.slug);

  return (
    <>
      {show ? (
        <BurgerBtn onClick={handleClose} aria-label="mobile menu">
          <IoCloseSharp className="icon" />
        </BurgerBtn>
      ) : (
        <BurgerBtn onClick={handleShow} aria-label="mobile menu">
          <IoMenuSharp className="icon" />
        </BurgerBtn>
      )}
      <OffcanvasContainer
        className={specialPageClass[slug]}
        show={show}
        onHide={handleClose}
        placement="start"
      >
        <OffcanvasBody>
          <NavList>
            <AccordionStyled>
              {SITE_NAVIGATION.map(({ id, label, children, slug }) => (
                <div key={id}>
                  {children?.length > 0 ? (
                    <Accordion.Item eventKey={id}>
                      <Accordion.Header as="h4" onClick={() => hideSecondLvl()}>
                        {slug.length > 0 ? (
                          <Link href={slug}>{label}</Link>
                        ) : (
                          label
                        )}
                      </Accordion.Header>
                      {children?.length > 0 && (
                        <Accordion.Body>
                          <ul className="mobile-menu__first-lvl">
                            {children.map((link) =>
                              link?.children ? (
                                <li key={link.id}>
                                  {isTabletScreen ? (
                                    <Accordion className="mobile-menu__second-accordion">
                                      <Accordion.Item eventKey={link.id}>
                                        <Accordion.Header>
                                          {link.label}
                                        </Accordion.Header>
                                        <Accordion.Body>
                                          <ul>
                                            {link.children.map((child) => (
                                              <li
                                                key={child.id}
                                                className={
                                                  fullPath === child.slug
                                                    ? 'active'
                                                    : ''
                                                }
                                              >
                                                <Link
                                                  href={child.slug}
                                                  passHref
                                                  legacyBehavior
                                                >
                                                  <a onClick={handleClose}>
                                                    {child.label}
                                                  </a>
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </Accordion.Body>
                                      </Accordion.Item>
                                    </Accordion>
                                  ) : (
                                    <button
                                      className={`mobile-item__with-child ${
                                        activeItemId === link.id ? 'active' : ''
                                      }`}
                                      key={link.id}
                                      onClick={() => {
                                        handleMobileItemClick(link.id);
                                        handleClickFirstLvl(link.children);
                                      }}
                                    >
                                      {link.label}
                                    </button>
                                  )}
                                </li>
                              ) : (
                                <li key={link.id}>
                                  <Link
                                    href={link.slug}
                                    passHref
                                    legacyBehavior
                                  >
                                    <a onClick={handleClose}>{link.label}</a>
                                  </Link>
                                </li>
                              ),
                            )}
                          </ul>
                          {isSecondLvl && !isTabletScreen && (
                            <ul className="mobile-menu__second-lvl">
                              {secondLvlData &&
                                secondLvlData?.map((child) => (
                                  <li
                                    key={child.id}
                                    className={
                                      fullPath === child.slug ? 'active' : ''
                                    }
                                  >
                                    <Link
                                      key={child.id}
                                      href={child.slug}
                                      passHref
                                      legacyBehavior
                                    >
                                      <a onClick={handleClose}>{child.label}</a>
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          )}
                        </Accordion.Body>
                      )}
                    </Accordion.Item>
                  ) : (
                    <Link href={slug} passHref legacyBehavior>
                      <a className="menu-item" onClick={handleClose}>
                        {label}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
            </AccordionStyled>
          </NavList>
          <ButtonLinkBox>
            <LinkButtons
              variant={!empty(specialPageClass[slug]) ? 'special' : 'default'}
              handleClickAndClose={handleClose}
            />
          </ButtonLinkBox>
          <CommunicationLinks>
            <Link href="tel:201-896-4100" className="communication-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.93954 6.00005L8.14954 5.80005C8.66954 5.26005 8.57954 5.01005 8.06954 4.50005L5.34954 1.75005C4.53954 0.930049 4.38954 0.540049 3.61954 1.27005L3.40954 1.47005L7.93954 6.00005ZM7.40954 6.45005L3.00954 2.05005C2.30954 2.99005 0.669537 5.52005 1.47954 7.39005C2.20954 9.06005 2.56954 9.14005 3.47954 10.39C5.32954 12.5 7.65954 14.76 9.47954 16.46C10.7395 17.37 10.7895 17.79 12.4795 18.46C14.2795 19.17 16.8795 17.57 17.8595 16.9L13.4595 12.5L12.2795 14.12C11.9395 14.58 11.0795 14.06 10.4795 13.46C9.43954 12.41 7.29954 10.28 6.47954 9.39005C5.88954 8.80005 5.35954 7.94005 5.81954 7.59005L7.40954 6.45005ZM18.4295 16.5L18.6395 16.29C19.3195 15.55 18.9295 15.39 18.1195 14.59L15.3795 11.87C14.8695 11.38 14.6295 11.27 14.1095 11.76L13.9095 11.97L18.4295 16.5Z"
                  fill="white"
                />
              </svg>
              <span>201-896-4100</span>
            </Link>
            <Link href="mailto:info@sh-law.com" className="communication-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M16.666 6.66732L9.99935 10.834L3.33268 6.66732V5.00065L9.99935 9.16732L16.666 5.00065M16.666 3.33398H3.33268C2.40768 3.33398 1.66602 4.07565 1.66602 5.00065V15.0007C1.66602 15.4427 1.84161 15.8666 2.15417 16.1792C2.46673 16.4917 2.89065 16.6673 3.33268 16.6673H16.666C17.108 16.6673 17.532 16.4917 17.8445 16.1792C18.1571 15.8666 18.3327 15.4427 18.3327 15.0007V5.00065C18.3327 4.07565 17.5827 3.33398 16.666 3.33398Z"
                  fill="white"
                />
              </svg>
              <span>info@sh-law.com</span>
            </Link>
            <SubscriptionModal customClass="communication-link underline">
              <>
                <BsFillEnvelopePlusFill />
                Join our mailing list
              </>
            </SubscriptionModal>
          </CommunicationLinks>
        </OffcanvasBody>
      </OffcanvasContainer>
    </>
  );
};

export default MobileMenu;
