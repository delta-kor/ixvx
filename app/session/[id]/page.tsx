'use client';

import CameraControl from '@/components/CameraControl';
import Lyrics from '@/components/Lyrics';
import SessionInfo from '@/components/SessionInfo';
import Video from '@/components/Video';
import IXVX from '@/lib/ixvx';
import LyricsStore from '@/store/lyrics.store';
import { notFound } from 'next/navigation';
import { memo, useMemo, useRef, useState } from 'react';

interface Props {
  params: {
    id: string;
  };
}

export default function SessionPage({ params: { id } }: Props) {
  const [session, music] = IXVX.getSession(id);

  if (!session) return notFound();

  const [video, setVideoState] = useState<Video>(session.videos[0]);
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

  const handleTimeChange = useMemo(
    () => (time: number) => {
      // console.log(time);
      const video = videoRef.current;
      const videoAnchor = video.anchor || 0;
      const sessionAnchor = music.anchor || 0;
      const relativeTime = time - videoAnchor;
      const absoluteTime = sessionAnchor + relativeTime;
      absoluteTimeRef.current = absoluteTime;
      time && setTime(absoluteTime);
    },
    []
  );

  const videoAnchor = video.anchor || 0;
  const sessionAnchor = music.anchor || 0;
  const startPosition = useMemo(
    () => videoAnchor - sessionAnchor + absoluteTimeRef.current,
    [video, session]
  );

  const lyrics = LyricsStore.get(music.id);

  return (
    <div className="flex flex-col items-start lg:flex-row lg:min-h-[100vh]">
      <Video video={video} start={startPosition} onTimeChange={handleTimeChange} />
      <div className="flex flex-col flex-shrink-0 self-stretch lg:w-[320px] overflow-hidden">
        <SessionInfo music={music} />
        <div className="flex flex-col px-xl lg:px-md gap-md">
          <Lyrics music={music} lyrics={lyrics} time={time} />
          <CameraControl session={session} video={video} onVideoChange={handleVideoChange} />
        </div>
      </div>
    </div>
  );
}
