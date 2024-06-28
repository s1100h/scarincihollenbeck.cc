import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import {
  DropdownFirstLvl,
  DropdownSecondLvl,
  NavbarItem,
  NavbarList,
  NavbarOpener,
  NavbarStyled,
  NavbarWrapper,
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
const NavigationNew = ({ isHidden, practices, locations }) => {
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
    <NavbarWrapper>
      <NavbarList>
        <NavbarItem>
          <NavbarOpener>Attorneys</NavbarOpener>
        </NavbarItem>
        <NavbarItem>
          <NavbarOpener>Practices</NavbarOpener>
        </NavbarItem>
        <NavbarItem>
          <NavbarOpener>Industries</NavbarOpener>
        </NavbarItem>
        <NavbarItem>
          <NavbarOpener>Locations</NavbarOpener>
        </NavbarItem>
      </NavbarList>
    </NavbarWrapper>
  );
};

export default NavigationNew;
