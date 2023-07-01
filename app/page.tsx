import IXVX from '@/lib/ixvx';
import Cards from './components/Cards';
import Header from './components/Header';
import MusicCard from './components/MusicCard';

export default function MainPage() {
  return (
    <div>
      <Header title="IXFX" icon="logo" />
      <Cards title="Musics">
        {IXVX.getAllMusics().map((music) => (
          <MusicCard music={music} />
        ))}
      </Cards>
    </div>
  );
}
