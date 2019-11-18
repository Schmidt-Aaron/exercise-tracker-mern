import React, { useState } from "react";

const findUsers = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  return null;
};

export default findUsers;
