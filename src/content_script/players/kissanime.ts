import { BasicHtml5 } from './basicHtml5';
import { UTILITY } from '../../utility';

export class KissAnimePlayer extends BasicHtml5 {
  constructor() {
    super();
    this.setId(UTILITY.extractId(window.location.href, /id=([0-9]+&s=[a-z]+)/));
    this.hookPlayer();
  }
}
