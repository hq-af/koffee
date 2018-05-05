import { BasicHtml5 } from './basicHtml5';
import { UTILITY } from '../../utility';

export class Openload extends BasicHtml5 {
  constructor() {
    super();
    this.setId(UTILITY.extractId(window.location.href, /\/embed\/([^\/\?]+)/));
    this.hookPlayer();
  }
}
