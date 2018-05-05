import { CommonProvider } from './common';

export class NineAnime extends CommonProvider {
  constructor() {
    try {
      const title = document.querySelector('.widget.info .title').getAttribute('data-jtitle');
      super(title);
      const playerDiv = document.getElementById('player');
      playerDiv.addEventListener('DOMSubtreeModified', () => {
        const iframe = playerDiv.getElementsByTagName('iframe')[0];
        if (!iframe) {
          return;
        }
        const ep = Number(document.querySelector('.server:not(.hidden)>.active>li>.active').getAttribute('data-base'));
        this.onEpisode(ep, iframe.src);
      });
    } catch (e) {
      throw new Error(e);
    }
  }
}
