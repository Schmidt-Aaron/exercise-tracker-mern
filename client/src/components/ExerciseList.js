import React from "react";
import moment from "moment";

export default function ExerciseList(props) {
  const { exerciseList } = props;
  console.log(exerciseList);

  return (
    <div>
      <h2>Exercise List</h2>
      <div className="exerciseContainer">
        {exerciseList.map((exercise, i) => (
          <div key={i}>
            <h4>{exercise.description}</h4>
            <p>Name: {exercise.username}</p>
            <p>Duration: {exercise.duration}</p>
            <p>On: {moment(exercise.date).format("YYYY-MM-DD")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
