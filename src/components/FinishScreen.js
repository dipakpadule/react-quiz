function FinishScreen({ points, maxMarks, dispatch }) {
  const percentage = (points / maxMarks) * 100;
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong>/ {maxMarks} (
        {Math.ceil(percentage)}
        %)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
