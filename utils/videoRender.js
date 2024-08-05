import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';

const videoChecker = (videoArg) => {
  const substrings = ['youtube.com', 'youtu.be'];
  const containsAny = typeof videoArg === 'string'
    && substrings.some((substring) => videoArg.includes(substring));

  if (containsAny) {
    return 'iframe';
  }
  if (typeof videoArg === 'string' && videoArg.includes('iframe')) {
    return 'children';
  }
  return 'video';
};

export const videoRender = (video, title, videoRef) => {
  let newVideo = typeof video === 'string' ? video.replace('watch?v=', 'embed/') : video;

  if (typeof video === 'string' && video.includes('youtu.be')) {
    newVideo = video.split('/');
    newVideo = newVideo[newVideo.length - 1];
    newVideo = `https://www.youtube.com/embed/${newVideo}`;
  }

  const componentsMap = {
    iframe: (
      <iframe
        className="video-render"
        src={newVideo}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    ),
    video: (
      <video preload="metadata" controls ref={videoRef}>
        <source type={newVideo?.type} src={newVideo?.src} />
        <track kind="captions" srcLang="en" label="English" />
        Your browser does not support the video tag.
      </video>
    ),
    children: <JSXWithDynamicLinks HTML={newVideo} />,
  };

  return <>{componentsMap[videoChecker(newVideo)]}</>;
};
