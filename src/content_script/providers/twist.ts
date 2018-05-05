import { UTILITY } from '../../utility';
import { CommonProvider } from './common';

export class Twist extends CommonProvider {
  constructor() {
    const e = document.getElementsByClassName('series-title')[0];
    const player = UTILITY.getFirstPlayer();
    if (!e || !player) {
      throw new Error('Cannot find the title div or the player');
    }
    super(e.getAttribute('data-title'));
    player.addEventListener('loadedmetadata', () => {
      const l = window.location.href.split('/');
      this.onEpisode(Number(l[l.length - 1]), window.location.href);
    });
  }
}
