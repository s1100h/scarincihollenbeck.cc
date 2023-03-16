import AboutAuthorFormCard from './AboutAuthorFormCard';
import SocialShare from './SocialShare';
import { ContactLinksBox, SubscriptionPart } from '../../../styles/Post/PostSideBar.style';
import AttorneyCard from '../../shared/AttorneyCard';
import PracticesList from './PracticesList';
import SubscriptionModal from '../../molecules/subscription/SubscriptionModal';

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
    <SubscriptionPart>
      <SubscriptionModal />
    </SubscriptionPart>
  </div>
);

export default PostSidebar;
