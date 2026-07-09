# Vinoteca "eL TROnaDOR"
 
Landing page para una vinoteca, desarrollada como proyecto freelance/cliente. Sitio de una sola página (por ahora) con estética dark/gold, catálogo de productos, carrusel de destacados y contacto directo por WhatsApp.
 
## 🍷 Stack tecnológico
 
- **React 19** + **Vite** — frontend
- **React Router DOM** — ruteo (preparado para futuras secciones/páginas, aún sin rutas definidas)
- **CSS Modules** — estilos encapsulados por componente
- **Embla Carousel** (`embla-carousel-react` + `embla-carousel-autoplay`) — carrusel de imágenes destacadas
- **@digicroz/react-floating-whatsapp** — botón flotante de contacto por WhatsApp
- **Bootstrap Icons** — iconografía (redes sociales, flechas, etc.)
- **Tipografías custom** en `public/fonts/`: Cinzel, Cormorant Garamond, Cormorant Unicase, Playfair Display, y dos tipografías decorativas adicionales (`anarcharsissc.ttf`, `title.ttf`)
No hay backend ni base de datos por el momento: el catálogo de productos se maneja localmente en el proyecto (ver sección [Gestión de productos](#-gestión-de-productos)).
 
## 🚀 Instalación
 
```bash
git clone https://github.com/Federico-Pedro/vinoteca-el-tronador.git
cd vinoteca-el-tronador
npm install
npm run dev
```
 
El proyecto va a estar disponible en `http://localhost:5173`.
 
## 📁 Estructura del proyecto
 
```
public/
└── fonts/                  # Tipografías custom del sitio
 
src/
├── assets/
│   ├── destacados/          # Imágenes para el carrusel del hero
│   ├── cards/                # Imágenes de productos para la grilla
│   └── logo.png
├── components/
│   ├── header/
│   ├── navBar/
│   ├── carousel/             # Carrusel de destacados (Embla)
│   ├── socialSideBar/        # Sidebar fijo con iconos de redes sociales
│   ├── productGrid/          # Grilla de productos con paginación
│   └── footer/
├── App.jsx
├── App.css
└── main.jsx
```
 
Las imágenes de `destacados/` y `cards/` se importan dinámicamente con `import.meta.glob`, así que alcanza con soltar un archivo nuevo en la carpeta correspondiente para que aparezca en el sitio — no hace falta importarlas una por una a mano.
 
## 🎠 Carrusel de destacados
 
Construido con **Embla Carousel** en vez de `react-slick`, que fue la elección inicial pero resultó incompatible con React 19 (depende de `ReactDOM.findDOMNode`, eliminado en esa versión de React).
 
Estructura de tres niveles requerida por Embla (a diferencia de `react-slick`, es una librería *headless*, no trae HTML/CSS propio):
 
```
viewport (overflow: hidden, ref de Embla)
  └── container (display: flex — la fila que se desliza)
        └── slides individuales
```
 
Incluye botones de navegación (prev/next) y dots de posición, sincronizados vía el evento `"select"` de la API de Embla.
 
## 🛍 Gestión de productos
 
El catálogo actual (`ProductGrid`) muestra únicamente imágenes leídas de `/src/assets/cards/`, sin nombre, precio ni descripción asociados. Incluye paginación (10 productos por página) y un spinner de carga simulado con `setTimeout`.
 
**Decisión de arquitectura:** se evaluó implementar una base de datos con backend (Spring Boot + JPA, siguiendo el patrón de otros proyectos previos) para permitir autogestión del catálogo. Se descartó por ahora porque:
- El cliente no gestiona el catálogo — el desarrollador es quien carga/actualiza productos.
- El volumen y frecuencia de cambios del catálogo no justifica el costo de mantener backend + base de datos + hosting de servidor.
**Enfoque planeado:** un archivo `src/data/productos.js` con un array de objetos (`id`, `nombre`, `precio`, `descripcion`, `imagen`) versionado junto al código. Agregar un producto implica sumar un objeto al array y hacer un nuevo deploy — costo aceptable dado el contexto del negocio. **Pendiente de implementar** — `ProductGrid` todavía no tiene nombres ni precios.
 
## 📞 Contacto
 
- **WhatsApp:** botón flotante (`FloatingWhatsApp`) con número, nombre de cuenta y mensaje predefinido ya configurados.
- **Formulario de contacto:** pendiente de implementación. Opciones evaluadas: Formspree / EmailJS (sin backend propio) o endpoint propio en Spring Boot con `JavaMailSender` (si el proyecto llega a tener backend).
## ⚠️ Notas y problemas conocidos resueltos
 
- **`react-slick` → Embla:** ver sección de carrusel.
- **`react-whatsapp-widget` → `@digicroz/react-floating-whatsapp`:** el paquete original no soporta React 19 (peer dependency `^18.0.0`). Se probaron alternativas mantenidas hasta encontrar una compatible.
- **Caché de Vite desactualizada:** al instalar/desinstalar paquetes con el servidor de desarrollo corriendo, puede aparecer el error `Outdated Optimize Dep` (504). Solución: reiniciar con `npm run dev -- --force`, o borrar `node_modules/.vite` manualmente.
- **`return` con salto de línea antes del JSX:** por Automatic Semicolon Insertion, `return` seguido de un salto de línea antes de `<>` hace que la función devuelva `undefined` sin tirar error. Siempre envolver en paréntesis: `return (...)`.
## 🧹 A revisar antes de la entrega final
 
- [ ] Limpiar los archivos duplicados con `(Copy)` en `src/assets/cards/` (quedaron de pruebas para simular más productos en la paginación).
- [ ] Implementar `productos.js` con datos reales y conectar `ProductGrid`.
- [ ] Formulario de contacto funcional.
- [ ] Definir si el sitio va a tener más de una página (rutas ya preparadas con React Router, pero vacías).
 