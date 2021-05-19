import Link from 'next/link';
import bigButtonStyles from 'styles/BigButtonTabs.module.css';

export default function AttorneyBioLinks({ links, slug }) {
  return (
    <div className="d-flex flex-column flex-md-row flex-wrap">
      {links.map((l) => (
        <div key={l.label}>
          <Link key={l.label} href={`/attorney/${slug}${l.link}`}>
            <a
              className={`${bigButtonStyles.tab} ${bigButtonStyles.onMainPracticePage} mr-0 mb-3 mr-md-3 mb-3 tab-link`}
            >
              {l.label}
            </a>
          </Link>
        </div>
      ))}
      <style jsx>
        {`
        a.tab-link {
          width: 100%;
        }

        @media (min-width:768px) {
          a.tab-link {
            width: 210px;
          }
        }

        @media (min-width:1200px) {
          a.tab-link {
            width: 220px;
          }
        }
        
      `}
      </style>
    </div>
  );
}
