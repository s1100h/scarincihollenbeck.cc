export default function SimpleList({ list }) {
  return (
    <div className="mt-5">
      <ul className="column-list">
        {list.map((v) => <li key={v.ID}><a href={v.slug} className="blue-title proxima-bold">{v.title}</a></li>)}
      </ul>
      <style jsx>{`
        ul {
          color: #33667d;
          -webkit-column-count: 3;
          -moz-column-count: 3;
          column-count: 3;
        }
      
      `}</style>
    </div>
  );
}
