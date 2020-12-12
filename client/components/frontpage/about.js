import Link from 'next/link';
import textStyles from 'styles/Text.module.css';

export default function FrontPageAbout() {  
  return (
    <div>
      <h4 className={`h5 ${textStyles.redTitle}`}>
        <strong>Firm Overview</strong>
      </h4>
      <hr />
      <p className="text-muted">
        With a growing practice of more than 70+ experienced attorneys, Scarinci
        Hollenbeck is an alternative to a National 250 law firm. With offices in
        New Jersey, New York City, and the District of Columbia, we serve the
        niche practice areas most often required by institutions, corporations,
        entities, and the people who own and control them.
      </p>
      <Link href="/firm-overview">
        <a className={`${textStyles.redTitle}`}>
          <strong>
            <u>Read More &gt;&gt;</u>
          </strong>
        </a>
      </Link>
    </div>
)}