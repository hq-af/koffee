export interface IPlayer {
  id : string;
  onProgress(currentTime: number, totalTime: number): void;
}
