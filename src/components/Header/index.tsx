import logo from '../../assets/Logo.svg'
import styles from './header.module.css'
export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt="" />
    </header>
  )
}
