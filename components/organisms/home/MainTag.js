const HomeMainTag = ({ mainTag, subMainTag }) => (
  <div className="my-5 text-center">
    <h1 className="h3">
      <strong>{mainTag}</strong>
    </h1>
    <h2 className="my-4 h4">
      <strong>{subMainTag}</strong>
    </h2>
    <style jsx>
      {`
          h1 {
            font-size: 2rem;
            line-height: 1.2
            font-weight: 300;
          }
          h2 {
            color: #db2220;
          }
        `}
    </style>
  </div>
);

export default HomeMainTag;
