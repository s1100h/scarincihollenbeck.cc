import Col from 'react-bootstrap/Col';
import SubscriptionMessage from 'components/molecules/subscription/subscription-message';
import PostSocialShareSidebar from 'components/organisms/post/social-share-sidebar';

export default function PostSidebar({ title }) {
  return (
    <Col sm={12} lg={3} className="d-print-none">
      <PostSocialShareSidebar title={title} />
      <hr />
      <SubscriptionMessage />
    </Col>
  );
}
