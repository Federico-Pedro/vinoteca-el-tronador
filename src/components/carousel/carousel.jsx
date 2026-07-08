import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./carousel.module.css";


function Carousel() {

    const archivosGlob = import.meta.glob('/src/assets/destacados/*', { eager: true });
    const rutasArchivos = Object.keys(archivosGlob);

    

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 6000 })]
    );

    const [indiceActivo, setIndiceActivo] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setIndiceActivo(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <div className={styles.viewport} ref={emblaRef}>
            <div className={styles.container}>
                {rutasArchivos.map(ruta => (
                    <div key={ruta} className={styles.destacado}>
                        <img src={archivosGlob[ruta].default} alt={"Productos destacados"} />
                    </div>
                ))}
            </div>
            <div className={styles.arrows}>
                <i className="bi bi-arrow-left-circle" onClick={() => emblaApi.scrollPrev()}></i>
                <i className="bi bi-arrow-right-circle" onClick={() => emblaApi.scrollNext()}></i>
            </div>
            <div className={styles.dots}>
                {rutasArchivos.map((_, indice) => (
                    <button
                        key={indice}
                        className={indice === indiceActivo ? styles.dotActivo : styles.dot}
                        onClick={() => emblaApi && emblaApi.scrollTo(indice)}
                    />
                ))}
            </div>
        </div>
    )

}

export default Carousel