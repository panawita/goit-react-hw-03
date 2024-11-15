//Added to isolate totalFeedback and percentagePositive + they have been wrapped in useCallback in App.jsx

export const calculateTotalFeedback = feedback => {
  return feedback.good + feedback.neutral + feedback.bad;
};

export const calculatePositivePercentage = feedback => {
  const totalFeedback = calculateTotalFeedback(feedback);
  return totalFeedback > 0
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;
};
