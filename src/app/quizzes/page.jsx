import Link from 'next/link' ;
import Image from 'next/image' ;
import quizzesData from '@/app/server.json' ;
import { notoSansHebrew } from '@/app/ui/fonts' ;
import styles from '@/app/page.module.css' ;

export default function Quizzes() {
  const quizzesDataJSX = quizzesData.map(quiz => {
    return (
      <div key={quiz.id}>
        <Link 
          href={`quizzes/${quiz.id}`}
          className={`${notoSansHebrew.className} ${styles.quiz}`}
        > 
          <Image
            src={quiz.previewImg}
            width={0}
            height={0}
            style={{ width: '100%', height: '100px' }}
            alt="תמונה"
            unoptimized
            priority
          />
          <h2>{quiz.title}</h2>
          <h3 className={styles.twoLinesMax}>{quiz.description}</h3>
          <h6>נערך לאחרונה: {quiz.updatedAt}</h6>
        </Link>
      </div>
    ) ;
  }) ;

  return (
    <div className={styles.quizzes}>
      {quizzesDataJSX}
    </div>
  ) ;
}