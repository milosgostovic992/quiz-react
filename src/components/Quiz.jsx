import { useCallback, useState } from 'react'
import React from 'react'
import QUESTIONS from '../questions';
import quizComplete from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer';

const Quiz = () => {

const [userAnswers, setUserAnswers] = useState([]);

const activeQuestionIndex = userAnswers.length;

const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer]
    });
}, [])

const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), 
[handleSelectAnswer]);

if (quizIsComplete) {
    return <div id="summary">
        <img src={quizComplete} alt="Quiz Complete image" />
        <h2>Quiz Completed!</h2>
    </div>
}

const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
 <div id='quiz'>
    <div id='question'>
        <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} key={activeQuestionIndex}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
        {shuffledAnswers.map(answer => <li key={answer}  className='answer'>
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
        </li>
        )}
        </ul>
    </div>
 </div>
  )
}

export default Quiz