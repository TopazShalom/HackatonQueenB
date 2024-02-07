"use client"
import Question from "./question/Question";

const Game = () => {
  return (
    <main>
      <Question />
    </main>
  );
};
export default Game;

/*
"use client";

import React, { useState } from "react";
import Result from "./congrats/result";
import Question from "./question/Question";

const Game = () => {

  const [state, setState] = useState("question");

  function handleState(newState) {
    setState(newState);
  }
  const [resultStatus, setResultStatus] = useState("");

  if (state == "result") {
    return (
      <main>
        <Result
          change={handleState}
          correct={resultStatus}
          answer={question.correct_answer}
        />
      </main>
    );
  } else if (state == "question") {
    return (
      <main>
        <Question handleState={handleState} />
      </main>
    );
  }
};

export default Game;
*/
