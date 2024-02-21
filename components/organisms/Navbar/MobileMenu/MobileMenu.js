/* eslint-disable */
// file has strange eslint error. Without any problems
import React, { Fragment, useMemo, useState } from 'react';
import Link from 'next/link';
import { IoMenuSharp, IoCloseSharp } from 'react-icons/io5';
import { SITE_NAVIGATION } from 'utils/constants';
import {
  AccordionMobile,
  AccordionStyled,
  BurgerBtn,
  ButtonLinkBox,
  CommunicationLinks,
  NavList,
  OffcanvasBody,
  OffcanvasContainer,
} from 'styles/MobileMenu.style';
import Accordion from 'react-bootstrap/Accordion';
import LinkButtons from '../LinkButtons';
import { useRouter } from 'next/router';
import { getSlugFromUrl } from '../../../../utils/helpers';
import empty from 'is-empty';
import useStateScreen from 'hooks/useStateScreen';
import SubscriptionModal from 'components/molecules/subscription/SubscriptionModal';
import {
  BsFillEnvelopePlusFill,
  BsChevronDown,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
} from 'react-icons/bs';
import { cannabisLawColors } from '../../../../styles/global_styles/Global.styles';

const specialPageClass = {
  'new-jersey-cannabis-law': {
    className: 'menu-cannabis',
    color: cannabisLawColors.cannabisColorGray,
  },
  // 'entertainment-and-media': 'menu-entertainment', // page ready for deploy in prod but paused, commit 26.12.2023
};

