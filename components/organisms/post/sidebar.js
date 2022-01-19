import Col from 'react-bootstrap/Col';
import SubscriptionMessage from 'components/molecules/subscription/SubscriptionMessage';
import PostSocialShareSidebar from 'components/organisms/post/SocialShareSidebar';

const PostSidebar = ({ title }) => (
  <Col sm={12} lg={3} className="d-print-none">
    <PostSocialShareSidebar title={title} />
    <hr />
    <SubscriptionMessage />
  </Col>
);

export default PostSidebar;
