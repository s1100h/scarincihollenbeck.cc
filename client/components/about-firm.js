import Link from 'next/link';

const AboutFirm = () => (
  <div className="w-100 mt-5">
    <div className="sidebar-title">
      Firm Resources
    </div>
    <div className="off-white">
      <ul className="pl-0 pt-2 pb-1 pr-1 sidebar-content-page">
        <li>
          <Link href="/category/firm-news">
            <a className="proxima-bold">
              Firm News
            </a>
          </Link>
        </li>
        <li>
          <Link href="/category/law-firm-insights">
            <a className="proxima-bold">
              Firm Insights
            </a>
          </Link>
        </li>
        <li>
          <Link href="/category/firm-events">
            <a className="proxima-bold">
              Firm Events
            </a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default AboutFirm;
