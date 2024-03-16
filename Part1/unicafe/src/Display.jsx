import React from "react";

const Display = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>feedback results</h2>
      <p>Good: {good} </p>
      <p>Neutral:{neutral} </p>
      <p>Bad:{bad} </p>
    </div>
  );
};

export default Display;
