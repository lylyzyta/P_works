import styles from './Navbar.module.css'
import logo from '../image/logo.png'

const Navbar = () => {

    return (
       <section className={styles.navContainer}>
        <img class={styles.navLogo} src={logo} alt='logo'/>
      </section>

    )
}

export { Navbar };