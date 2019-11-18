import React from "react";

export default function ExerciseList(props) {
  const { exerciseList } = props;
  console.log(exerciseList);

  return (
    <div>
      <h2>Exercise List</h2>
      {exerciseList.map((exercise, i) => (
        <div key={i}>
          <h4>{exercise.desciption}</h4>
          <p>Name: {exercise.username}</p>
          <p>Duration: {exercise.duration}</p>
          <p>On: {exercise.date}</p>
        </div>
      ))}
    </div>
  );
}
