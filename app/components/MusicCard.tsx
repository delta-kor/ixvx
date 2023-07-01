import Image from 'next/image';

interface Props {
  music: Music;
}

export default function MusicCard({ music: { title, group, album } }: Props) {
  return (
    <div className="flex p-md items-center gap-md rounded-md bg-gray">
      <Image
        src={album}
        alt={title}
        className="w-[64px] h-[64px] shrink-0 rounded-sm"
      />
      <div className="flex flex-col gap-xs flex-grow min-w-0">
        <div className="text-heading3 text-white truncate">{title}</div>
        <div className="text-body1 text-white truncate">{group}</div>
      </div>
    </div>
  );
}
