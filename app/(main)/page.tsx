import IXVX from '@/lib/ixvx';
import Cards from '@/components/Cards';
import MusicCard from '@/components/MusicCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IXVX',
  description: 'IXVX Explorer',
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
