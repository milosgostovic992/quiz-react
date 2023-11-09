import React from 'react'

const QuestionTimer = ({handleSkipAnswer }) => {
  return (
    <div className="progress">
        <div className="progress__current" onAnimationEnd={handleSkipAnswer}></div>
    </div>
  )
}

export default QuestionTimer