import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollTo() {
    const { pathname } = useLocation();

    useEffect(() => {
        document.getElementById('contenido-rutas')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, [pathname]);

    return null;
}

export default ScrollTo;