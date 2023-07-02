import Cards from '@/components/Cards';
import MusicInfo from '@/components/MusicInfo';
import SessionCard from '@/components/SessionCard';
import IXVX from '@/lib/ixvx';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function MusicPage({ params: { id } }: Props) {
  const music = IXVX.getMusic(id);

  if (!music) return notFound();

  return (
    <>
      <MusicInfo music={music} />
      <Cards title="Sessions">
        {music.session.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </Cards>
    </>
  );
}
