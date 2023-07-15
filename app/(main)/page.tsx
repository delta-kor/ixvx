import IXVX from '@/lib/ixvx';
import Cards from '@/components/Cards';
import MusicCard from '@/components/MusicCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SkyCon',
  description: 'Make your concert in your sky',
};

export default function MainPage() {
  return (
    <Cards title="Musics">
      {IXVX.getAllMusics().map((music) => (
        <MusicCard key={music.id} music={music} />
      ))}
    </Cards>
  );
}
