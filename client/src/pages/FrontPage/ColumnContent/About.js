import React from 'react';


const About = () => (
  <div>
    <h5 className="red-title">Firm Overview</h5>
  <hr />
  <p className="text-muted">With a growing practice of more than 70+ experienced attorneys, Scarinci Hollenbeck is an alternative to a National 250 law firm. With offices in New Jersey, New York City, San Francisco, and the District of Columbia, we serve the niche practice areas most often required by institutions, corporations, entities, and the people who own and control them.</p>
  <a href={`/firm-overview`} className="red-title proxima-bold">
    <u>
      Read More &gt;&gt;
    </u>
  </a>
  </div>
);

export default About;
