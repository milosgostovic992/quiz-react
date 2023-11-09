import { useCallback, useState } from 'react'
import React from 'react'
import QUESTIONS from '../questions';
import quizComplete from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer';

const Quiz = () => {

const [answerState, setUserAnswerState] = useState('');
const [userAnswers, setUserAnswers] = useState([]);

const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;

const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswerState('answered');
    setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer]
    });
    setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
            setUserAnswerState('correct')
            console.log('correct');
        } else {
            setUserAnswerState('wrong');
                console.log('wrong');
        }

        setTimeout(() => {
            setUserAnswerState('');
        }, 2000);
    }, 1000);
}, [activeQuestionIndex])

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
        <QuestionTimer  handleSkipAnswer={handleSkipAnswer} key={activeQuestionIndex}/>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
        {shuffledAnswers.map((answer) =>  {
            const isSelected = userAnswers[userAnswers.length -1] === answer;
            let css = '';

            if( answerState === 'answered' && isSelected) {
                css = 'selected'
            }

            if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                css = answerState;
            }

            return (
                <li key={answer}  className='answer'>
            <button className={css} onClick={() => handleSelectAnswer(answer)}>{answer}</button>
        </li>
            );
        })}
        </ul>
    </div>
 </div>
  )
}

export default Quiz