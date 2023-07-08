import Image from 'next/image';
import Jelly from './Jelly';
import Link from 'next/link';
import Icon from './Icon';

interface Props {
  music: Music;
}

export default function MusicCard({ music: { id, title, group, album } }: Props) {
  return (
    <Link href={`/video/${id}`}>
      <Jelly className="flex p-md items-center gap-md rounded-md bg-gray cursor-pointer select-none">
        <Image src={album} alt={title} className="w-[64px] h-[64px] shrink-0 rounded-sm" />
        <div className="flex flex-col gap-2xs flex-grow min-w-0">
          <div className="text-heading3 text-white truncate">{title}</div>
          <div className="text-body1 text-white truncate">{group}</div>
        </div>
        <Icon type={'chevron_right'} className="w-xl h-xl text-primary" />
      </Jelly>
    </Link>
  );
}
