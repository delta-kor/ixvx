import ArrayMap from '@/lib/arraymap';
import CameraChip from './CameraChip';
import Icon from './Icon';
import Jelly from './Jelly';
import IXVX from '@/lib/ixvx';

const VideoTypesOrder: VideoType[] = [
  'main',
  'full',
  '1take',
  'tower',
  'side',
  'live',
  'single_face',
  'single_full',
];

interface Props {
  session: Session;
  video: Video;
  lyrics: any;
  time: number;
  onVideoChange(video: Video): void;
  onAction(type: 'left' | 'right'): void;
}

export default function CameraControl({
  session,
  video,
  lyrics,
  time,
  onVideoChange,
  onAction,
}: Props) {
  const { id: sessionId, title, date, videos } = session;

  const videoId = video.id;

  const timeMs = time * 1000;
  const keys = Object.keys(lyrics).map(Number);

  let nextKeyIndex = keys.findIndex((key) => key > timeMs);
  nextKeyIndex = nextKeyIndex < 0 ? keys.length : nextKeyIndex;

  const currentKeyIndex = nextKeyIndex - 1;
  const currentLyrics = lyrics && lyrics[keys[currentKeyIndex]];
  const currentMember =
    typeof currentLyrics === 'string' &&
    currentLyrics.startsWith('*') &&
    currentLyrics.split('*')[1].split('|');

  const groupVideos = videos
    .filter((video) => !video.member)
    .sort((a, b) => VideoTypesOrder.indexOf(a.type) - VideoTypesOrder.indexOf(b.type));
  const membersMap = new ArrayMap<string, Video>();

  const members = IXVX.getMembers(sessionId);
  members.forEach((member) => membersMap.set(member));

  for (const video of videos) {
    if (!video.member) continue;
    membersMap.add(video.member, video);
  }

  return (
    <div className="flex flex-col px-xl py-md justify-center items-center gap-md rounded-md bg-gray">
      <div className="flex justify-between items-center gap-sm self-stretch mx-[-8px]">
        <Jelly
          small
          onClick={() => onAction('left')}
          className="flex-shrink-0 cursor-pointer select-none"
        >
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
      <div className="grid grid-cols-2 self-stretch gap-sm">
        {groupVideos.map((video) => (
          <CameraChip
            key={video.id}
            video={video}
            active={video.id === videoId}
            onClick={() => onVideoChange(video)}
          />
        ))}
      </div>

      <hr className="w-full border-background" />
      <div className="flex flex-col self-stretch gap-sm">
        {membersMap.getAll().map(([member, videos]) => (
          <div key={member} className="flex justify-between min-h-[32px]">
            <div className="flex gap-sm items-center">
              <div className="text-[16px] text-white truncate">{member}</div>
              {currentMember &&
                (currentMember.includes(member) || currentMember.includes('All')) && (
                  <Icon type="mic" className="w-[18px] h-[18px] text-white opacity-60" />
                )}
            </div>
            <div className="flex flex-wrap justify-end items-center gap-sm">
              {videos
                .sort((a, b) => VideoTypesOrder.indexOf(a.type) - VideoTypesOrder.indexOf(b.type))
                .map((video) => (
                  <CameraChip
                    key={video.id}
                    video={video}
                    active={video.id === videoId}
                    onClick={() => onVideoChange(video)}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
