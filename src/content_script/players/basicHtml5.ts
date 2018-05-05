import { IPlayer } from '../../interfaces/IPlayer';
import { UTILITY } from '../../utility';

export class BasicHtml5 implements IPlayer {
  id: string;

  setId(id: string) {
    this.id = id;
    UTILITY.log(`PlayerID : '${this.id}'`);
  }

  hookPlayer(player = UTILITY.getFirstPlayer()) {
    if (!player) {
      throw new Error(`[${this.id}] Cannot find a compatible video player`);
    }
    UTILITY.log(`[${this.id}] Found player : '${player.id || player.className || player.tagName}'`);
    player.addEventListener('timeupdate', () => {
      if (isNaN(player.currentTime) || isNaN(player.duration)) {
        return;
      }
      this.onProgress(player.currentTime, player.duration);
    });
  }
  onProgress(currentTime: number, totalTime: number) {
    UTILITY.log(`[${this.id}] ${currentTime}/${totalTime}`);
  }
}
