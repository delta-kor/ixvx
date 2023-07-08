import ArrayMap from '@/lib/arraymap';
import CameraChip from './CameraChip';

const VideoTypesOrder: VideoType[] = [
  'main',
  'full',
  '1take',
  'tower',
  'live',
  'single_face',
  'single_full',
];

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
  const groupVideos = videos
    .filter((video) => !video.member)
    .sort((a, b) => VideoTypesOrder.indexOf(a.type) - VideoTypesOrder.indexOf(b.type));
  const membersMap = new ArrayMap<string, Video>();

  for (const video of videos) {
    if (!video.member) continue;
    membersMap.add(video.member, video);
  }

  return (
    <div className="flex px-xl py-md flex-col justify-center items-center gap-md rounded-md bg-gray">
      <div className="flex justify-center items-center gap-sm self-stretch">
        <div className="text-[16px] font-[700] text-white truncate">{title}</div>
        <div className="text-[16px] font-[400] text-white truncate">{date}</div>
      </div>
      <hr className="w-full border-background" />
      <div className="flex flex-col self-stretch gap-sm">
        {membersMap.getAll().map(([member, videos]) => (
          <div key={member} className="flex justify-between">
            <div className="text-[16px] font-[400] text-white truncate">{member}</div>
            <div className="flex flex-wrap justify-end items-center gap-sm">
              {videos
                .sort((a, b) => VideoTypesOrder.indexOf(a.type) - VideoTypesOrder.indexOf(b.type))
                .map((video) => (
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
      <div className="flex flex-wrap justify-center items-center gap-sm">
        {groupVideos.map((video) => (
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
