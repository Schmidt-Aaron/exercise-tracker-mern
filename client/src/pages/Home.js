import React from "react";
import NewExercise from "../components/NewExercise";
import Layout from "../layouts/Layout";

const Home = props => {
  return (
    <Layout {...props}>
      <NewExercise />
    </Layout>
  );
};

export default Home;
