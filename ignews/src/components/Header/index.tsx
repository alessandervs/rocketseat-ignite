import { SigninButton } from '../SigninButton/SigninButton'
import styles from './styles.module.scss'

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>

        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <a className={styles.active} href="#1">Home</a>
          <a href="#2">Post</a>
        </nav>

        <SigninButton />

      </div>
    </header>
  )
}