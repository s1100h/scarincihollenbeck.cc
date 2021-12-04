import { createMarkup } from 'utils/helpers';

const Videos = ({ content }) => content.map((video) => (
  <div key={video.title} className="mb-5">
    <div dangerouslySetInnerHTML={createMarkup(video.embedVideo)} />
    <p className="mb-0">
      <span className="h6 title">{video.title}</span>
      {' '}
      -
      {video.date}
    </p>
    <style>{' .title { font-family: Proxima Nova Bold; }'}</style>
  </div>
));

export default Videos;
