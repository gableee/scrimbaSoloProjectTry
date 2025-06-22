import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Quiz( {goHome} ) {
  const [quizData, setQuizData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {  
    fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=multiple")
      .then(response => response.json())
      .then(data => {
        const formattedData = data.results.map((q) => {
          const allAnswers = [...q.incorrect_answers, q.correct_answer] //get choiches and answer
          const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5) // shuffle them
          return {...q, allAnswers: shuffledAnswers} // get all data and replace choices with shuffled ones
        })
        setQuizData(formattedData);
        setIsLoading(false);
      })
      .catch(error => console.error("Error fetching quiz data:", error));
  }, []); //useEffect so that it won't run on every render or state change


  // Function to handle answer selection
  const handleAnswerSelect = (selectedAnswer, questionIndex) => {
    setSelectedAnswer((prev) => ({
      ...prev,
      [questionIndex]: selectedAnswer
    }));
  }

  // Function to handle the "Check Answer" button click
  function handleCheckAnswer() {
    let newScore = 0;

    quizData.forEach((question, index) => {
      if (selectedAnswer[index] === question.correct_answer) {
        newScore += 1;
      }
    })

    setScore(newScore);
    setRevealAnswer(true);
  }

  // Function to handle the "Play Again" button click
  function handlePlayAgain() {   //simply back to initial state
    setRevealAnswer(false);
    setSelectedAnswer({});
    setScore(0);
    setIsLoading(true);

    // Re-fetch new questions
    fetch("https://opentdb.com/api.php?amount=5&category=22&difficulty=medium&type=multiple")
      .then(response => response.json())
      .then(data => {
        const formattedData = data.results.map((q) => {
          const allAnswers = [...q.incorrect_answers, q.correct_answer];
          const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
          return { ...q, allAnswers: shuffledAnswers };
        });
        setQuizData(formattedData);
        setIsLoading(false);
      })
      .catch(error => console.error("Error fetching quiz data:", error));
  }
  
  return (
    <div className="quiz container" > 
      {isLoading ? ( <h1 className="Loading">Loading Questions. . .</h1>) 
      : (
        <>
          {quizData.map((question, index) => (
            <div key={index} className="questionContainer">
              <h2 className="questions" dangerouslySetInnerHTML={{__html: question.question}}></h2>

              <section className="answerContainer">
                {question.allAnswers.map((answerOptions, answerIndex) => (
                    <button className={clsx("answerChoices", {
                      selected: selectedAnswer[index] === answerOptions && !revealAnswer,
                      correct: revealAnswer && answerOptions === question.correct_answer,
                      incorrect: revealAnswer && answerOptions !== question.correct_answer && selectedAnswer[index] === answerOptions
                    })} 
                    key={answerIndex}
                    onClick={() => handleAnswerSelect(answerOptions, index)}
                    disabled={revealAnswer}>
                      <span dangerouslySetInnerHTML={{__html: answerOptions}}></span>
                    </button>
                ))}
              </section>
              <hr />
            </div>
          ))}

    <div className="bottom-bar">
      {revealAnswer && <p className="score">You scored {score}/{quizData.length} correct answers</p>}
      
      <button 
        className="CheckBtn" 
        onClick={revealAnswer ? handlePlayAgain : handleCheckAnswer}
      >
        {revealAnswer ? "Play Again" : "Check Answer"}
      </button>
    </div>
        </>

      )}

    </div>
  );
}