import { Link } from 'react-router-dom'
import styles from "./navBar.module.css";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";


function NavBar() {

    const navigate = useNavigate()

    return <nav className={styles.navBar}>
        <div className={styles.container}>

            <Link to="/productGrid">
                <button className={styles.button}>
                    Nuestros Productos
                </button>
            </Link>
            <Link to="/aboutUs">
                <button className={styles.button}>
                    ¿Quiénes somos?
                </button>
            </Link>
            <Link to="/map">
                <button className={styles.button}>
                    ¿Dónde estamos?
                </button>
            </Link>
            <Link to="">
                <button className={styles.button}>
                    Contacto
                </button>
            </Link>

        </div>
    </nav>
}

export default NavBar