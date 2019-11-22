import React from "react";
import ExerciseList from "../components/ExerciseList";
import UserList from "../components/UserList";
import Header from "../components/Header";
import NewUser from "../components/NewUser";
import NewExercise from "../components/NewExercise";
import Footer from "../components/Footer";

const Home = props => {
  const user = props.match.params.username;
  const userExerciseList = fetch(`http://localhost:7777/exercises/user/${user}`)
    .then(data => data.json())
    .then(exercises => console.log(exercises))
    .catch(error => console.error(error));

  return (
    <div className="App">
      <Header />
      <main>
        <p>Welcome {user}</p>
        <NewExercise />
        {/* <NewUser /> */}
        {/* <UserList users={[...users]} /> */}
        {/* <ExerciseList exerciseList={[...exerciseList]} /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
