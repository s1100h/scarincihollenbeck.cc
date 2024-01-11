import Link from 'next/link';
import { NavDropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';
import {
  DropdownFirstLvl,
  DropdownSecondLvl,
} from '../../styles/Navigation.style';

const DropdownMenu = ({
  practices,
  handleClickOnMouseEnter,
  isSecondLvl,
  secondLvlData,
}) => {
  const { pathname, query } = useRouter();
  const slug = pathname.replace('[slug]', query.slug);
  return (
    <>
      <DropdownFirstLvl>
        <Link href="/practices" passHref legacyBehavior>
          <NavDropdown.Item onMouseEnter={() => handleClickOnMouseEnter('')}>
            View all practices
          </NavDropdown.Item>
        </Link>
        {practices?.map((practice) => (
          <Link
            key={practice?.databaseId}
            href={practice?.uri}
            passHref
            legacyBehavior
          >
            <NavDropdown.Item
              onMouseEnter={() => handleClickOnMouseEnter(practice?.childPractice)}
              className={
                practice?.childPractice?.length > 0 ? 'with-child' : ''
              }
            >
              {practice?.title}
            </NavDropdown.Item>
          </Link>
        ))}
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
    </>
  );
};

export default DropdownMenu;
