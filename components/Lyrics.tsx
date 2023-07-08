import { Nanum_Gothic } from 'next/font/google';

const font = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '800'] });

interface Props {
  music: Music;
  lyrics: any;
  time: number;
}

export default function Lyrics({ music, lyrics, time }: Props) {
  if (!lyrics) return null;

  const timeMs = time * 1000;
  const keys = Object.keys(lyrics).map(Number);

  let nextKeyIndex = keys.findIndex((key) => key > timeMs);
  nextKeyIndex = nextKeyIndex < 0 ? keys.length - 1 : nextKeyIndex;

  const currentKeyIndex = nextKeyIndex - 1;
  const currentLyrics = lyrics[keys[currentKeyIndex]];
  const nextLyrics = lyrics[keys[nextKeyIndex]];

  return (
    <div className={`flex flex-col py-xs justify-center items-center gap-xs ${font.className}`}>
      <div className="text-[16px] font-bold text-white text-left self-stretch truncate">
        {currentLyrics || `${music.title} - ${music.group}`}
      </div>
      <div className="text-[16px] text-white text-left self-stretch opacity-50 truncate">
        {nextLyrics}
      </div>
    </div>
  );
}
