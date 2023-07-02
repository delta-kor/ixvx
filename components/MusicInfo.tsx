import Image from 'next/image';

interface Props {
  music: Music;
}

export default function MusicInfo({ music: { title, group, album } }: Props) {
  return (
    <div className="flex py-sm flex-col justify-center items-center gap-lg">
      <Image
        src={album}
        alt={title}
        className="w-[100px] h-[100px] rounded-sm"
      />
      <div className="flex flex-col justify-center items-center gap-xs self-stretch">
        <div className="text-heading2 text-white truncate self-stretch text-center">
          {title}
        </div>
        <div className="text-body1 text-white truncate self-stretch text-center">
          {group}
        </div>
      </div>
    </div>
  );
}
