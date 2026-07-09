import styles from './map.module.css'
import { Link } from 'react-router-dom'
import Back from '../back/back.jsx'


function Map() {
    return (
        <div className={styles.mapContainer}>
            <h1 className={styles.title}>¿Dónde estamos?</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.30091120511705!2d-59.14034966032145!3d-37.32321960213658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f8531336e7b%3A0xb5370becd411cf6c!2sVinoteca%20El%20Tronador!5e0!3m2!1ses-419!2sar!4v1783607562974!5m2!1ses-419!2sar" width="1000" height="700" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin">
            </iframe>


        <Back />



        </div>
        
    )
}

export default Map