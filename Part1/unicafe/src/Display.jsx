import React from "react";

const Display = ({ good, neutral, bad, total, avg, percent }) => {
  return (
    <div>
      <h2>feedback results</h2>
      <p>Good: {good} </p>
      <p>Neutral:{neutral} </p>
      <p>Bad:{bad} </p>
      <p>feedback total: {total} </p>
      <p>avg num of responses: {avg}</p>
      <p>Percentage of positive feedback:{percent}%</p>
    </div>
  );
};

export default Display;
