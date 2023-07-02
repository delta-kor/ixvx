import ArrayMap from '@/lib/arraymap';
import CameraChip from './CameraChip';
import { Fragment } from 'react';

interface Props {
  session: Session;
  video: Video;
  onVideoChange(video: Video): void;
}

export default function CameraControl({
  session: { title, date, videos },
  video: { id },
  onVideoChange,
}: Props) {
  const groupCameras = videos.filter((video) => !video.member);
  const membersMap = new ArrayMap<string, Video>();

  for (const video of videos) {
    if (!video.member) continue;
    membersMap.add(video.member, video);
  }

  return (
    <div className="flex px-xl py-md flex-col justify-center items-center gap-md rounded-md bg-gray">
      <div className="flex justify-center items-center gap-sm self-stretch">
        <div className="text-[16px] font-[700] text-white truncate">
          {title}
        </div>
        <div className="text-[16px] font-[400] text-white truncate">{date}</div>
      </div>
      <hr className="w-full border-background" />
      <div className="flex flex-col self-stretch gap-sm">
        {membersMap.getAll().map(([member, videos]) => (
          <div key={member} className="flex justify-between">
            <div className="text-[16px] font-[400] text-white truncate">
              {member}
            </div>
            <div className="flex flex-wrap justify-end items-center gap-sm">
              {videos.map((video) => (
                <CameraChip
                  key={video.id}
                  video={video}
                  active={video.id === id}
                  onClick={() => onVideoChange(video)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="w-full border-background" />
      <div className="flex justify-center items-center gap-sm">
        {groupCameras.map((video) => (
          <CameraChip
            key={video.id}
            video={video}
            active={video.id === id}
            onClick={() => onVideoChange(video)}
          />
        ))}
      </div>
    </div>
  );
}
