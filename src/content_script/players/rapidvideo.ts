import { BasicHtml5 } from './basicHtml5';
import { UTILITY } from '../../utility';

export class RapidVideo extends BasicHtml5 {
  constructor() {
    super();
    this.setId(UTILITY.extractId(window.location.href, /\/e\/([^\/\?]+)/));
    this.hookPlayer();
  }
}
