import React from 'react';
import { useMount } from 'utils/useMount';

interface Props {
  src: string;
}

const Video: React.FC<Props> = ({ src }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const cancelVideoMute = React.useCallback(() => {
    if (videoRef.current?.muted === true) {
      videoRef.current.muted = false;
    }
  }, []);

  useMount(cancelVideoMute);

  return (
    <video ref={videoRef} autoPlay muted loop preload="metadata" controls playsInline>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
