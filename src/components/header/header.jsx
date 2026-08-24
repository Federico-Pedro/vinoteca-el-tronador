import { Link } from 'react-router-dom'
import styles from "./header.module.css";
import logo from '../../assets/logo-black.png';

import { useCart } from "../../context/CartContext.jsx";
import Cart from '../cart/cart.jsx'


function Header() {

    const { cart, isCartOpen, openCart, closeCart } = useCart();
    
    
    

    const cantidadTotalProductos = cart.reduce((acc, item) => acc + item.cantidad, 0);

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
            <div className={styles.cartContainer} onClick={openCart}>
                <div className={styles.iconContainer}>

                <i className="bi bi-cart"></i>
                <p className={styles.numberOfProducts}>{cantidadTotalProductos}</p>
                </div>
            </div>
        </div>
        {isCartOpen && <Cart />}
    </header>
}

export default Header