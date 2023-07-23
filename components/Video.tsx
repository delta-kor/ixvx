'use client';

import { useEffect, useRef } from 'react';
import Youtube, { YouTubeEvent } from 'react-youtube';

interface Props {
  video: Video;
  start: number;
  onTimeChange(time: number): void;
}

export default function Video({ video: { id }, start, onTimeChange }: Props) {
  const youtubeRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  const startRef = useRef<number>(start);
  const videoIdRef = useRef<string>(id);

  useEffect(() => {
    intervalRef.current = setInterval(updateTime, 25);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    updateVideo();
  }, [id, start]);

  const updateTime = () => {
    const youtube = youtubeRef.current;
    if (!youtube) return false;
    youtube.internalPlayer.getCurrentTime().then((time: number) => onTimeChange(time || 0));
  };

  const updateVideo = () => {
    const youtube = youtubeRef.current;
    if (!youtube) return false;

    youtube.internalPlayer.loadVideoById(id, start);
  };

  return (
    <div
      className={
        'fixed top-[0] left-[0] w-full aspect-video max-h-[50vh] lg:static lg:h-[100vh] lg:aspect-auto lg:max-h-none bg-gray z-10'
      }
    >
      <Youtube
        videoId={videoIdRef.current}
        className={'w-full h-full'}
        ref={youtubeRef}
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
            color: 'white',
            start: startRef.current,
          },
        }}
      />
    </div>
  );
}
