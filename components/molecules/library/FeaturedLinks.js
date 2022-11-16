import Button from 'react-bootstrap/Button';
import { ColLinks } from 'styles/FeaturedLinks.style';

const FeaturedLinks = () => (
  <ColLinks sm={12} className="px-0 mx-0">
    <ul className="d-flex list-unstyled list-inline px-3 my-3 gap-3">
      <li className="list-inline-item mb-2 md-sm-0">
        <Button variant="danger" href="/library/category/client-alert">
          Client Alert
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="danger" href="/library/category/firm-news">
          Firm News
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="danger" href="/library/category/firm-events">
          Firm Events
        </Button>
      </li>
      <li className="list-inline-item">
        <Button variant="danger" href="/library/category/law-firm-insights">
          Firm Insights
        </Button>
      </li>
    </ul>
  </ColLinks>
);

export default FeaturedLinks;
