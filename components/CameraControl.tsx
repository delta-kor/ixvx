import CameraChip from './CameraChip';

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

  return (
    <div className="flex px-xl py-md flex-col justify-center items-center gap-md rounded-md bg-gray">
      <div className="flex justify-center items-center gap-sm self-stretch">
        <div className="text-[16px] font-[700] text-white truncate">
          {title}
        </div>
        <div className="text-[16px] font-[400] text-white truncate">{date}</div>
      </div>
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
