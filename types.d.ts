interface Music {
  id: string;
  title: string;
  group: string;
  anchor?: number;
  album: StaticImageData;
  session: Session[];
}

interface Session {
  id: string;
  title: string;
  date: string;
  videos: Video[];
}

type VideoType = 'main' | 'full' | '1take' | 'tower' | 'live' | 'single_full' | 'single_face';

interface Video {
  id: string;
  type: VideoType;
  member?: string;
  anchor?: number | null;
}
