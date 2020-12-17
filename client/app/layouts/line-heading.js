export default function LineHeading({ title }) {
  return (
    <div>
      <h3>{title}</h3>
      <style jsx>
        {`
        div {
          border-bottom: 1px solid #d1d1d1;
          text-align: center;
        }

        div .active {
          color: $standard-red;
          text-decoration: underline;
          color: $standard-red;
          text-decoration: underline;
          font-size: 1.2rem;
          text-shadow: 1px 2px 4px $medium-gray-3;
        }

        h3 {
          background: #fff;
          color: #1a1a1a;
          display: inline-block;
          font-size: 18px;
          letter-spacing: .15em;
          line-height: 26px;
          margin-bottom: 0;
          padding: 0 15px;
          position: relative;
          text-transform: uppercase;
          top: 13px;
          font-style: normal;
          font-weight: 400;
        }
        
        h3:hover {
          cursor: pointer;
        }
      `}
      </style>
    </div>
  );
}
