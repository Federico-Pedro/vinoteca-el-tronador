import { useState, useEffect, useMemo } from 'react';

import styles from './productGrid.module.css'
import Back from '../back/back.jsx'
import productos from '../../data/productos.json';
import PriceRangeSlider from '../slider/slider.jsx'
import { useCart } from "../../context/CartContext.jsx";
import spinner from "../../assets/spinner.gif"

function ProductGrid() {



    const productsPerPage = 6;

    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(productsPerPage)
    const [activeFilters, setActiveFilters] = useState([]);
    const [alcohol, setAlcohol] = useState(false);
    const [minVal, setMinVal] = useState(2500);
    const [maxVal, setMaxVal] = useState(100000);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const { addToCart } = useCart();


    const productosFiltrados = useMemo(() => {
        let resultado = productos;

        // 1. Filtro por categoría (solo si hay categorías activas)
        if (activeFilters.length > 0) {
            resultado = resultado.filter((p) => activeFilters.includes(p.bodega));
        }

        // 2. Filtro por precio, aplicado sobre el resultado anterior
        resultado = resultado.filter(
            (p) => p.precio >= minVal && p.precio <= maxVal
        );

        // 3. Filtro sin Alcohol
        if (alcohol) {

            resultado = resultado.filter((p) => p.sinAlcohol === true);
        }

        return resultado;

    }, [activeFilters, minVal, maxVal, alcohol]);


    let cantidadProductos = 0
    productosFiltrados.map(p => cantidadProductos += 1)


    //CATEGORIAS DE LOS PRODUCTOS TRAIDAS DEL JSON

    let bodegas = productos.map(producto => producto.bodega)
    bodegas = [...new Set(bodegas)]


    //AGREGA A "ACTIVEFILTERS" LOS FILTROS CLICKEADOS
    const handleFilterClick = (filter) => {
        setActiveFilters(prev =>
            prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
        )
        console.log(activeFilters)

    }



    useEffect(() => {
        if (productosFiltrados.length <= 6) {
            setCurrentPage(1)
        }
        return
    }, [productosFiltrados])


    const currentProducts = productosFiltrados.slice(indexOfFirstProduct, indexOfLastProduct);


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
                <img src={spinner} alt="spinner" />
                <div className="spinner">Cargando productos...</div>

            </div>
        );
    }

    return (
        <div className={styles.body}>

            <div className={styles.filtersContainer}>
                <button
                    className={alcohol ? styles.clickedButton : styles.filterButton}
                    onClick={() => setAlcohol(!alcohol)}
                >
                    SIN ALCOHOL
                </button>
                {bodegas.map((cat) => (
                    <button
                        className={activeFilters.includes(cat) ? styles.clickedButton : styles.filterButton}
                        onClick={() => handleFilterClick(cat)}
                    >
                        {cat.toUpperCase()}
                    </button>
                ))}

            </div>

            <PriceRangeSlider
                min={2500}
                max={100000}
                minVal={minVal}
                maxVal={maxVal}
                onMinChange={setMinVal}
                onMaxChange={setMaxVal}
            />
            <div className={styles.counter}>
                Mostrando {cantidadProductos <= productsPerPage ? cantidadProductos : counter} / {cantidadProductos} productos
            </div>


            <div className={styles.cardContainer}>
                {currentProducts.map((producto) => (
                    <div key={producto.id} className={styles.card}>
                        <div className={styles.cardTitle}>{producto.nombre} </div>
                        <div className={styles.cardSubTitle}>{producto.uva} </div>

                        <img src={producto.imagen} alt={"Productos destacados"} />

                        <div className={styles.description}>
                            <p>{producto.descripcion}</p>
                            <h3 className={styles.price}>${producto.precio}</h3>
                        </div>
                        <div className={styles.cartButtonContainer}>
                            {producto.stock ?
                                <button className={styles.addToCartButton} onClick={() => addToCart(producto)}>
                                    Agregar al carrito
                                </button> : <p className={styles.disponible}>El producto no se encuentra disponible</p>
                            }
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