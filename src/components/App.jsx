import { useState, useEffect, useCallback } from 'react';
import Description from './Description';
import Options from './Options';
import Feedback from './Feedback';
import Notification from './Notification';
import {
  calculateTotalFeedback,
  calculatePositivePercentage,
} from './FeedbackHelpers';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  // const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const totalFeedback = useCallback(() => {
    return calculateTotalFeedback(feedback);
  }, [feedback]);

  const resetFeedback = () => setFeedback({ good: 0, neutral: 0, bad: 0 });

  // const percentagePositive =
  //   totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  const percentagePositive = useCallback(() => {
    const total = totalFeedback();
    return calculatePositivePercentage(feedback, total);
  }, [feedback, totalFeedback]);

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) setFeedback(savedFeedback);
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  //Two lines below added to call the functions totalFeedback and percentagePositive for use in render
  const total = totalFeedback();
  const positivePercentage = percentagePositive();

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={total}
      />
      {total > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={total}
          percentagePositive={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
