import React, { useCallback, useEffect, useState } from "react";

import CountdownTimer from "../domain/countdown-timer";
import ClockSvg from "./clock-svg";

const ONE_SECOND = 1100;

type Props = {
  running: boolean;
};
const Clock: React.FC<Props> = (props: Props) => {
  const { running } = props;

  const [countdown, setCountdown] = useState(CountdownTimer.of(25));

  const cleanOnFinished = useCallback(
    (interval: number) => {
      if (countdown.hasFinished()) {
        clearInterval(interval);
      }
    },
    [countdown]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        setCountdown((actualCountdown: CountdownTimer) =>
          actualCountdown.next()
        );
      }
    }, ONE_SECOND);
    cleanOnFinished(interval);
    return () => clearInterval(interval);
  }, [cleanOnFinished, running]);

  return (
    <ClockSvg
      color={countdown.color()}
      path={countdown.path()}
      time={countdown.time()}
    />
  );
};

export default Clock;
