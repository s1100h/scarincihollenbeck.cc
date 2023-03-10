import AboutAuthorFormCard from './AboutAuthorFormCard';
import SocialShare from './SocialShare';
import { ContactLinksBox } from '../../../styles/Post/PostSideBar.style';
import AttorneyCard from '../../shared/AttorneyCard';
import PracticesList from './PracticesList';

const PostSidebar = ({ authorsForCards, corePractices }) => (
  <div>
    <ContactLinksBox>
      <SocialShare />
      <h3>Key Contacts</h3>
      {authorsForCards.map((author) => (
        <AttorneyCard
          key={author.databaseId}
          link={author.uri}
          name={author.display_name}
          designation={author.designation}
          image={author.profileImage}
          number={author.phoneNumber}
          email={author.email}
        />
      ))}
      <AboutAuthorFormCard />
    </ContactLinksBox>
    <PracticesList corePracticesArr={corePractices} />
  </div>
);

export default PostSidebar;
