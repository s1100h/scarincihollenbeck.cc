const PageLink = ({ link, title, margins = 'my-3' }) => (
  <div className={`mx-auto d-block w-100 text-center ${margins}`}>
    <a href={link}>
      <strong>
        <u>{title}</u>
      </strong>
    </a>
    <style jsx>
      {`
        a {
          color: #db2220;
          font-size: 1.275rem;
        }
      `}
    </style>
  </div>
);

export default PageLink;
