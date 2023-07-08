interface Props {
  music: Music;
  lyrics: any;
  time: number;
}

export default function Lyrics({ music, lyrics, time }: Props) {
  if (!lyrics) return null;

  const timeMs = time * 1000 + 100;
  const keys = Object.keys(lyrics).map(Number);

  let nextKeyIndex = keys.findIndex((key) => key > timeMs);
  nextKeyIndex = nextKeyIndex < 0 ? keys.length - 1 : nextKeyIndex;

  const currentKeyIndex = nextKeyIndex - 1;
  const currentLyrics = lyrics[keys[currentKeyIndex]];
  const nextLyrics = lyrics[keys[nextKeyIndex]];

  return (
    <div className="flex px-md py-md flex-col justify-center items-center gap-sm rounded-md bg-gray">
      <div className="text-[16px] font-bold text-white text-center self-stretch truncate">
        {currentLyrics || `${music.title} - ${music.group}`}
      </div>
      <div className="text-[16px] text-white text-center self-stretch truncate">{nextLyrics}</div>
    </div>
  );
}
