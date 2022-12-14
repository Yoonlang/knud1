import React from 'react';
import { isDesktop, isIOS, isSafari } from 'react-device-detect';
import styled from 'styled-components';
import { useMount } from 'utils/useMount';

interface Props {
  src: string;
}

const Video: React.FC<Props> = ({ src }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const cancelVideoMute = React.useCallback(() => {
    if (isSafari || (!isDesktop && isIOS)) {
      return;
    }

    if (videoRef.current?.muted === true) {
      videoRef.current.muted = false;
    }
  }, []);

  useMount(cancelVideoMute);

  return (
    <VideoWrapper ref={videoRef} autoPlay muted loop preload="auto" controls playsInline>
      <source src={src} type="video/mp4" />
    </VideoWrapper>
  );
};

export default Video;

const VideoWrapper = styled.video`
  object-fit: contain;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
`;
