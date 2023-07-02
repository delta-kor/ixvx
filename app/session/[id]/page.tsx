import SessionInfo from '@/components/SessionInfo';
import Video from '@/components/Video';
import IXVX from '@/lib/ixvx';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function SessionPage({ params: { id } }: Props) {
  const [session, music] = IXVX.getSession(id);

  if (!session) return notFound();

  return (
    <div className="flex flex-col items-start lg:flex-row lg:min-h-[100vh]">
      <Video video={session.videos[0]} />
      <div className="flex flex-col lg:w-[400px]">
        <SessionInfo music={music} />
      </div>
    </div>
  );
}
