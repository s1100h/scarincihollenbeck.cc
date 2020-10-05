export default function SimpleList({ list }) {
  return (
    <div className="mt-5">
      <ul>
        {list.map((v) => <li key={v.ID}><a href={v.slug} className="proxima-bold">{v.title}</a></li>)}
      </ul>
      <style jsx>{`
        ul {
          color: #33667d;
          -webkit-column-count: 3;
          -moz-column-count: 3;
          column-count: 3;
        }

        @media (min-width: 400px) and (max-width: 769px) {
          ul {
            -webkit-column-count: 1;
            -moz-column-count: 1;
            column-count: 1;
          }         
         }      
      `}</style>
    </div>
  );
}
