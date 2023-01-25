import { VideoContainer } from 'styles/Video.style';
import { createMarkup } from 'utils/helpers';
import { useId } from 'react';

const Videos = ({ content }) => content.map((video) => (
  <VideoContainer key={useId()}>
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
