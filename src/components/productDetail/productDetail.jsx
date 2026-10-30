import { useParams } from "react-router-dom";
import productos from '../../data/productos.json';
import styles from './productDetail.module.css'
import { Link } from 'react-router-dom'
import { useCart } from "../../context/CartContext.jsx";


function ProductDetail() {
    const { id } = useParams();
    const producto = productos.find((p) => p.id === Number(id));
    const precioFinal = producto.precio * (1 - producto.desc / 100);
    const { addToCart } = useCart();

    return (
        <div className={styles.detailContainer}>
            <img className={styles.image} src={producto.imagen} alt={producto.nombre} />
            <div className={styles.textContainer}>

                <h1>{producto.nombre}</h1>
                <h2>{producto.uva}</h2>
                <p>{producto.descripcion}</p>
                {producto.desc > 0 ? (
                    <>
                        <h3>${precioFinal}</h3>
                        <small className={styles.discount}><s>${producto.precio}</s> ({producto.desc}% OFF)</small>
                    </>
                ) : (
                    <h3 className={styles.price}>${producto.precio}</h3>
                )}
                <div className={styles.cartButtonContainer}>
                    {producto.stock ?
                        <button className={styles.addToCartButton} onClick={() => addToCart(producto)}>
                            Agregar al carrito
                        </button> : <p className={styles.disponible}>El producto no se encuentra disponible</p>
                    }
                </div>
                <Link to="/productGrid">
                <h4 className={styles.back}><i className="bi bi-arrow-left"></i>Volver</h4>
            </Link>
            </div>

        </div>
    )

}

export default ProductDetail;