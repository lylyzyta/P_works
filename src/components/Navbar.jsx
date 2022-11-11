import styles from './Navbar.module.css'

const Navbar = () => {

    return (
       <section className={styles.navContainer}>
        <nav className={styles.navLogo}>Nombre Tienda </nav>
        <nav className={styles.navMenu}>Home </nav>
        <nav className={styles.navMenu}>Category</nav>
        <nav className={styles.navMenu}>About Me</nav>
        </section>

    )
}

export { Navbar };