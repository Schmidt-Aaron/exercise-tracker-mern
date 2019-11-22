import React from "react";
import ExerciseList from "../components/ExerciseList";
import UserList from "../components/UserList";
import Header from "../components/Header";
import NewUser from "../components/NewUser";
import NewExercise from "../components/NewExercise";
import Footer from "../components/Footer";

const Home = props => {
  return (
    <div className="App">
      <Header />
      <main>
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
