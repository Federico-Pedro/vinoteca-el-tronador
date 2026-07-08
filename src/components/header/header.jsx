import { Link } from 'react-router-dom'
import styles from "./header.module.css";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

import logo from '../../assets/logo.png';


function Header() {

    const [menuOpen, setMenuOpen] = useState(true)
    const navigate = useNavigate()

    return <header className={styles.header}>
        <div className={styles.container}>

            <div className={styles.subContainer}>
                <Link to="/"><img className={styles.logo} src={logo} alt="Logo de 'eL TROnaDOR', vinoteca" /></Link>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Vinoteca '<span className={styles.minusculas}>e</span>L TRO<span className={styles.minusculas}>na</span>DOR'</h1>
                </div>
            </div>
            <div className={styles.subtitle}>
                <p>🍷Especialistas en vinos y bebidas</p>
                <p>📍Av. España esq. Yrigoyen</p>
                <p> 📞 0249 443-2981</p>
            </div>
            {!menuOpen && <i className={`bi bi-list ${styles.hamburger}`} onClick={() => setMenuOpen(true)} />}
        </div>
    </header>
}

export default Header