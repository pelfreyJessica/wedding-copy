import React from "react";

import "./questionAnswer.scss";

const QuestionAnswer = (props) => (
  <div className="question-answer">
      <p className="question-answer__question">{props.question}</p>
      <p className="question-answer__answer">{props.answer}</p>
  </div>
);

export default QuestionAnswer;