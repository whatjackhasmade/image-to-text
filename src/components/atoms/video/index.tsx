import React from 'react';

import StyledEmbedVideo from './video.styles';

type VideoProps = {
  autoplay?: boolean;
  margin?: number;
  maxWidth?: number;
  src?: string;
  vimeo?: string;
  youtube?: string;
} & React.HTMLProps<HTMLVideoElement>;

const Video = (props: VideoProps) => {
  const isVimeo = props?.vimeo;
  const isYouTube = props?.youtube;

  if (isVimeo) return <VideoVimeo {...props} />;
  if (isYouTube) return <VideoYouTube {...props} />;

  const safe = { ...props };
  const src = props?.src;
  const autoplay = props?.autoplay;
  if (autoplay) delete safe.autoplay;
  if (src) delete safe.src;

  return (
    <video {...safe}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

function GetVimeoID(url) {
  const result = url.match(
    /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_\-]+)?/i,
  );
  return result[1];
}

const VideoVimeo = props => {
  const { autoplay, className, controls = true, loop, muted, vimeo } = props;

  const id = GetVimeoID(vimeo);
  if (!id) return null;

  const ctrlParam = controls ? 1 : 0;

  let src = `https://player.vimeo.com/video/${id}?fun=true`;
  if (autoplay) src += `&autoplay=1`;
  if (ctrlParam) src += `&controls=${ctrlParam}`;
  if (loop) src += `&loop=1`;
  if (muted) src += `&muted=1`;

  let classList = `video video--vimeo`;
  if (className) classList += ` ${className}`;

  return (
    <StyledEmbedVideo {...props} className={classList}>
      <div className="video__wrapper">
        <iframe className="video__iframe" allowFullScreen frameBorder="0" src={src} />
      </div>
    </StyledEmbedVideo>
  );
};

function GetYouTubeID(url) {
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

const VideoYouTube = props => {
  const { autoplay, className, controls = true, loop, muted, youtube } = props;

  const id = GetYouTubeID(youtube);
  if (!id) return null;

  let src = `http://www.youtube.com/embed/${id}?rel=0&hd=1`;
  if (autoplay) src += `&autoplay=1`;
  if (!controls) src += `&controls=0`;
  if (loop) src += `&loop=1`;
  if (muted) src += `&mute=1`;

  let classList = `video video--youtube`;
  if (className) classList += ` ${className}`;

  return (
    <StyledEmbedVideo {...props} className={classList}>
      <div className="video__wrapper">
        <iframe className="video__iframe" allowFullScreen frameBorder="0" src={src} />
      </div>
    </StyledEmbedVideo>
  );
};

export default Video;
