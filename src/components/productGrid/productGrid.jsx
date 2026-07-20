import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

import styles from './productGrid.module.css'
import Back from '../back/back.jsx'
import productos from '../../data/productos.json';



function ProductGrid() {

    const navigate = useNavigate()

    const productsPerPage = 6;
    const [randomProducts, setRandomProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(productsPerPage)

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    
    let cantidadProductos = 0
    
    productos.map(p => cantidadProductos += 1)

    

    const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);


    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {

        const products = cantidadProductos >= (currentPage * productsPerPage) ? (currentPage * productsPerPage) : cantidadProductos
        setCounter(products)

        return;
    }, [currentPage]);


    const totalPages = Math.ceil(cantidadProductos / productsPerPage);

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '20px', color: 'white' }}>
                <img src="/public/Spinner@1x-1.0s-200px-200px.gif" alt="spinner" />
                <div className="spinner">Cargando productos...</div>

            </div>
        );
    }

    return (
        <div className={styles.body}>


            <div className={styles.counter}>
                Mostrando {cantidadProductos <= productsPerPage ? cantidadProductos : counter} / {cantidadProductos} productos
            </div>


            <div className={styles.cardContainer}>
                {currentProducts.map((producto) => (
                    <div key={producto.id} className={styles.card}>
                        <div className={styles.cardTitle}>{producto.nombre}</div>
                        <img src={producto.imagen} alt={"Productos destacados"} />
                        <div className={styles.description}>
                            <p>{producto.descripcion}</p>
                            <h3 className={styles.price}>${producto.precio}</h3>
                        </div>
                    </div>
                ))}

            </div>
            <div className={styles.paginationContainer}>
                <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className={styles.paginationButton}
                >
                    ⏮ Inicio
                </button>
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={styles.paginationButton}
                >
                    ← Anterior
                </button>

                <div className={styles.pageNumbers}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                        <button
                            key={number}
                            onClick={() => setCurrentPage(number)}
                            className={currentPage === number ? styles.activePage : styles.pageButton}
                        >
                            {number}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={styles.paginationButton}
                >
                    Siguiente →
                </button>
            </div>
            <Back />
        </div >

    )
}

export default ProductGrid;