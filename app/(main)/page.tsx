import IXVX from '@/lib/ixvx';
import Cards from '@/components/Cards';
import MusicCard from '@/components/MusicCard';
import { Metadata } from 'next';
import AdfitResponsive from '@/components/AdfitResponsive';

export const metadata: Metadata = {
  title: 'SkyCon',
  description: 'Make your concert in your sky',
  openGraph: {
    description: 'Make your concert in your sky',
  },
};

export default function MainPage() {
  return (
    <div className="flex flex-col gap-sm">
      <div className="flex flex-col md:items-center self-stretch px-xl">
        <AdfitResponsive />
      </div>
      <Cards title="Musics">
        {IXVX.getAllMusics().map((music) => (
          <MusicCard key={music.id} music={music} />
        ))}
      </Cards>
    </div>
  );
}
