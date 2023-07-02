import { getThumbnailUrl } from '@/lib/image';
import Jelly from './Jelly';

interface Props {
  session: Session;
}

export default function SessionCard({ session }: Props) {
  const imageSrc = getThumbnailUrl(session.videos[0].id);

  return (
    <Jelly className="flex flex-col content-center items-center rounded-md bg-gray">
      <img className="aspect-video self-stretch rounded-sm" src={imageSrc} />
      <div className="flex px-lg py-md flex-col gap-xs self-stretch">
        <div className="text-heading3 text-white">{session.title}</div>
        <div className="text-body1 text-white">{session.date}</div>
      </div>
    </Jelly>
  );
}
