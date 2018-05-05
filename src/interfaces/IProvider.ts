export interface IProvider {
  title: string;
  onEpisode(episode: number, playerUrl: string): void;
}
