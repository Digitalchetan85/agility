import React from "react";

const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && answerText === currentAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerClass = isCorrectAnswer ? "border-success" : "";
  const wrongAnswerClass = isWrongAnswer ? "" : "";
  const disabledClass = currentAnswer ? "" : "";
  return (
    <div>
      <div
        className={`border p-2 ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
        onClick={() => onSelectAnswer(answerText)}
      >
        <div className="m-1 d-inline">{letterMapping[index]}.</div>
        <div className="p-2 d-inline">{answerText}</div>
      </div>
    </div>
  );
};

export default Answer;
