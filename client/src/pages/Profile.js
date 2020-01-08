import React from "react";

import NewExercise from "../components/NewExercise";

const Profile = props => {
  const user = props.match.params.username;
  const userExerciseList = fetch(`http://localhost:7777/exercises/user/${user}`)
    .then(data => data.json())
    .then(exercises => console.log(exercises))
    .catch(error => console.error(error));

  return <NewExercise />;
};

export default Profile;
