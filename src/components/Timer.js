import { useEffect } from "react";

function Timer({ timeRemaining, dispatch }) {
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {Math.floor(timeRemaining / 60)}:
      {timeRemaining - Math.floor(timeRemaining / 60) * 60}
    </div>
  );
}

export default Timer;
