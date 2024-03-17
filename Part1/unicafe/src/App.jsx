import React, { useState } from "react";
import Display from "./Display";
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
    return total === 0 ? 0 : ((good / total) * 100).toFixed(8);
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
      <Display
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        avg={calculateAvg()}
        percent={percentOfPosFeedback()}
      />
    </>
  );
};

export default App;
