import { getThumbnailUrl } from '@/lib/image';
import Jelly from './Jelly';
import Link from 'next/link';

interface Props {
  session: Session;
}

export default function SessionCard({ session }: Props) {
  const imageSrc = getThumbnailUrl(session.videos[0].id);

  return (
    <Link href={`/session/${session.id}`}>
      <Jelly className="flex flex-col justify-center items-center rounded-md bg-gray">
        <img src={imageSrc} className="aspect-video self-stretch rounded-sm" />
        <div className="flex px-lg py-md flex-col gap-xs self-stretch">
          <div className="text-heading3 text-white truncate">
            {session.title}
          </div>
          <div className="text-body1 text-white truncate">{session.date}</div>
        </div>
      </Jelly>
    </Link>
  );
}
