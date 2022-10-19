import Col from 'react-bootstrap/Col';
import Subscription from 'components/molecules/subscription/Subscription';
import PostSocialShareSidebar from 'components/organisms/post/SocialShareSidebar';

const PostSidebar = ({ title }) => (
  <Col sm={12} lg={3} className="d-print-none">
    <PostSocialShareSidebar title={title} />
    <hr />
    <Subscription />
  </Col>
);

export default PostSidebar;
