import { BasicHtml5 } from './basicHtml5';
import { UTILITY } from '../../utility';

export class MCloud extends BasicHtml5 {
  constructor() {
    super();
    this.setId(UTILITY.extractId(window.location.href, /\/embed\/([^\/\?]+)/));
    let player = UTILITY.getFirstPlayer();
    document.body.addEventListener('DOMSubtreeModified', () => {
      if (player) {
        return;
      }
      if ((player = UTILITY.getFirstPlayer())) {
        this.hookPlayer(player);
      }
    });
  }
}
