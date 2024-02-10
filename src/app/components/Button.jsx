'use client' 

import { useState } from 'react' ;

export default function QuizButton({ answer }) {
  const [answerCorrect, setAnswerCorrect] = useState(null) ;

  return (
    <button 
      onClick={() => {
        answer.correct === true ? setAnswerCorrect({ background: 'rgb(13, 183, 131)' }) : setAnswerCorrect({ background: 'rgb(255, 51, 51)' })
      }}
      style={answerCorrect}
    >
      {answer.answer}
    </button>
  ) ;
}