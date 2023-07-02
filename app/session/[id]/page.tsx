'use client';

import CameraControl from '@/components/CameraControl';
import SessionInfo from '@/components/SessionInfo';
import Video from '@/components/Video';
import IXVX from '@/lib/ixvx';
import { notFound } from 'next/navigation';
import { useState } from 'react';

interface Props {
  params: {
    id: string;
  };
}

export default function SessionPage({ params: { id } }: Props) {
  const [session, music] = IXVX.getSession(id);

  if (!session) return notFound();

  const [video, setVideo] = useState<Video>(session.videos[0]);

  return (
    <div className="flex flex-col items-start lg:flex-row lg:min-h-[100vh]">
      <Video video={video} />
      <div className="flex flex-col flex-shrink-0 self-stretch lg:w-[320px] overflow-hidden">
        <SessionInfo music={music} />
        <div className="px-xl lg:px-md">
          <CameraControl
            session={session}
            video={video}
            onVideoChange={setVideo}
          />
        </div>
      </div>
    </div>
  );
}
