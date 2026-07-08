import { useState, useEffect } from 'react';

import styles from './productGrid.module.css'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'



function ProductGrid() {

    const navigate = useNavigate()

    const [randomProducts, setRandomProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const productsPerPage = 9;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const archivosGlob = import.meta.glob('/src/assets/cards/*', { eager: true });
    const rutasImagenes = Object.values(archivosGlob).map(modulo => modulo.default);
    const cantidadProductos = rutasImagenes.length




    const currentProducts = rutasImagenes.slice(indexOfFirstProduct, indexOfLastProduct);

    console.log("Glob: ", archivosGlob)
    console.log("first: ", indexOfFirstProduct)
    console.log("last: ", indexOfLastProduct)
    console.log("Cantidad: ", cantidadProductos)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

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
                Mostrando {cantidadProductos >= 10 ? productsPerPage : cantidadProductos} / {cantidadProductos} productos
            </div>


            <div className={styles.cardContainer}>
                {currentProducts.map((ruta, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardTitle}>Nombre del producto</div>
                        <img src={ruta} alt={"Productos destacados"} />
                        <div className={styles.description}>
                            <p>Descripcion del producto con algunas características importantes para que el cliente sepa lo que compra</p>
                            <h3 className={styles.price}>$50.000</h3>
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
        </div >
    )
}

export default ProductGrid;