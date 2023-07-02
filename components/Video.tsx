'use client';

import Youtube from 'react-youtube';

interface Props {
  video: Video;
}

export default function Video({ video: { id } }: Props) {
  return (
    <div
      className={'w-full aspect-video lg:h-[100vh] lg:aspect-auto bg-primary'}
    >
      <Youtube
        videoId={id}
        className={'w-full h-full'}
        opts={{
          width: '100%',
          height: '100%',
          playerVars: { autoplay: 0, color: 'white' },
        }}
      />
    </div>
  );
}
