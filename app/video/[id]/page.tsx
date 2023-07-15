import VideoPanel from '@/components/VideoPanel';
import { getThumbnailUrl } from '@/lib/image';
import IXVX from '@/lib/ixvx';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: string;
  };
}

export default function VideoPage({ params: { id } }: Props) {
  return <VideoPanel id={id} />;
}

export function generateMetadata({ params: { id } }: Props): Metadata {
  const music = IXVX.getMusic(id);

  if (!music) return notFound();

  return {
    title: `${music.title} - ${music.group} | SkyCon`,
    description: 'SkyCon - Multicam Concert',
    openGraph: {
      images: [
        {
          url: getThumbnailUrl(music.session[0].videos[0].id),
          width: 1280,
          height: 720,
        },
      ],
      description: 'SkyCon - Multicam Concert',
    },
  };
}
