import styles from './aboutUs.module.css'
import { Link } from 'react-router-dom'
import Back from '../back/back.jsx'


function AboutUs() {
    return (
        <div className={styles.about}>
            <h2 className={styles.text}>

                En el corazón de Tandil, donde la sierra guarda silencios y el viento susurra historias, nació hace más de tres décadas Vinoteca El Tronador. Todo comenzó en 1993, en el barrio Villa Italia, cuando una modesta vinería de barrio se convirtió en el punto de partida de un sueño familiar. El padre de Pablo Maisano, tras años como encargado de una estación de servicio, tomó las riendas de un fondo de comercio que ya llevaba el nombre de El Tronador. Aquel acto sencillo marcó el inicio de una travesía que transformaría una pequeña tienda en un clásico indiscutido de la ciudad.
                Con el paso de los años, la familia se fue sumando al proyecto: la madre, la hermana Estela y el hermano Juan tejieron, junto a Pablo, los hilos de un negocio construido con dedicación y amor profundo. De vinería de damajuanas y vinos a granel, El Tronador evolucionó al ritmo de la propia industria vitivinícola argentina. Acompañó el despertar de los varietales, la consagración del Malbec y la explosión de cervezas premium, siempre con la mirada atenta a los deseos de sus clientes y la humildad de quien sabe aprender cada día.
                Hoy, con dos locales emblemáticos —Av. España 498 esquina Yrigoyen y Av. Santamarina 145—, El Tronador es mucho más que una vinoteca: es un espacio donde se celebran encuentros, se descubren sabores y se comparten momentos. Un lugar que entiende que el buen beber no es solo cuestión de etiquetas, sino de pasión, familia y respeto por el bolsillo de cada tandilense.
                Porque ponerle amor a lo que se hace nunca pasa de moda. Porque Tandil y sus gentes merecen lo mejor. Esa es, y siempre será, la esencia de Vinoteca El Tronador.
                Brindamos por la historia que construimos juntos… y por todas las que están por venir. 🍷
            </h2>

            <Back />
        </div>
    )
}

export default AboutUs