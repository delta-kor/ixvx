'use client';

import IXVX from '@/lib/ixvx';
import LyricsStore from '@/store/lyrics.store';
import { notFound } from 'next/navigation';
import { useState, useRef, useCallback, useMemo } from 'react';
import CameraControl from './CameraControl';
import Lyrics from './Lyrics';
import SessionInfo from './SessionInfo';
import Video from './Video';
import Adfit from './Adfit';

interface Props {
  id: string;
}

export default function VideoPanel({ id }: Props) {
  const music = IXVX.getMusic(id);

  if (!music) return notFound();

  const initialSession = music.session[0];
  const [displaySession, setDisplaySession] = useState<Session>(initialSession);

  const [video, setVideoState] = useState<Video>(initialSession.videos[0]);
  const [time, setTime] = useState<number>(0);

  const videoRef = useRef<Video>(video);
  const absoluteTimeRef = useRef<number>(0);

  const setVideo = (video: Video) => {
    setVideoState(video);
    videoRef.current = video;
  };

  const handleVideoChange = (video: Video) => {
    setVideo(video);
  };

  const handleTimeChange = useCallback((time: number) => {
    // console.log(time);
    const video = videoRef.current;
    const videoAnchor = video.anchor || 0;
    const sessionAnchor = music.anchor || 0;
    const relativeTime = time - videoAnchor;
    const absoluteTime = sessionAnchor + relativeTime;
    absoluteTimeRef.current = absoluteTime;
    time && setTime(absoluteTime);
  }, []);

  const handleCameraAction = (type: 'left' | 'right') => {
    let index = music.session.indexOf(displaySession);
    if (type === 'left') index--;
    if (type === 'right') index++;
    if (index >= music.session.length) index = 0;
    if (index < 0) index = music.session.length - 1;
    setDisplaySession(music.session[index]);
  };

  const videoAnchor = video.anchor || 0;
  const sessionAnchor = music.anchor || 0;
  const startPosition = useMemo(
    () => videoAnchor - sessionAnchor + absoluteTimeRef.current,
    [video]
  );

  const lyrics = LyricsStore.get(music.id);

  return (
    <div className="flex flex-col items-start lg:flex-row lg:min-h-[100vh]">
      <div className="max-h-[50vh] w-full aspect-video lg:hidden"></div>
      <Video video={video} start={startPosition} onTimeChange={handleTimeChange} />
      <div className="flex flex-col flex-shrink-0 pb-xl self-stretch lg:w-[320px] overflow-hidden">
        <Adfit width="320" height="50" unit="DAN-0xBc4CLHVwzVsuVd" />
        <SessionInfo music={music} />
        <div className="flex flex-col px-xl lg:px-md gap-md">
          <Lyrics music={music} lyrics={lyrics} time={time} />
          <CameraControl
            session={displaySession}
            video={video}
            lyrics={lyrics}
            time={time}
            onVideoChange={handleVideoChange}
            onAction={handleCameraAction}
          />
        </div>
      </div>
    </div>
  );
}
