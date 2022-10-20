import Link from 'next/link';
import { NavList, TitleSideBar } from 'styles/Sidebar.style';

const Sidebar = ({ title, content }) => (
  <nav>
    <TitleSideBar>{title}</TitleSideBar>
    <NavList>
      {content.map((item) => (
        <li key={item.ID || item.id} className="list-unstyled">
          <Link href={item.slug || '/'}>
            <a className="text-dark">{item.label || item.title}</a>
          </Link>
        </li>
      ))}
    </NavList>
  </nav>
);

export default Sidebar;
