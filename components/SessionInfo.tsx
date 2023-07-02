import Image from 'next/image';

interface Props {
  music: Music;
}

export default function SessionInfo({ music }: Props) {
  return (
    <div className="flex px-xl py-md items-center gap-md">
      <Image
        src={music.album}
        alt={music.title}
        className="w-[54px] h-[54px] flex-shrink-0 rounded-sm"
      />
      <div className="flex flex-col content-center gap-2xs flex-grow min-w-0">
        <div className="text-heading3 text-white truncate">{music.title}</div>
        <div className="text-body1 text-white truncate">{music.group}</div>
      </div>
    </div>
  );
}
