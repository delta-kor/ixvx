import IXVX from '@/lib/ixvx';
import Cards from '@/components/Cards';
import MusicCard from '@/components/MusicCard';

export default function MainPage() {
  return (
    <Cards title="Musics">
      {IXVX.getAllMusics().map((music) => (
        <MusicCard key={music.id} music={music} />
      ))}
    </Cards>
  );
}
