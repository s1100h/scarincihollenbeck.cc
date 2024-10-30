import {
  ContactLinksBox,
  SubscriptionPart,
} from 'styles/Post/PostSideBar.style';
import AttorneyCard from 'components/shared/AttorneyCard';
import SubscriptionModal from 'components/molecules/subscription/SubscriptionModal';
import SocialShare from './SocialShare';
import AboutAuthorFormCard from './AboutAuthorFormCard';
import PracticesList from './PracticesList';

const PostSidebar = ({ keyContacts, corePractices, isPracticeVariant }) => (
  <div>
    <ContactLinksBox>
      <SocialShare isPractice={isPracticeVariant} />
      <h3>Key Contacts</h3>
      {keyContacts.map((author) => (
        <AttorneyCard
          key={author.databaseId}
          link={author.uri || author.link}
          name={author.display_name || author.title}
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
