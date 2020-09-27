export default class Timer {
  constructor(private timeLeft: number) {}

  static getFormattedTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    let secondsStr = "";
    if (seconds < 10) {
      secondsStr = `0${seconds}`;
    } else {
      secondsStr = `${seconds}`;
    }
    return `${minutes}:${secondsStr}`;
  };

  next = (): Timer => new Timer(this.timeLeft - 1);

  left = (): number => this.timeLeft;

  asFormattedString = (): string => Timer.getFormattedTime(this.timeLeft);

  hasFinished = (): boolean => this.timeLeft === 0;
}
