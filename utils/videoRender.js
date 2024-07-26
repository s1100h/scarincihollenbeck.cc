import { JSXWithDynamicLinks } from 'components/atoms/micro-templates/JSXWithDynamicLinks';

const videoChecker = (videoArg) => {
  const substrings = ['youtube.com', 'youtu.be'];
  const containsAny = substrings.some((substring) => videoArg.includes(substring));

  if (containsAny) {
    return 'iframe';
  }
  if (videoArg.includes('iframe')) {
    return 'children';
  }
  return 'video';
};

export const videoRender = (video, title) => {
  let newVideo = video.replace('watch?v=', 'embed/');

  if (video.includes('youtu.be')) {
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
      <video preload="metadata" controls>
        <source type={video?.type} src={video?.scr} />
        <track kind="captions" srcLang="en" label="English" />
        Your browser does not support the video tag.
      </video>
    ),
    children: <JSXWithDynamicLinks HTML={newVideo} />,
  };

  return <>{componentsMap[videoChecker(newVideo)]}</>;
};