const renderAccordionTemplate = (
  handleClose,
  practiceWithOverviewArg,
  isTabletScreenArg,
  fullPathArg,
  activeItemIdArg,
  handleClickFirstLvlArg,
  isSecondLvlArg,
  secondLvlDataArg,
) => {
  return (
    <>
      <ul className="mobile-menu__first-lvl">
        <li>
          <Link href="/practices" passHref legacyBehavior>
            <a onClick={handleClose}>View all practices</a>
          </Link>
        </li>
        {practiceWithOverviewArg?.map((practice) =>
          practice?.childPractice ? (
            <li key={practice?.databaseId}>
              {isTabletScreenArg ? (
                <Accordion className="mobile-menu__second-accordion">
                  <Accordion.Item eventKey={practice?.databaseId}>
                    <Accordion.Header>{practice?.title}</Accordion.Header>
                    <Accordion.Body>
                      <ul>
                        {practice?.childPractice.map((child) => (
                          <li
                            key={child?.databaseId}
                            className={
                              fullPathArg === child?.uri ? 'active' : ''
                            }
                          >
                            <Link href={child?.uri} passHref legacyBehavior>
                              <a onClick={handleClose}>{child.title}</a>
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
                    activeItemIdArg === practice?.databaseId ? 'active' : ''
                  }`}
                  key={practice?.databaseId}
                  onClick={() => {
                    handleClickFirstLvlArg(
                      practice?.childPractice,
                      practice?.databaseId,
                    );
                  }}
                >
                  {practice?.title}
                </button>
              )}
            </li>
          ) : (
            <li key={practice?.databaseId}>
              <Link href={practice?.uri} passHref legacyBehavior>
                <a onClick={handleClose}>{practice?.title}</a>
              </Link>
            </li>
          ),
        )}
      </ul>
      {isSecondLvlArg && !isTabletScreenArg && (
        <ul className="mobile-menu__second-lvl">
          {secondLvlDataArg &&
            secondLvlDataArg?.map((child) => (
              <li
                key={child.databaseId}
                className={fullPathArg === child.uri ? 'active' : ''}
              >
                <Link
                  key={child.databaseId}
                  href={child.uri}
                  passHref
                  legacyBehavior
                >
                  <a onClick={handleClose}>{child.title}</a>
                </Link>
              </li>
            ))}
        </ul>
      )}
    </>
  );
};

const MobileMenu = ({
  show,
  handleClose,
  handleShow,
  practices,
  justPractice,
  title,
  locations,
}) => {
  const [isSecondLvl, setIsSecondLvl] = useState(false);
  const [secondLvlData, setSecondLvlData] = useState([]);
  const [activeItemId, setActiveItemId] = useState(null);
  const { isTabletScreen } = useStateScreen();

  const practiceWithOverview = useMemo(() => {
    if (!practices) return null;

    return practices.map((practice) => {
      const overviewChild = {
        databaseId: practice.databaseId + '_' + practice.title,
        title: `${practice.title} overview`,
        uri: practice.uri,
      };

      const updatedChildPractice = [overviewChild, ...practice.childPractice];

      return {
        ...practice,
        childPractice: updatedChildPractice,
      };
    });
  }, [practices]);

  const menuStructure = useMemo(
    () => [
      ...SITE_NAVIGATION,
      {
        children: locations,
        id: 170,
        label: 'Locations',
        menuId: 'locations',
        slug: '',
      },
    ],
    [locations],
  );

  if (!practiceWithOverview) {
    return null;
  }
  const handleClickFirstLvl = (data, id) => {
    if (!empty(data)) {
      setIsSecondLvl(true);
      setSecondLvlData(data);
      setActiveItemId(id);
    } else {
      setIsSecondLvl(false);
      setSecondLvlData([]);
    }
  };

  const handleClickAccordionOpener = (firstItemChildren, firstItemId) => {
    if (firstItemChildren) {
      setSecondLvlData(firstItemChildren);
      setIsSecondLvl(true);
      setActiveItemId(firstItemId);
    } else {
      setIsSecondLvl(false);
      setSecondLvlData([]);
    }
  };

  const { pathname, query } = useRouter();
  const slug = getSlugFromUrl(pathname);
  const fullPath = pathname.replace('[slug]', query.slug);

  return (
    <>
      {justPractice ? (
        <OffcanvasBody>
          {title && <h4>{title}</h4>}
          <NavList>
            <AccordionMobile>
              <Accordion.Item
                eventKey="practices"
                className="mobile-menu__first-accordion"
              >
                {renderAccordionTemplate(
                  handleClose,
                  practiceWithOverview,
                  isTabletScreen,
                  fullPath,
                  activeItemId,
                  handleClickFirstLvl,
                  isSecondLvl,
                  secondLvlData,
                )}
              </Accordion.Item>
            </AccordionMobile>
          </NavList>
        </OffcanvasBody>
      ) : (
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
            className={specialPageClass[slug]?.className || ''}
            show={show}
            onHide={handleClose}
            placement="start"
          >
            <OffcanvasBody background={specialPageClass[slug]?.color}>
              <NavList>
                <AccordionStyled
                  menuprops={specialPageClass[slug]?.color || ''}
                >
                  <Accordion.Item
                    eventKey="practices"
                    className="mobile-menu__first-accordion"
                  >
                    <Accordion.Header
                      as="h4"
                      onClick={() =>
                        handleClickAccordionOpener(
                          practiceWithOverview[0].childPractice,
                          practiceWithOverview[0].databaseId,
                        )
                      }
                    >
                      Practices
                      <BsChevronDown className="chevron-down" />
                    </Accordion.Header>
                    <Accordion.Body>
                      {renderAccordionTemplate(
                        handleClose,
                        practiceWithOverview,
                        isTabletScreen,
                        fullPath,
                        activeItemId,
                        handleClickFirstLvl,
                        isSecondLvl,
                        secondLvlData,
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                  {menuStructure.map(
                    ({ id, databaseId, label, children, slug }) => (
                      <Fragment key={id}>
                        {children?.length > 0 ? (
                          <Accordion.Item eventKey={id || databaseId}>
                            <Accordion.Header
                              as="h4"
                              onClick={() =>
                                handleClickAccordionOpener(
                                  children[0].children,
                                  children[0].databaseId,
                                )
                              }
                            >
                              {slug.length > 0 ? (
                                <Link href={slug}>{label}</Link>
                              ) : (
                                <>
                                  {label}
                                  <BsChevronDown className="chevron-down" />
                                </>
                              )}
                            </Accordion.Header>
                            {children?.length > 0 && (
                              <Accordion.Body>
                                <ul className="mobile-menu__first-lvl">
                                  {children?.map((link) =>
                                    link?.children ? (
                                      <li key={link?.databaseId}>
                                        {isTabletScreen ? (
                                          <Accordion className="mobile-menu__second-accordion">
                                            <Accordion.Item
                                              eventKey={link?.databaseId}
                                            >
                                              <Accordion.Header>
                                                {link?.title}
                                              </Accordion.Header>
                                              <Accordion.Body>
                                                <ul>
                                                  {link?.children.map(
                                                    (child) => (
                                                      <li
                                                        key={child?.databaseId}
                                                        className={
                                                          fullPath ===
                                                          child?.uri
                                                            ? 'active'
                                                            : ''
                                                        }
                                                      >
                                                        <Link
                                                          href={child?.uri}
                                                          passHref
                                                          legacyBehavior
                                                        >
                                                          <a
                                                            onClick={
                                                              handleClose
                                                            }
                                                          >
                                                            {child.title}
                                                          </a>
                                                        </Link>
                                                      </li>
                                                    ),
                                                  )}
                                                </ul>
                                              </Accordion.Body>
                                            </Accordion.Item>
                                          </Accordion>
                                        ) : (
                                          <button
                                            className={`mobile-item__with-child ${
                                              activeItemId === link?.databaseId
                                                ? 'active'
                                                : ''
                                            }`}
                                            key={link?.databaseId}
                                            onClick={() => {
                                              handleClickFirstLvl(
                                                link?.children,
                                                link?.databaseId,
                                              );
                                            }}
                                          >
                                            {link?.title}
                                          </button>
                                        )}
                                      </li>
                                    ) : (
                                      <li key={link?.databaseId}>
                                        <Link
                                          href={link?.uri}
                                          passHref
                                          legacyBehavior
                                        >
                                          <a onClick={handleClose}>
                                            {link?.title}
                                          </a>
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
                                          key={child.databaseId}
                                          className={
                                            fullPath === child.uri
                                              ? 'active'
                                              : ''
                                          }
                                        >
                                          <Link
                                            key={child.databaseId}
                                            href={child.uri}
                                            passHref
                                            legacyBehavior
                                          >
                                            <a onClick={handleClose}>
                                              {child.title}
                                            </a>
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
                      </Fragment>
                    ),
                  )}
                </AccordionStyled>
              </NavList>
              <ButtonLinkBox>
                <LinkButtons
                  variant={
                    !empty(specialPageClass[slug]?.className)
                      ? 'special'
                      : 'default'
                  }
                  handleClickAndClose={handleClose}
                />
              </ButtonLinkBox>
              <CommunicationLinks
                menuprops={specialPageClass[slug]?.color || ''}
              >
                <Link href="tel:201-896-4100" className="communication-link">
                  <BsFillTelephoneFill />
                  <span>201-896-4100</span>
                </Link>
                <Link
                  href="mailto:info@sh-law.com"
                  className="communication-link"
                >
                  <BsFillEnvelopeFill />
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
      )}
    </>
  );
};

export default MobileMenu;
