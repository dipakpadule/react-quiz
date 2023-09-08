function FinishScreen({ points, maxMarks }) {
  const percentage = (points / maxMarks) * 100;
  return (
    <p className="result">
      You Scored <strong>{points}</strong>/ {maxMarks} ({Math.ceil(percentage)}
      %)
    </p>
  );
}

export default FinishScreen;
