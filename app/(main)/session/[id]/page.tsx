import SessionInfo from '@/components/SessionInfo';
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
    <>
      <SessionInfo music={music} />
    </>
  );
}
