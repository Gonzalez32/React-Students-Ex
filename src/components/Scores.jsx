// import React from "react";

// function Scores(props) {
//   return (
//     <div>
//       {props.scores.map((s, idx) => (
//         <p key={idx}>
//           Date:{s.date} <br/> Score:{s.score}
//     ))}
//     </div>
//   );
// }

// export default Scores;

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
