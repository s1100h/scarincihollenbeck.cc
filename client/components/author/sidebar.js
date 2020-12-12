import Search from '../search';
import AuthorAbout from './about';
import AuthorServices from './services';

export default function AuthorSideBar({ bio, practices }) {
  return (
    <div>
      <Search />
      <AuthorAbout bio={bio} />
      <AuthorServices practices={practices} bio={bio} />
    </div>
  );
}
