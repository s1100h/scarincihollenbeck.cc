import Search from '../search';
import AboutAuthor from './about-author';
import AttorneyServices from './attorney-services';

export default function SideBar(props) {
  const { bio, practices } = props;

  return (
    <div>
      <Search />
      <AboutAuthor bio={bio} />
      <AttorneyServices practices={practices} bio={bio} />
    </div>
  );
}
