'use client';

import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
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
  nextKeyIndex = nextKeyIndex < 0 ? keys.length : nextKeyIndex;

  const currentKeyIndex = nextKeyIndex - 1;
  const currentLyrics = lyrics[keys[currentKeyIndex]];
  const nextLyrics = lyrics[keys[nextKeyIndex]];

  const previousKeyIndex = nextKeyIndex - 2;
  const previousLyrics = lyrics[keys[previousKeyIndex]];

  const secondNextKeyIndex = nextKeyIndex + 1;
  const secondNextLyrics = lyrics[keys[secondNextKeyIndex]];

  return (
    <div className={`relative py-xs h-[60px] overflow-y-hidden ${font.className}`}>
      <AnimatePresence>
        {previousLyrics && (
          <motion.div
            key={previousKeyIndex}
            layoutId={previousKeyIndex.toString()}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            className="absolute top-[-24px] left-[0] w-[100%] text-[16px] font-bold text-white text-left truncate"
          >
            {previousLyrics}
          </motion.div>
        )}
        <motion.div
          key={currentKeyIndex}
          layoutId={currentKeyIndex.toString()}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="mb-xs text-[16px] font-bold text-white text-left truncate"
        >
          {currentLyrics || `${music.title} - ${music.group}`}
        </motion.div>
        <motion.div
          key={nextKeyIndex}
          layoutId={nextKeyIndex.toString()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className="text-[16px] text-white text-left opacity-50 truncate"
        >
          {nextLyrics}
        </motion.div>
        {secondNextLyrics && (
          <motion.div
            key={secondNextKeyIndex}
            layoutId={secondNextKeyIndex.toString()}
            initial={{ opacity: 0 }}
            className="text-[16px] font-bold text-white text-left self-stretch truncate"
          >
            {secondNextLyrics}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
