import MusicInfo from '@/components/MusicInfo';
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
    <div>
      <MusicInfo music={music} />
    </div>
  );
}
