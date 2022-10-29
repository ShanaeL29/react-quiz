import React, { useState } from "react";

function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many days are there in a week?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestionPosition, setCurrentQuestionPosition] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSelection = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionPosition = currentQuestionPosition + 1;
    if (nextQuestionPosition < questions.length) {
      setCurrentQuestionPosition(nextQuestionPosition);
    } else setShowScore(true);
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <p>
            You scored {score} out of {questions.length}
          </p>
          <button className="reset" onClick={handleReset}>
            Reset Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestionPosition + 1}</span>/
              {questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestionPosition].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestionPosition].answerOptions.map(
              (answerOption) => {
                return (
                  <button
                    // onClick={() => {
                    //   if (answerOption.isCorrect === true) {
                    //     setScore(score + 1);
                    //   }
                    //   handleAnswerSelection();
                    // }}
                    onClick={() => {
                      handleAnswerSelection(answerOption.isCorrect);
                    }}
                  >
                    {answerOption.answerText}
                  </button>
                );
              }
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
