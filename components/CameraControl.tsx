import ArrayMap from '@/lib/arraymap';
import CameraChip from './CameraChip';
import Icon from './Icon';
import Jelly from './Jelly';

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
  onAction(type: 'left' | 'right'): void;
}

export default function CameraControl({
  session: { title, date, videos },
  video: { id },
  onVideoChange,
  onAction,
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
      <div className="flex justify-between items-center gap-sm self-stretch mx-[-8px]">
        <Jelly small onClick={() => onAction('left')} className="flex-shrink-0 cursor-pointer">
          <Icon type="chevron_left" className="w-[26px] h-[26px] text-primary" />
        </Jelly>
        <div className="flex flex-col justify-center items-center gap-2xs min-w-0 flex-grow">
          <div className="text-[16px] font-[700] text-white text-center self-stretch truncate select-none">
            {title}
          </div>
          <div className="text-[16px] font-[400] text-white text-center self-stretch truncate select-none">
            {date}
          </div>
        </div>
        <Jelly small onClick={() => onAction('right')} className="flex-shrink-0 cursor-pointer">
          <Icon type="chevron_right" className="w-[26px] h-[26px] text-primary" />
        </Jelly>
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
