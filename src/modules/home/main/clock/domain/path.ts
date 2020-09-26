export default class Path {
    static FULL_DASH_ARRAY = 283;

    constructor(private array: string = "0 283") {
    }

    static computedCirclePathPositionFrom = (timeLeft: number): string => {
        if (timeLeft === 0) return "0 283";
        const rawTimeFraction = timeLeft / 25;
        const timeFraction = rawTimeFraction - (1 / 25) * (1 - rawTimeFraction);
        return `${(timeFraction * Path.FULL_DASH_ARRAY).toFixed(0)} 283`;
    };

    nextFor = (time: number): Path =>
        new Path(Path.computedCirclePathPositionFrom(time));

    value = (): string => this.array;
}
