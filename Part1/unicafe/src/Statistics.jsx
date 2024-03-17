import React from "react";

const Statistics = ({ good, neutral, bad, total, avg, percent }) => {
  return (
    <>
      {good === 0 && bad === 0 && bad === 0 ? (
        <div>
          <p>No feedback collected yet</p>
        </div>
      ) : (
        <div>
          <h2>Statistics</h2>
          <p>Good: {good} </p>
          <p>Neutral:{neutral} </p>
          <p>Bad:{bad} </p>
          <p>feedback total: {total} </p>
          <p>avg num of responses: {avg}</p>
          <p>Percentage of positive feedback:{percent}%</p>
        </div>
      )}
      ;
    </>
  );
};

export default Statistics;
