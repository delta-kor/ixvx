import IXVX from '@/lib/ixvx';
import Cards from '@/components/Cards';
import MusicCard from '@/components/MusicCard';
import { Metadata } from 'next';
import AdfitResponsive from '@/components/AdfitResponsive';

export const metadata: Metadata = {
  title: 'SkyCon',
  description: 'SkyCon - Multicam Concert',
  openGraph: {
    description: 'SkyCon - Multicam Concert',
  },
};

export default function MainPage() {
  return (
    <div className="flex flex-col gap-sm pb-2xl">
      <div className="flex flex-col md:items-center self-stretch px-xl">
        <AdfitResponsive />
      </div>
      <Cards title="Musics">
        {IXVX.getAllMusics().map((music) => (
          <MusicCard key={music.id} music={music} />
        ))}
      </Cards>
      <a
        href="https://forms.gle/YRxFJsrE2amkBA3d6"
        className="mx-auto text-[18px] font-bold underline text-white opacity-50"
        target="_blank"
      >
        Feature Reqeust
      </a>
    </div>
  );
}
