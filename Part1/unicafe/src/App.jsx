import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0); // state for 'Good button'
  const [neutral, setNeutral] = useState(0); //state for 'neutral' button
  const [bad, setBad] = useState(0); //state for 'Bad button'
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <h1>give feedback</h1>
      <Button onSmash={handleGoodClick} text="Good"></Button>
      <Button onSmash={handleNeutralClick} text="Neutral"></Button>
      <Button onSmash={handleBadClick} text="bad"></Button>
      <Display good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
