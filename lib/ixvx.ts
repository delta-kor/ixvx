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

  public static getMembers(sessionId: string): string[] {
    const [session, music] = this.getSession(sessionId);
    if (!music) return [];

    const memberGroups: string[][] = [];
    for (const session of music.session) {
      const members = new Set<string>();
      for (const video of session.videos) video.member && members.add(video.member);
      memberGroups.push([...members]);
    }

    return memberGroups.reduce((a, b) => (a.length > b.length ? a : b));
  }
}

export default IXVX;
