import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Assessments = () => {
  const questions = [
    {
      id: 1,
      question: "What does CSS stand for?",
      AnswerOptions: [
        { id: 1, answerText: "Computer Style Sheets", isCorrect: false },
        { id: 2, answerText: "Creative Style Sheets", isCorrect: false },
        { id: 3, answerText: "Colorful Style Sheets", isCorrect: false },
        { id: 4, answerText: "Cascading Style Sheets", isCorrect: true },
      ],
    },

    {
      id: 2,
      question:
        "Where is an HTML document is the correct place to refer to an external style sheet?",
      AnswerOptions: [
        { id: 1, answerText: "In the <body> section", isCorrect: false },
        { id: 2, answerText: "At the end of the document", isCorrect: false },
        {
          id: 3,
          answerText: "You can't refer to an external style sheet",
          isCorrect: false,
        },
        { id: 4, answerText: "In the <head> section", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, SetshowScore] = useState(false);
  const [Score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(Score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      SetshowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <Container>
          <Row className="justify-content-center mt-5 mb-5">
            <Col md={8}>
              <div className="score-section p-5 bg-light shadow text-center text-primary fw-bold">
                you scored {Score} out of {questions.length}{" "}
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="question-section text-center bg-primary text-white p-5 m-5">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{" "}
                  {questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].question}
                </div>
                <div className="answer-section pt-3">
                  <Row>
                    {questions[currentQuestion].AnswerOptions.map(
                      (answerOption) => (
                        <Col md={6} key={answerOption.id}>
                          <div className="m-1 bg-success text-white">
                            <Button
                              onClick={() =>
                                handleAnswerButtonClick(answerOption.isCorrect)
                              }
                              className="border-0 bg-success text-white"
                            >
                              {answerOption.answerText}
                            </Button>
                          </div>
                        </Col>
                      )
                    )}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Assessments;
