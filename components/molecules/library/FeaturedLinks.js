import Button from 'react-bootstrap/Button';
import { ColLinks } from 'styles/FeaturedLinks.style';
import Link from 'next/link';

const FeaturedLinks = () => (
  <ColLinks sm={12} className="px-0 mx-0">
    <ul className="d-flex list-unstyled list-inline px-3 my-3 gap-3">
      <li className="list-inline-item mb-2 md-sm-0">
        <Link href="/library/category/client-alert" passHref legacyBehavior>
          <Button variant="danger">Client Alert</Button>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link href="/library/category/firm-news" passHref legacyBehavior>
          <Button variant="danger">Firm News</Button>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link href="/library/category/firm-events" passHref legacyBehavior>
          <Button variant="danger">Firm Events</Button>
        </Link>
      </li>
      <li className="list-inline-item">
        <Link href="/library/category/law-firm-insights" passHref legacyBehavior>
          <Button variant="danger">Firm Insights</Button>
        </Link>
      </li>
    </ul>
  </ColLinks>
);

export default FeaturedLinks;
