import React from "react";
import Scores from "../components/Scores";

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
