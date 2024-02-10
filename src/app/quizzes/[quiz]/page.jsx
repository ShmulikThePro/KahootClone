import { promises as fs } from 'fs' ;
import Button from '@/app/components/Button' ;
import shuffle from '@/app/lib/utils' ;
import styles from '@/app/page.module.css' ;

export default async function Quiz({ params }) {
  const quizzesData = await fs.readFile(process.cwd() + '/src/app/server.json', 'utf-8') ;
  const quiz = JSON.parse(quizzesData).filter(quiz => quiz.id === params.quiz) ;

  const quizQuestionsJSX = quiz[0].questions.map((question, index) => {
    const questionAnswers = shuffle(question.answers) ;

    return (
      <div key={index}>
        <h2>{question.question}</h2>

        <div className={styles.buttons}>
          <Button answer={questionAnswers[0]} />
          <Button answer={questionAnswers[1]} />
          <Button answer={questionAnswers[2]} />
          <Button answer={questionAnswers[3]} />
        </div>
      </div>
    ) ;
  }) ;

  return (
    <div className={styles.quizQuiz}>
      {quizQuestionsJSX}
    </div>
  ) ;
}