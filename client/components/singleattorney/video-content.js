import { List } from 'react-virtualized';
import Tab from 'react-bootstrap/Tab';
import { createMarkup, formatDate } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

function VideoPost(content, { key, index }) {
  const video = content[index];

  return (
    <li key={key} className="my-5 pb-5 border-bottom">
      <div
        dangerouslySetInnerHTML={createMarkup(video.embed_video)}
        className="mx-auto d-block mb-0 pb-0 w-500 text-center"
      />
      <h5 className="text-center my-0 py-0 text-dark">
        <strong>{video.title}</strong>
      </h5>
      <p className="mt-2 text-center text-dark">{formatDate(video.date)}</p>
    </li>
  );
}
export default function SingleAttorneyVideoTab({ tabTitle, title, content }) {
  return (
    <Tab.Pane eventKey={tabTitle} title={title}>
      <h4 className={grayTitleStyles.title}>{title}</h4>
      <ul>
        <List
          width={800}
          height={600}
          rowCount={content.length}
          rowHeight={600}
          rowRenderer={(rowArgs) => VideoPost(content, rowArgs)}
        />
      </ul>
    </Tab.Pane>
  );
}
