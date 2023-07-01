import IXVXStore from '@/store/ixvx.store';

class IXVX {
  public static getAllMusics(): Music[] {
    return IXVXStore;
  }

  public static getMusic(id: string): Music | null {
    return IXVXStore.find((music) => music.id === id) || null;
  }
}

export default IXVX;
