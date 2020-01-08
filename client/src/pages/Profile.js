import React from "react";

const Profile = props => {
  const { username, age, height, weight } = props;

  return (
    <section>
      <p>Welcome {username}</p>
    </section>
  );
};

export default Profile;
