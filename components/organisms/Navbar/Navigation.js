import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavbarStyled } from 'styles/Navigation.style';
import { SITE_NAVIGATION } from 'utils/constants';
import empty from 'is-empty';
import CurrentOfficeCard from '../../molecules/location/CurrentOfficeCard';
import { globalColor } from '../../../styles/global_styles/Global.styles';

const renderLocationCardMemu = (locationData) => (
  <div className="location-card-menu">
    <CurrentOfficeCard
      {...locationData}
      backgroundColor={globalColor.blue.darkUltramarine}
    >
      <h3>{locationData.title}</h3>
    </CurrentOfficeCard>
  </div>
);

const Navigation = ({ isHidden, practices, locations }) => {
  const [isSecondLvl, setIsSecondLvl] = useState(false);
  const [secondLvlData, setSecondLvlData] = useState([]);
  const { pathname, query } = useRouter();
  const slug = pathname.replace('[slug]', query.slug);
  const handleClickFirstLvl = (data) => {
    if (!empty(data)) {
      setIsSecondLvl(true);
      setSecondLvlData(data);
    } else {
      setIsSecondLvl(false);
      setSecondLvlData([]);
    }
  };

  const hideSecondLvl = () => {
    setIsSecondLvl(false);
    setSecondLvlData([]);
  };

  return (
    <NavbarStyled className={`${isHidden && 'd-none'} navContainer`}>
      <Nav className="navContainerWrapper">
        <NavDropdown title="Practices" id={3} onClick={() => hideSecondLvl()}>
          <div className="dropdown__first-lvl">
            {practices?.map((practice) => (
              <Link
                key={practice?.databaseId}
                href={practice?.uri}
                passHref
                legacyBehavior
              >
                <NavDropdown.Item
                  onMouseEnter={() => {
                    handleClickFirstLvl(practice?.childPractice);
                  }}
                  className={
                    practice?.childPractice?.length > 0 ? 'with-child' : ''
                  }
                >
                  {practice?.title}
                </NavDropdown.Item>
              </Link>
            ))}
          </div>
          {isSecondLvl && (
            <div className="dropdown__second-lvl">
              <ul>
                {secondLvlData
                  && secondLvlData?.map((child) => (
                    <li
                      key={child?.databaseId}
                      className={slug === child?.uri ? 'active' : ''}
                    >
                      <Link
                        key={child?.databaseId}
                        href={child?.uri}
                        passHref
                        legacyBehavior
                      >
                        <NavDropdown.Item>{child?.title}</NavDropdown.Item>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </NavDropdown>
        {SITE_NAVIGATION.map((nav) => (nav?.children ? (
          <NavDropdown
            key={nav?.id}
            title={`${nav?.label}`}
            id={nav?.menuId}
            onClick={() => hideSecondLvl()}
          >
            <div className="dropdown__first-lvl">
              {nav?.children?.map((child) => (child?.children ? (
                <button
                  className="dropdown-item with-child"
                  key={child?.databaseId}
                  onMouseEnter={() => {
                    handleClickFirstLvl(child?.children);
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {child?.title}
                </button>
              ) : (
                <Link
                  key={child?.databaseId}
                  href={child?.uri}
                  passHref
                  legacyBehavior
                >
                  <NavDropdown.Item
                    onMouseEnter={() => {
                      hideSecondLvl();
                    }}
                  >
                    {child?.title}
                  </NavDropdown.Item>
                </Link>
              )))}
            </div>
            {isSecondLvl && (
            <div className="dropdown__second-lvl">
              <ul>
                {secondLvlData
                      && secondLvlData?.map((child) => (
                        <li
                          key={child?.databaseId}
                          className={slug === child?.uri ? 'active' : ''}
                        >
                          <Link
                            key={child?.databaseId}
                            href={child?.uri}
                            passHref
                            legacyBehavior
                          >
                            <NavDropdown.Item>{child?.title}</NavDropdown.Item>
                          </Link>
                        </li>
                      ))}
              </ul>
            </div>
            )}
          </NavDropdown>
        ) : (
          <Nav.Item key={nav?.id} id={nav?.menuId}>
            <Link href={nav?.slug} legacyBehavior>
              <a>{nav?.label}</a>
            </Link>
          </Nav.Item>
        )))}
        {!empty(locations) && (
          <NavDropdown
            className="locations-dropdown"
            title="Locations"
            id={3}
            onClick={() => hideSecondLvl()}
          >
            <div className="dropdown__first-lvl">
              {locations.map((office) => (
                <Link
                  key={office?.databaseId}
                  href={office?.uri}
                  passHref
                  legacyBehavior
                >
                  <NavDropdown.Item>
                    {renderLocationCardMemu(office)}
                  </NavDropdown.Item>
                </Link>
              ))}
            </div>
          </NavDropdown>
        )}
      </Nav>
    </NavbarStyled>
  );
};

export default Navigation;
