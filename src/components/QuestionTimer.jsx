import React from 'react'
import { useState, useEffect } from 'react';

const QuestionTimer = ({timeout, onTimeout}) => {

const [remainingTime, setRemainingTime] = useState(timeout);

useEffect(() => {
   const timer = setTimeout(onTimeout, timeout);

   return () => {
    clearInterval(timer);
   };

}, [timeout, onTimeout])



useEffect(() => {
    console.log('setting timeout');
    const interval = setInterval(() => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100)
    return () => {
        clearInterval(interval);
    };
}, [])


  return (
   <progress id="question-time" max={timeout} value={remainingTime}/>
  )
}

export default QuestionTimer