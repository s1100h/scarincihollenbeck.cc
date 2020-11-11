export default function SimpleList({ list }) {
  return (
    <div className="mt-5">
      <ul className="blue-title column-list">
        {list.map((v) => <li key={v.ID}><a href={v.slug} className="blue-title proxima-bold">{v.title}</a></li>)}
      </ul>
    </div>
  );
}