import React, { useState } from "react";
import { Experiment, Variant } from "react-optimize";

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
          <Experiment id="05MkkLd7QO-fx6SkQsXOFw">
            <Variant id="0">
              <button onClick={handleYes}>YES</button>
              <button onClick={handleNo}>NO</button>
            </Variant>
            <Variant id="1">
              <button onClick={handleYes}>Yes, I liked it</button>
              <button onClick={handleNo}>No, I didn't like it</button>
            </Variant>
          </Experiment>
        </div>
      )}
    </div>
  );
};
