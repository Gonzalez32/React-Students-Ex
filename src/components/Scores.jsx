import React from "react";

const Scores = (props) => {
  return (
    <div>
      {props.scores.map((scores, idx) => (
        <p key={idx}>
          Date:{scores.date} <br /> Score:{scores.score}
        </p>
      ))}
    </div>
  );
};

export default Scores;
