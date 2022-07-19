import { useState } from 'react';
import { Section } from './feedback/section';
import { Statistics } from './feedback/statistics';
import { FeedbackOptions } from './feedback/feedbackOptions/FeedbackOptions';
import { Notification } from './feedback/notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonNameOptionsArr = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;
    }
  };

  const total = () => {
    return good + neutral + bad;
  };

  const percentagePositive = () => {
    let percentage = Math.floor((good / total()) * 100);

    return percentage;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          buttonName={buttonNameOptionsArr}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={percentagePositive()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
}
