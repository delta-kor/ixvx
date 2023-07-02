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

  useEffect(() => {
    intervalRef.current = setInterval(updateTime, 100);

    return () => clearInterval(intervalRef.current);
  }, []);

  const updateTime = () => {
    const youtube = youtubeRef.current;
    if (youtube) {
      youtube.internalPlayer
        .getCurrentTime()
        .then((time: number) => onTimeChange(time || 0));
    }
  };

  return (
    <div className={'w-full aspect-video lg:h-[100vh] lg:aspect-auto bg-gray'}>
      <Youtube
        videoId={id}
        className={'w-full h-full'}
        ref={youtubeRef}
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
            color: 'white',
            start,
          },
        }}
      />
    </div>
  );
}
