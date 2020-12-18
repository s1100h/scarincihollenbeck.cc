export default function BigGrayTitle({ title }) {
  return (
    <>
      <h4>{title}</h4>
      <style jsx>
        {`
          h4 {
            font-weight: 900;
            background-color: #e9e9e9;
            padding: 10px;
            margin-bottom: 30px;
          }
        `}
      </style>
    </>
  );
}
