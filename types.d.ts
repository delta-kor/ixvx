interface Music {
  id: string;
  title: string;
  group: string;
  album: StaticImageData;
  session: Session[];
}

interface Session {
  id: string;
  title: string;
  date: string;
  anchor?: number;
  videos: Video[];
}

type VideoType = 'main' | 'full' | '1take' | 'single_full' | 'single_face';

interface Video {
  id: string;
  type: VideoType;
  member?: string;
  anchor?: number;
}
