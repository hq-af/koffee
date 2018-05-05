import { IProvider } from '../../interfaces/IProvider';
import { UTILITY } from '../../utility';

export class CommonProvider implements IProvider {
  title: string;
  constructor(title: string) {
    this.title = title;
    UTILITY.log(`Title : '${this.title}'`);
  }
  onEpisode(episode: number, playerUrl: string): void {
    UTILITY.log(`[${this.title}] Episode ${episode} on player '${playerUrl}'`);
  }
}
