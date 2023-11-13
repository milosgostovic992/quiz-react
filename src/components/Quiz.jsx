import { useCallback, useState } from 'react'
import React from 'react'
import QUESTIONS from '../questions';
import Question from './Question';
import Summary from './Summary';

const Quiz = () => {

const [userAnswers, setUserAnswers] = useState([]);

const activeQuestionIndex = userAnswers.length;

const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer]
    });
}, [activeQuestionIndex])

const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), 
[handleSelectAnswer]);

if (quizIsComplete) {
    return  <Summary userAnswers={userAnswers}/>
}

  return (
 <div id='quiz'>
   <Question key={activeQuestionIndex}
   index={activeQuestionIndex}
   onSelectAnswer={handleSelectAnswer} 
   onSkip={handleSkipAnswer}/>
 </div>
  )
}

export default Quiz