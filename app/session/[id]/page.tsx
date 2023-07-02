'use client';

import CameraControl from '@/components/CameraControl';
import SessionInfo from '@/components/SessionInfo';
import Video from '@/components/Video';
import IXVX from '@/lib/ixvx';
import { notFound } from 'next/navigation';
import { useRef, useState } from 'react';

interface Props {
  params: {
    id: string;
  };
}

export default function SessionPage({ params: { id } }: Props) {
  const [session, music] = IXVX.getSession(id);

  if (!session) return notFound();

  const [video, setVideoState] = useState<Video>(session.videos[0]);
  const [start, setStart] = useState<number>(0);

  const videoRef = useRef<Video>(video);
  const absoluteTimeRef = useRef<number>(0);

  const setVideo = (video: Video) => {
    setVideoState(video);
    videoRef.current = video;
  };

  const handleVideoChange = (video: Video) => {
    setVideo(video);
  };

  const handleTimeChange = (time: number) => {
    // console.log(time);
    const video = videoRef.current;
    const videoAnchor = video.anchor || 0;
    const sessionAnchor = session.anchor || 0;
    const relativeTime = time - videoAnchor;
    const absoluteTime = sessionAnchor + relativeTime;
    absoluteTimeRef.current = absoluteTime;
  };

  const videoAnchor = video.anchor || 0;
  const sessionAnchor = session.anchor || 0;
  const startPosition = videoAnchor - sessionAnchor + absoluteTimeRef.current;

  return (
    <div className="flex flex-col items-start lg:flex-row lg:min-h-[100vh]">
      <Video video={video} start={startPosition} onTimeChange={handleTimeChange} />
      <div className="flex flex-col flex-shrink-0 self-stretch lg:w-[320px] overflow-hidden">
        <SessionInfo music={music} />
        <div className="px-xl lg:px-md">
          <CameraControl session={session} video={video} onVideoChange={handleVideoChange} />
        </div>
      </div>
    </div>
  );
}
