export const UTILITY = {
  log(message: string) {
    console.log(message);
  },
  extractId(url: string, rgx: RegExp) {
    const matches = rgx.exec(url);
    if (!matches) {
      throw new Error(`Cannot extract id for ${url}`);
    }
    return matches[1];
  },
  getFirstPlayer(): HTMLVideoElement | null {
    if (document.getElementsByTagName('video').length > 0) {
      return document.getElementsByTagName('video')[0] as HTMLVideoElement;
    }
    return null;
  }
};
