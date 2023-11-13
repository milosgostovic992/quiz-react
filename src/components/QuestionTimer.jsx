import React from 'react'

const QuestionTimer = ({onSkip, mode }) => {
  return (
    <div className="progress">
        <div className="progress__current" onAnimationEnd={onSkip}></div>
    </div>
  )
}

export default QuestionTimer