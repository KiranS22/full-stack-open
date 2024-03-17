import React, { useState } from "react";
import StatisticLine from "./StatisticLine";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0); // state for 'Good button'
  const [neutral, setNeutral] = useState(0); // state for 'neutral' button
  const [bad, setBad] = useState(0); // state for 'Bad button'
  const [total, setTotal] = useState(0); // state for total

  // Function to calculate the average score
  const calculateAvg = () => {
    return total === 0 ? 0 : (good - bad) / total;
  };

  const percentOfPosFeedback = () => {
    return total === 0 ? 0 : ((good / total) * 100);
  };

  // Event handler for 'Good' button click
  const handleGoodClick = () => {
    setGood(good + 1); // Increment 'good' state
    setTotal(total + 1); // Increment total
  };

  // Event handler for 'Neutral' button click
  const handleNeutralClick = () => {
    setNeutral(neutral + 1); // Increment 'neutral' state
    setTotal(total + 1); // Increment total
  };

  // Event handler for 'Bad' button click
  const handleBadClick = () => {
    setBad(bad + 1); // Increment 'bad' state
    setTotal(total + 1); // Increment total
  };

  return (
    <>
      <h1>Give feedback</h1>
      <Button onSmash={handleGoodClick} text="Good" />
      <Button onSmash={handleNeutralClick} text="Neutral" />
      <Button onSmash={handleBadClick} text="Bad" />
      {good === 0 && neutral === 0 && bad === 0 ? (
        <div>
          <p>No feedback collected yet</p>
        </div>
      ) : (
        <>
          <h2>Statistics</h2>
          <StatisticLine value={good} text="Good" />
          <StatisticLine value={neutral} text="Neutral" />
          <StatisticLine value={bad} text="Bad" />
          <StatisticLine value={total} text="Total" />
          <StatisticLine
            value={calculateAvg()}
            text="Average number of responses"
          />
          <StatisticLine
            value={percentOfPosFeedback()}
            text="Percentage of positive feedback"
          />
        </>
      )}
    </>
  );
};

export default App;
