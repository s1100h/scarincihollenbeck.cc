import Link from 'next/link';

const About = () => (
  <div>
    <h4 className="red-title h5">Firm Overview</h4>
    <hr />
    <p className="text-muted">With a growing practice of more than 60 experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm. With offices in New Jersey, New York City, and the District of Columbia, we serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them.</p>
    <Link href="/firm-overview">
      <a className="red-title proxima-bold">
        <u>
          Read More &gt;&gt;
        </u>
      </a>
    </Link>
  </div>
);

export default About;
