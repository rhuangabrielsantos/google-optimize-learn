import React, { useState } from "react";

import "./styles.css";

export const DarkWelcome: React.FC = () => {
  const [alreadyAnswered, setAlreadyAnswered] = useState<boolean>(false);

  const handleYes = () => {
    setAlreadyAnswered(true);
  };

  const handleNo = () => {
    setAlreadyAnswered(true);
  };

  return (
    <div className="dark-welcome">
      <h1>Welcome to the experiment</h1>

      <p>
        This experiment measures your satisfaction when viewing this page. Did
        you like the colors?
      </p>
      {alreadyAnswered ? (
        <div className="feedback">Thanks to contribute!</div>
      ) : (
        <div className="buttons">
          <button onClick={handleYes}>YES</button>
          <button onClick={handleNo}>NO</button>
        </div>
      )}
    </div>
  );
};
