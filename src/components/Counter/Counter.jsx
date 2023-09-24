import React, { useState } from 'react';
import Controls from './Controls';
import Value from './Statistics';
import Notification from './Notification';
import { Container } from './Counter.styled';

const Counter = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleGood = () =>
    setFeedback({ ...feedback, good: feedback.good + 1 });
  const handleNeutral = () =>
    setFeedback({ ...feedback, neutral: feedback.neutral + 1 });
  const handleBad = () => setFeedback({ ...feedback, bad: feedback.bad + 1 });

  const { good, neutral, bad } = feedback;
  const onTotalValue = good + neutral + bad;
  const onPositiveValue = (good / onTotalValue) * 100;

  return (
    <Container>
      <h1>Please leave feedback</h1>
      <Controls
        onGood={handleGood}
        onNeutral={handleNeutral}
        onBad={handleBad}
      />
      <h2>Statistics</h2>
      {onTotalValue > 0 ? (
        <Value
          onGoodValue={good}
          onNeutralValue={neutral}
          onBadValue={bad}
          onTotalValue={onTotalValue}
          onPositiveValue={onPositiveValue}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};

export default Counter;
