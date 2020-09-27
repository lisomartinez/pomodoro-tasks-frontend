import Color from "./color";
import Path from "./path";
import Timer from "./timer";

export default class CountdownTimer {
  constructor(
    private $color: Color = new Color(),
    private $path: Path = new Path(),
    count = 0,
    private $timer: Timer = new Timer(count)
  ) {}

  static of(number: number): CountdownTimer {
    return new CountdownTimer(new Color(), new Path(), number);
  }

  color = (): string => this.$color.value();

  path = (): string => this.$path.value();

  time = (): string => this.$timer.asFormattedString();

  next = (): CountdownTimer => {
    const newTimer = this.$timer.next();
    const newColor = this.$color.nextFor(newTimer.left());
    const newPath = this.$path.nextFor(newTimer.left());
    return new CountdownTimer(newColor, newPath, 0, newTimer);
  };

  hasFinished = (): boolean => this.$timer.hasFinished();
}
