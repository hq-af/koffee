import { BasicHtml5 } from './basicHtml5';
import { UTILITY } from '../../utility';

export class TwistPlayer extends BasicHtml5 {
  constructor() {
    super();
    const player = UTILITY.getFirstPlayer();
    const rgx = /\/a\/(.+\/[0-9]+)/;
    player.addEventListener('loadedmetadata', () => {
      this.setId(UTILITY.extractId(window.location.href, rgx));
    });
    this.setId(UTILITY.extractId(window.location.href, rgx));
    this.hookPlayer(player);
  }
}
