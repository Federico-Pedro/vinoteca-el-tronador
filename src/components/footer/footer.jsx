import styles from './footer.module.css'
import logoVinoteca from '../assets/logo.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logoVinoteca} alt="Logo" />
        <h4 className={styles.copyright}>2026 - Vinoteca "eL TROnaDOR" ©</h4>
      </div>

    </div>
  )
}

export default Footer