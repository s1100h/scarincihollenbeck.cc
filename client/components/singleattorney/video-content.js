import { List } from 'react-virtualized';
import { createMarkup, formatDate } from 'utils/helpers';

function VideoPost(content, { key, index }) {
  const video = content[index];

  return (
    <li key={key} className="my-5 pb-5 border-bottom">
      <div
        dangerouslySetInnerHTML={createMarkup(video.embed_video)}
        className="d-block mb-0 pb-0 w-500"
      />
      <h5 className="my-0 py-0 text-dark">
        <strong>{video.title}</strong>
      </h5>
      <p className="mt-2 text-dark">{formatDate(video.date)}</p>
    </li>
  );
}
export default function SingleAttorneyVideoTab({ content }) {
  return (
    <div>
      <ul>
        <List
          width={800}
          height={600}
          rowCount={content.length}
          rowHeight={600}
          rowRenderer={(rowArgs) => VideoPost(content, rowArgs)}
        />
      </ul>
    </div>
  );
}
