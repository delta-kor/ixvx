import IXVXStore from '@/store/ixvx.store';

class IXVX {
  public static getAllMusics(): Music[] {
    return IXVXStore;
  }

  public static getMusic(id: string): Music | null {
    return IXVXStore.find((music) => music.id === id) || null;
  }

  public static getSession(id: string): [Session, Music] | [null, null] {
    for (const music of IXVXStore) {
      const session = music.session.find((session) => session.id === id);
      if (session) return [session, music];
    }
    return [null, null];
  }
}

export default IXVX;
