import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.logoContainer}>
        <img className={styles.logo} src="src/assets/logo.png" alt="Logo" />
        <h4 className={styles.copyright}>2026 - Vinoteca "eL TROnaDOR" ©</h4>
        </div>
         
        </div>
  )
}

export default Footer