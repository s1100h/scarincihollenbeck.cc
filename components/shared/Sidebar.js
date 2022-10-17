import Link from 'next/link';
import { NavList, TitleSideBar } from 'styles/Sidebar.style';

const Sidebar = ({ title, content }) => (
  <nav>
    <TitleSideBar>{title}</TitleSideBar>
    <NavList>
      {content.map(({ id, label, slug }) => (
        <li key={id} className="list-unstyled">
          <Link href={slug || '/'}>
            <a className="text-dark">{label}</a>
          </Link>
        </li>
      ))}
    </NavList>
  </nav>
);

export default Sidebar;
