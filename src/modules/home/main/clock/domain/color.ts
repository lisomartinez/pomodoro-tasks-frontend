const Colors = {
    finished: "#808080",
    closeToFinish: "red",
    tenSecondsLeft: "orange",
    default: "white",
};

const Thresholds = {
    warning: 10,
    alert: 5,
    finished: 1,
};

export default class Color {
    constructor(private color: string = "lightgreen") {
    }

    static isFinished = (timeLeft: number): boolean =>
        timeLeft <= Thresholds.finished;

    static isCloseToFinish = (timeLeft: number): boolean =>
        timeLeft <= Thresholds.alert;

    static isTenSecondLeft = (timeLeft: number): boolean =>
        timeLeft <= Thresholds.warning;

    static colorOfThreshold = (timeLeft: number): string => {
        if (Color.isFinished(timeLeft)) return Colors.finished;
        if (Color.isCloseToFinish(timeLeft)) return Colors.closeToFinish;
        if (Color.isTenSecondLeft(timeLeft)) return Colors.tenSecondsLeft;
        return Colors.default;
    };

    nextFor = (time: number): Color => new Color(Color.colorOfThreshold(time));

    value = (): string => this.color;
}
