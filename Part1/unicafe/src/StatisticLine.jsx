import React from "react";

const StatisticLine = ({ value, text }) => {
  return (
    <>
      <div>
        {text === "Percentage of positive feedback" ? (
          <p>
            {text}: {value}%{" "}
          </p>
        ) : (
          <p>
            {text}: {value}{" "}
          </p>
        )}
      </div>
    </>
  );
};

export default StatisticLine;
