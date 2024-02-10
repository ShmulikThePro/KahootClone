'use client' ;

import { useEffect, useState } from 'react' ;
import getStaticProps from '@/app/lib/changeJSON' ; 
import styles from '@/app/page.module.css' ;

export default function CreateNewQuiz() {
  const [quizInfo, setQuizInfo] = useState({
    title: '',
    description: '',
    questions: [
      {
        question: '',
        answers: [
          {
            answer: '',
            correct: false
          },
          {
            answer: '',
            correct: false
          },
          {
            answer: '',
            correct: false
          },
          {
            answer: '',
            correct: false
          }
        ]
      },
      {
        question: '',
        answers: [
          {
            answer: '',
            correct: false
          },
          {
            answer: '',
            correct: false
          },
          {
            answer: '',
            correct: false
          },
          {
            answer: '',
            correct: false
          }
        ]
      },
      {
        question: '',
        answers: [
          {
            answer: '',
            correct: false
          },
          {
            answer: '',
            correct: false
          },
          {
            answer: '',
            correct: false
          },
          {
            answer: '',
            correct: false
          }
        ]
      }
    ]
  }) ;

  useEffect(() => {
    console.log(quizInfo) ;
  }, [quizInfo]) ;

  function handleChange(e) {
    const { name, value, type, checked } = e.target ;
    const [questionIndex, field, answerNumber] = name.split('-') ;

    if (type === 'checkbox') {
      setQuizInfo(prevInfo => ({
        ...prevInfo,
        questions: prevInfo.questions.map((q, index) => {
          if (index != questionIndex) return q ;

          return {
            ...q,
            answers: q.answers.map((a, ansIndex) => {
              console.log(ansIndex, answerNumber)
              if (ansIndex != answerNumber) return a ;
            
              return {
                ...a,
                correct: checked
              } ;
            })
          } ;
        })
      })) ;
      
      return ;
    }

    if (name === 'title') {
      setQuizInfo(prevInfo => ({
        ...prevInfo,
        title: value
      })) ;

      return ;
    } else if (name === 'description') {
      setQuizInfo(prevInfo => ({
        ...prevInfo,
        description: value
      })) ;

      return ;
    } else if (field.includes('answer')) {
      setQuizInfo(prevInfo => ({
        ...prevInfo,
        questions: prevInfo.questions.map((q, index) => {
          if (index != questionIndex) return q ;

          return {
            ...q,
            answers: q.answers.map((a, ansIndex) => {
              if (ansIndex != answerNumber) return a ;
              return {
                ...a,
                answer: value
              } ;
            })
          } ;
        })
      })) ;

      return ;
    } else if (field === 'question') {
      setQuizInfo(prevInfo => ({
        ...prevInfo,
        questions: prevInfo.questions.map((q, index) => {
          if (index != questionIndex) return q ;

          return {
            ...q,
            question: value
          } ;
        })
      })) ;
    }
  }

  function handleSubmit(e) {
    e.preventDefault() ;
    getStaticProps(quizInfo) ;
  }
  
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.mainForm}>
        <input
          name='title'
          placeholder='הכניסו כותרת לחידון'
          value={quizInfo.title}
          onChange={handleChange}
        />

        <input
          name='description'
          placeholder={'הכניסו תיאור'}
          value={quizInfo.description}
          onChange={handleChange}
        />

        <div className={styles.newQuizForm}>
          {[0, 1, 2].map(questionIndex => (
            <div key={questionIndex}>
              <input
                className={styles.mainInput}
                name={`${questionIndex}-question`}
                placeholder={`הכניסו שאלה מספר ${questionIndex + 1}`}
                value={quizInfo.questions[questionIndex].question}
                onChange={handleChange}
              /> 

              {[0, 1, 2, 3].map(answerIndex => {
                const checkboxName = `${questionIndex}-${answerIndex}-correct` ;

                return (
                  <div key={answerIndex}>
                    <input
                      className={styles.answerInput}
                      name={`${questionIndex}-answer-${answerIndex}`}
                      placeholder={`תשובה מספר ${answerIndex + 1}`}
                      value={quizInfo.questions[questionIndex].answers[answerIndex].answer}
                      onChange={handleChange}
                    /> <br />

                    <input
                      name={`${questionIndex}-correct-${answerIndex}`}
                      type='checkbox'
                      checked={quizInfo.questions[questionIndex].answers[answerIndex].correct}
                      onChange={handleChange}
                    />
                    <label>תשובה נכונה</label>
                  </div>
                ) ;
              })}
            </div>
          ))}
        </div>

        <button type='submit'>שלחו</button>
      </form>
    </>
  )
}