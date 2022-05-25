import styles from './MainBar.module.css'
import Link from 'next/Link'

const MainBar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.txt}>React Practice</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/"><a className="one">Home</a></Link>
          </li>
          <li>
            <Link href="/user/register"><a className="one">Register</a></Link>
          </li>
          <li>
            <Link href="/user/detail"><a className="two">Detalle</a></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainBar
