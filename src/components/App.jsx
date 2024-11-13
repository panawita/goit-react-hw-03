import { useState } from 'react';
import { useEffect } from 'react';
import Description from './Description';
import Options from './Options';
import Feedback from './Feedback';
import Notification from './Notification';

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

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => setFeedback({ good: 0, neutral: 0, bad: 0 });

  const percentagePositive =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) setFeedback(savedFeedback);
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          percentagePositive={percentagePositive}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
