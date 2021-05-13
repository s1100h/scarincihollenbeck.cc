import Link from 'next/link';
import { useRouter } from 'next/router';
import bigButtonStyles from 'styles/BigButtonTabs.module.css';

export default function AttorneyBioLinks({ links }) {
  const router = useRouter();

  return (
    <div className="d-flex flex-column flex-md-row flex-wrap">
      {links.map((l) => (
        <div key={l.label}>
          <Link key={l.label} href={`${router.asPath}l.link`}>
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
