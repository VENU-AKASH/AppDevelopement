// TriviaQuiz.js
import React, { useState } from 'react';
import '../assets/css/TriviaQuiz.css'
const TriviaQuiz = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      correctAnswer: 'Mars',
    },
    // Add more questions and answers here
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="trivia-quiz">
      {currentQuestionIndex < questions.length ? (
        <div>
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p>{questions[currentQuestionIndex].question}</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={selectedOption === option ? 'selected' : ''}
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h3>Quiz Completed</h3>
          <p>Your Score: {score}/{questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default TriviaQuiz;
