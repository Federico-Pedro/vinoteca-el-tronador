import { Link } from 'react-router-dom'
import styles from "./header.module.css";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

import logo from '../../assets/logo.png';


function Header() {

    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()

    return <header className={styles.header}>
        <div className={styles.container}>

            <div className={styles.subContainer}>
                <Link to="/"><img className={styles.logo} src={logo} alt="Logo de 'eL TROnaDOR', vinoteca" /></Link>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Vinoteca 'eL TROnaDOR'</h1>
                </div>
                {!menuOpen && <i className={`bi bi-list ${styles.hamburger}`} onClick={() => setMenuOpen(true)} />}
            </div>

        </div>
    </header>
}

export default Header