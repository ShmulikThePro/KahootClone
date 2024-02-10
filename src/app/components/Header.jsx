'use client' ;

import { usePathname } from 'next/navigation' ;
import Link from 'next/link' ;
import styles from '@/app/page.module.css' ;

export default function Header() {
  const pathName = usePathname() ;

  return (
    <header className={styles.header}>
      <Link
        href='/'
      >
        <h2>קהוט אבל לא</h2>
      </Link>

      <Link
        href='/'
        className={pathName === '/' ? styles.activeLink : null}
      >
        <h3>בית</h3>
      </Link>
      <Link
        href='/about'
        className={pathName === '/about' ? styles.activeLink : null}
      >
        <h3>עלינו</h3>
      </Link>
    </header>
  ) ;
}