import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import {
  DropdownFirstLvl,
  DropdownSecondLvl,
  NavbarStyled,
  TitleBlock,
} from 'styles/Navigation.style';
import { SITE_NAVIGATION } from 'utils/constants';
import empty from 'is-empty';
import { BsChevronDown } from 'react-icons/bs';
import CurrentOfficeCard from '../../molecules/location/CurrentOfficeCard';
import { globalColor } from '../../../styles/global_styles/Global.styles';
import DropdownMenu from '../../common/DropdownMenu';

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
const renderTitle = (title) => (
  <TitleBlock>
    <span>{title}</span>
    <BsChevronDown className="chevron" />
  </TitleBlock>
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

  const hideSecondLvl = (title) => {
    setIsSecondLvl(false);
    setSecondLvlData([]);
  };

  return (
    <NavbarStyled className={`${isHidden && 'd-none'} navContainer`}>
      <Nav className="navContainerWrapper">
        <NavDropdown
          title={renderTitle('Practices')}
          id={3}
          onClick={() => hideSecondLvl()}
        >
          <DropdownMenu
            practices={practices}
            handleClickOnMouseEnter={handleClickFirstLvl}
            isSecondLvl={isSecondLvl}
            secondLvlData={secondLvlData}
          />
        </NavDropdown>
        {SITE_NAVIGATION.map((nav) => (nav?.children ? (
          <NavDropdown
            key={nav?.id}
            title={renderTitle(`${nav?.label}`)}
            id={nav?.menuId}
            onClick={() => hideSecondLvl(`${nav?.label}`)}
          >
            <DropdownFirstLvl>
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
            </DropdownFirstLvl>
            {isSecondLvl && (
            <DropdownSecondLvl>
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
            </DropdownSecondLvl>
            )}
          </NavDropdown>
        ) : (
          <Nav.Item key={nav?.id} id={nav?.menuId}>
            <Link href={nav?.slug} legacyBehavior>
              <a>{nav?.label}</a>
            </Link>
          </Nav.Item>
        )))}

        <NavDropdown
          className="locations-dropdown"
          title={renderTitle('Locations')}
          id={3}
          onClick={() => hideSecondLvl()}
        >
          {!empty(locations) && (
            <DropdownFirstLvl className="dropdown-location">
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
            </DropdownFirstLvl>
          )}
        </NavDropdown>
      </Nav>
    </NavbarStyled>
  );
};

export default Navigation;
