import Link from 'next/link' ;

export default function Home() {
  return (
    <main>
      <p>Home page goes here</p>

      <Link
        href='quizzes'
      >
        <p>לכו לחידונים</p>
      </Link>
    </main>
  ) ;
}
