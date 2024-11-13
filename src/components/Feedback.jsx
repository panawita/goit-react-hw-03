const Feedback = ({ feedback, totalFeedback, percentagePositive }) => {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad:{feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {percentagePositive}%</p>
    </div>
  );
};

export default Feedback;
