import React from "react";

import NewExercise from "../components/NewExercise";
import Layout from "../layouts/Layout";

const Profile = props => {
  const user = props.match.params.username;
  const userExerciseList = fetch(`http://localhost:7777/exercises/user/${user}`)
    .then(data => data.json())
    .then(exercises => console.log(exercises))
    .catch(error => console.error(error));

  return (
    <Layout {...props}>
      <p>Welcome {user}</p>
      <NewExercise />
    </Layout>
  );
};

export default Profile;
