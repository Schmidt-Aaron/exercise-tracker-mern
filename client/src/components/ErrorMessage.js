import React from "react";

export default function ErrorMessage(props) {
  return (
    <div>
      <p>{props.error}</p>
    </div>
  );
}
