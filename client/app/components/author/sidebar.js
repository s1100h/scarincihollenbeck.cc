import Search from '../search';
import AboutAuthor from './about-author';
import AttorneyServices from './attorney-services';

export default function SideBar({ bio, practices }) {
  return (
    <div>
      <Search />
      <AboutAuthor bio={bio} />
      <AttorneyServices practices={practices} bio={bio} />
    </div>
  );
}
