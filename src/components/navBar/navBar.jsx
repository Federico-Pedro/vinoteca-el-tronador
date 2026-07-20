import { Link } from 'react-router-dom'
import styles from "./navBar.module.css";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";


function NavBar() {

    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>


            <nav className={!menuOpen ? `${styles.navBar}` : `${styles.navBar} ${styles.open}`}>
                {menuOpen && <i className="bi bi-x" onClick={() => setMenuOpen(false)}></i>}
                <div className={styles.container}>

                    <Link to="/productGrid">
                        <button className={styles.button} onClick={() => setMenuOpen(false)}>
                            Nuestros Productos
                        </button>
                    </Link>
                    <Link to="/aboutUs">
                        <button className={styles.button} onClick={() => setMenuOpen(false)}>
                            ¿Quiénes somos?
                        </button>
                    </Link>
                    <Link to="/map">
                        <button className={styles.button} onClick={() => setMenuOpen(false)}>
                            ¿Dónde estamos?
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className={styles.button} onClick={() => setMenuOpen(false)}>
                            Contacto
                        </button>
                    </Link>

                </div>
            </nav>
            {!menuOpen && <i className={`bi bi-list ${styles.hamburger}`} onClick={() => setMenuOpen(true)} />}
        </div>
    )
}

export default NavBar