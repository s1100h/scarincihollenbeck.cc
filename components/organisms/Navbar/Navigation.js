import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavbarStyled } from 'styles/Navigation.style';
import { SITE_NAVIGATION } from 'utils/constants';
import CurrentOfficeCard from '../../molecules/location/CurrentOfficeCard';

const renderLocationCardMemu = (locationData) => (
  <div className="location-card-menu">
    <CurrentOfficeCard {...locationData} />
  </div>
);

const Navigation = ({ isHidden }) => {
  const [isSecondLvl, setIsSecondLvl] = useState(false);
  const [secondLvlData, setSecondLvlData] = useState([]);
  const { pathname, query } = useRouter();
  const slug = pathname.replace('[slug]', query.slug);

  const handleClickFirstLvl = (data) => {
    setIsSecondLvl(true);
    setSecondLvlData(data);
  };

  const hideSecondLvl = () => {
    setIsSecondLvl(false);
    setSecondLvlData([]);
  };

  return (
    <NavbarStyled className={`${isHidden && 'd-none'} navContainer`}>
      <Nav className="navContainerWrapper">
        {SITE_NAVIGATION.map((nav) => (nav.children ? (
          <NavDropdown
            key={nav.id}
            title={`${nav.label}`}
            id={nav.menuId}
            onClick={() => hideSecondLvl()}
          >
            <div className="dropdown__first-lvl">
              {nav.children.map((child) => (child.children ? (
                <button
                  className="dropdown-item with-child"
                  key={child.id}
                  onMouseEnter={() => {
                    handleClickFirstLvl(child.children);
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {child.label}
                </button>
              ) : (
                <Link
                  key={child.id}
                  href={child.slug}
                  passHref
                  legacyBehavior
                >
                  <NavDropdown.Item
                    onMouseEnter={() => {
                      hideSecondLvl();
                    }}
                  >
                    {child.label}
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
                          key={child.id}
                          className={slug === child.slug ? 'active' : ''}
                        >
                          <Link
                            key={child.id}
                            href={child.slug}
                            passHref
                            legacyBehavior
                          >
                            <NavDropdown.Item>{child.label}</NavDropdown.Item>
                          </Link>
                        </li>
                      ))}
              </ul>
            </div>
            )}
          </NavDropdown>
        ) : (
          <Nav.Item key={nav.id} id={nav.menuId}>
            <Link href={nav.slug} legacyBehavior>
              <a>{nav.label}</a>
            </Link>
          </Nav.Item>
        )))}
      </Nav>
    </NavbarStyled>
  );
};

export default Navigation;
