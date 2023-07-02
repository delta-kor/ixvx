import Image from 'next/image';
import Jelly from './Jelly';
import Icon from './Icon';
import Link from 'next/link';

interface Props {
  music: Music;
}

export default function SessionInfo({
  music: { id, title, group, album },
}: Props) {
  return (
    <Link href={`/music/${id}`}>
      <Jelly className="flex px-xl py-md items-center gap-md lg:px-lg lg:py-lg cursor-pointer select-none">
        <Image
          src={album}
          alt={title}
          className="w-[54px] h-[54px] flex-shrink-0 rounded-sm"
        />
        <div className="flex flex-col justify-center gap-2xs flex-grow min-w-0">
          <div className="text-heading3 text-white truncate">{title}</div>
          <div className="text-body1 text-white truncate">{group}</div>
        </div>
        <Icon type="chevron_right" className="w-xl h-xl text-primary" />
      </Jelly>
    </Link>
  );
}
