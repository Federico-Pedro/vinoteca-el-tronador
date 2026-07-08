import { Link } from 'react-router-dom'
import styles from "./socialSideBar.module.css";
import { useNavigate } from 'react-router-dom'



function SocialSideBar() {

    const navigate = useNavigate()

    return <nav className={styles.socialSideBar}>
        <div className={styles.container}>

            <Link className={styles.link} to="https://www.instagram.com/vinotecaseltronadortandil/">
                <i className="bi bi-instagram"></i>
            </Link>
            <Link className={styles.link} to="https://www.facebook.com/vinotecaseltronador">
                <i className="bi bi-facebook"></i>
            </Link>
            <Link className={styles.link} to="">
                <i className="bi bi-twitter-x"></i>
            </Link>
            <Link className={styles.link} to="">
                <i className="bi bi-tiktok"></i>
            </Link>

        </div>
    </nav>
}

export default SocialSideBar
