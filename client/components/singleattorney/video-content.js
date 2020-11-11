import Container from 'react-bootstrap/Container';
import { List } from 'react-virtualized';
import Tab from 'react-bootstrap/Tab';
import { createMarkup, addRandomKey, formatDate } from '../../utils/helpers';

function VideoPost(content, {
  key, index, isScrolling, isVisible, style,
}) {
  const video = content[index];

  return (
    <li key={key} className="my-5 pb-5 border-bottom">
      <div dangerouslySetInnerHTML={createMarkup(video.embed_video)} className="mx-auto d-block mb-0 pb-0 w-500                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      " />
      <h5 className="text-center my-0 p-y0">{video.title}</h5>
      <h5 className="py-0 my-0 text-center">{formatDate(video.date)}</h5>
    </li>
  );
}
export default function VideoTab({
  tabTitle,
  title,
  content,
}) {
  return (
    <Tab.Pane eventKey={tabTitle} title={title}>
      <h4 className="bg-light-gray">{title}</h4>
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
