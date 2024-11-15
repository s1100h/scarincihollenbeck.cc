import {
  ContactLinksBox,
  SubscriptionPart,
} from 'styles/Post/PostSideBar.style';
import AttorneyCard from 'components/shared/AttorneyCard';
import { SubscribeBtn } from 'styles/Subscription.style';
import { useDispatch } from 'react-redux';
import SocialShare from './SocialShare';
import AboutAuthorFormCard from './AboutAuthorFormCard';
import PracticesList from './PracticesList';
import { handleSubscriptionModalOpener } from '../../../redux/slices/modals.slice';

const PostSidebar = ({ keyContacts, corePractices, isPracticeVariant }) => {
  const dispatch = useDispatch();
  return (
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
        <SubscribeBtn
          onClick={() => dispatch(handleSubscriptionModalOpener({ active: true }))}
        >
          <span>Subscribe Now!</span>
        </SubscribeBtn>
      </SubscriptionPart>
    </div>
  );
};

export default PostSidebar;
