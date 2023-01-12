import { VideoContainer } from 'styles/Video.style';
import { createMarkup } from 'utils/helpers';

const Videos = ({ content }) => content.map((video) => (
  <VideoContainer>
    <div dangerouslySetInnerHTML={createMarkup(video.embedVideo)} />
    <p className="mb-0">
      <span className="h6 title">{video.title}</span>
      {' '}
      -
      {video.date}
    </p>
  </VideoContainer>
));

export default Videos;
