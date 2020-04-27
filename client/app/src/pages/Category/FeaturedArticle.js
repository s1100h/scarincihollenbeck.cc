import React from 'react';
import PropTypes from 'prop-types';

const noImg = 'https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2020/04/no-image-found-diamond.png';

function FeaturedArticle(props) {
  const { main } = props;

  return (
    <article>
      { main.map((val) => (
        <div className="main" key={val.title}>
          <a href={val.link}>
            <img src={val.image ? val.image : noImg} className="img-fluid" alt={val.title} />
          </a>
          <p className="mt-5 mb-4">
            <a href={val.category.link} className="text-muted ft-01 text-uppercase">
              {val.category.name}
            </a>
          </p>
          <h1 className="mb-4 mt-3 display-4">
            <a href={val.link}>
              {val.title}
            </a>
          </h1>
          <p className="text-muted mt-4 mb-4 mr-4">
            {val.excerpt}
          </p>
          <hr />
          <p className="mt-4 mb-4 ft-13">
            <span className="text-black">BY </span>
            {val.author.map((a, indx) => (
              (indx < val.author.length - 1) ? (
                  <a key={a.name} href={a.link} className="text-black text-uppercase">
                    <u>{`${a.name},`}</u>
                    {' '}
                  </a>
                ) : (
                  <a key={a.name} href={a.link} className="text-black text-uppercase">
                    <u>{a.name}</u>
                  </a>
                )
            ))
            }
          </p>
        </div>
      ))}
    </article>
  );
}

FeaturedArticle.propTypes = {
  main: PropTypes.arrayOf(PropTypes.object),
};

FeaturedArticle.defaultProps = {
  main: [],
};

export default FeaturedArticle;
