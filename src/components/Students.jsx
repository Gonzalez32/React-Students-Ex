import React from "react";
import Scores from "../components/Scores";

// function Students(props) {
//   return (
//     <React.Fragment>
//       {props.students.name}
//       {props.students.bio}
//       <Scores scores={props.studnets.scores} />
//     </React.Fragment>
//   );
// }

const Students = (props) => {
  return (
    <div>
      {props.students.map((student, idx) => (
        <p key={idx}>
          Student: {student.name}
          Bio: {student.bio}
          <Scores scores={student.scores} />
        </p>
      ))}
    </div>
  );
};

export default Students;
