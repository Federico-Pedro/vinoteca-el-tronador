import { Link } from 'react-router-dom'
import styles from './back.module.css'

function Back() {

    return (

        <div className={styles.backContainer}>

            <Link to="/">
                <h4 className={styles.back}>Volver</h4>
            </Link>
        </div>
    )

}

export default Back