import { VideoContainer } from 'styles/Video.style';
import { useId } from 'react';
import { JSXWithDynamicLinks } from '../../atoms/micro-templates/JSXWithDynamicLinks';

const Videos = ({ content }) => content.map((video) => (
  <VideoContainer key={useId()}>
    <JSXWithDynamicLinks HTML={video.embedVideo} />
    <p className="mb-5">
      <span className="h6 title">{video.title}</span>
      {' '}
      -
      {video.date}
    </p>
  </VideoContainer>
));

export default Videos;
