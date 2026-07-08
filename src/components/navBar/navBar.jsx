import { Link } from 'react-router-dom'
import styles from "./navBar.module.css";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";


function NavBar() {

    const navigate = useNavigate()

    return <nav className={styles.navBar}>
        <div className={styles.container}>

            <Link to="">
                <button className={styles.button}>
                    Inicio
                </button>
            </Link>
            <Link to="">
                <button className={styles.button}>
                    ¿Quiénes somos?
                </button>
            </Link>
            <Link to="">
                <button className={styles.button}>
                    FAQ
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